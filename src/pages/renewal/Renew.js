import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ValidationError } from '../../errors/ProcessErrors';
import { selectRenewal } from '../../app/store/renewalSlice';
import { KeyValueDisplay } from '../../components/view/KeyValueDisplay';
import { reset } from '../../app/store/renewalSlice';
import { 
  sendRequest, 
  renderSuccess, 
  renderError,
  makeErrorResponseChecker
} from '../../util/functions';

const app = "silver-blade.herokuapp.com";
const path = "renew";
const url = `https://${app}/${path}`;

function request(url, body, config, dispatch, resetAction) {
  const responseDetails = data => {
    return (
      <>
        <div>Seal</div>
        <textarea className="w-100"
                  readOnly
                  rows="6"
                  value={data.seal}>
        </textarea>
        <div className="alert alert-warning mt-3">
          <p>
            Please take note of the renewal key below.
          </p>
          <p>
            The renewal key cannot be restored once it is lost.
            It has not been copied to clipboard, please be sure to write it
            down and keep it in a safe place; preferably not on SoloLearn.
          </p>
        </div>
        <KeyValueDisplay className="text-monospace" 
                         objKey="Renewal Key" 
                         value={data.renewalkey} />
      </>
    );
  }

  const validationErrorDetails = (
    <div className="alert alert-info">
      The seal could not be renewed. This might have been cause by either
      the seal having been tampered with, or the renewal key being invalid.
    </div>
  );
  
  const errorDetails = (
    <div className="alert alert-info">
        The seal could not be generated. This may be due to insufficient
        details provided.
        Note that both the Profile ID and the Code ID are necessary.
    </div>
  );

  // Custom Middleware
  function evaluateSuccess(data) {
    if(data.success === false)
      throw new ValidationError("Seal renewal not successful");
    return data;
  }

  // send request
  sendRequest(url, body, config, dispatch)
  .then(makeErrorResponseChecker("Seal could not be renewed"))
  .then(res => res.json())
  .then(evaluateSuccess)
  .then(data => renderSuccess(
    data, 
    'Your seal has been renewed',
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
  const renewal = useSelector(selectRenewal);
  const dispatch = useDispatch();
  
  return (
    <>
      <div>
        <p>
          Congratulations, that is all. 
          Click "Renew" below to generate the seal.
        </p>
      </div>
      <div id="responseContainer">
        <div id="responseStatus"></div>
        <div id="responseDetails"></div>
      </div>
      <div className="container-fluid pt-3">
        <div id="btnContainer" className="row justify-content-center">
          <button className="col-6 col-md-4 btn btn-primary ml-1 mr-1"
                  id="btnGenerate"
                  onClick={e => {
                    e.target.disabled = true;
                    request(
                      url,
                      {
                        seal: renewal.seal,
                        renewalkey: renewal.renewalKey,
                        details: {
                          id: renewal.profileId,
                          codeid: renewal.codeId
                        }
                      },
                      { spinnerHook: 'responseDetails' },
                      dispatch,
                      reset()
                    );}
                  }>
            Renew
          </button>
        </div>
      </div>
    </>
  );
}
