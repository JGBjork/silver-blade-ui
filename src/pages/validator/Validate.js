import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { KeyValueDisplay, KeyValueLinkDisplay } from '../../components/view/KeyValueDisplay';
import { ValidationError } from '../../errors/ProcessErrors';
import { selectValidator } from '../../app/store/validatorSlice';
import { reset } from '../../app/store/validatorSlice';
import { 
  sendRequest, 
  renderSuccess, 
  renderError,
  makeErrorResponseChecker
} from '../../util/functions';

const app = "silver-blade.herokuapp.com";
const path = "validate";
const url = `https://${app}/${path}`;

function request(url, body, config, dispatch, resetAction) {
  const responseDetails = data => {
    return (
      <div class="container">
        <div>Protected Information</div>
        <KeyValueLinkDisplay
            objKey="Profile ID" 
            href={`https://www.sololearn.com/Profile/${data.details.id}`}
            value={data.details.id} />
        <KeyValueLinkDisplay 
            objKey="Code ID" 
            href={`https://code.sololearn.com/${data.details.codeid}`}
            value={data.details.codeid} />
        <KeyValueDisplay objKey="Author" value={data.details.author} />
        <KeyValueDisplay objKey="Description" value={data.details.description} />
        <KeyValueDisplay objKey="Issued At" value={new Date(data.details.timestamp).toString()} />
      </div>
    );
  }

  const validationErrorDetails = (
    <div className="alert alert-info">
      The seal could not be validated. This might be due to tampering
      with the information contained or its signature.
    </div>
  );
  
  const errorDetails = (
    <div className="alert alert-info">
      The seal could not be validated. This might have happened because of
      an corrupted seal format.
    </div>
  );

  // Custom Middleware
  function evaluateSuccess(data) {
    if(data.success === false)
      throw new ValidationError("Seal validation not successful");
    return data;
  }

  // send request
  sendRequest(url, body, config, dispatch)
  .then(makeErrorResponseChecker("Request could not be processed"))
  .then(res => res.json())
  .then(evaluateSuccess)
  .then(data => renderSuccess(
    data, 
    'Seal successfully validated',
    responseDetails(data),
    dispatch,
    resetAction
  ))
  .catch(e => {
    if(e instanceof ValidationError)
      renderError(e, validationErrorDetails, dispatch, resetAction);
    else
      renderError(e, errorDetails, dispatch, resetAction)
  });
}

export default () => {
  const validator = useSelector(selectValidator);
  const dispatch = useDispatch();
  
  return (
    <>
      <div>
        <p>
          Congratulations, that is all. 
          Click "Validate" below to validate the seal.
        </p>
      </div>
      <div id="responseContainer">
        <div id="responseStatus"></div>
        <div id="responseDetails"></div>
      </div>
      <div className="container-fluid pt-3">
        <div id="btnContainer" className="row justify-content-center">
          <button className="col-6 col-md-4 btn btn-primary ml-1 mr-1"
                  id="btnValidate"
                  onClick={e => {
                    e.target.disabled = true;
                    request(
                      url,
                      {
                        seal: validator.seal
                      },
                      { spinnerHook: 'responseDetails' },
                      dispatch,
                      reset()
                    );
                  }}>
            Validate
          </button>
        </div>
      </div>
    </>
  );
}
