import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { KeyValueDisplay } from '../../components/view/KeyValueDisplay';
import { selectGenerator } from '../../app/store/generatorSlice';
import { reset } from '../../app/store/generatorSlice';
import { 
  sendRequest, 
  renderSuccess, 
  renderError,
  makeErrorResponseChecker
} from '../../util/functions';

const app = "silver-blade.herokuapp.com";
const path = "generate";
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

  const errorDetails = (
    <div className="alert alert-info">
      <p>
        The seal could not be generated. This may be due to insufficient
        details provided.
        Note that both the Profile ID and the Code ID are necessary.
      </p>
    </div>
  );

  // send request
  sendRequest(url, body, config, dispatch)
  .then(makeErrorResponseChecker("The seal could not be generated"))
  .then(res => res.json())
  .then(data => renderSuccess(
    data, 
    'Your seal has been generated',
    responseDetails(data),
    dispatch,
    resetAction
  ))
  .catch(e => renderError(e, errorDetails, dispatch, resetAction));
}

// Generator Page
export default () => {
  const generator = useSelector(selectGenerator);
  const dispatch = useDispatch();
  
  return (
    <>
      <div>
        <p>
          Congratulations, that is all. 
          Click "Generate" below to generate the seal.
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
                        id: generator.profileId,
                        codeid: generator.codeId,
                        author: generator.author,
                        description: generator.description
                      },
                      { spinnerHook: 'responseDetails' }, 
                      dispatch,
                      reset()
                    );
                  }}>
            Generate
          </button>
        </div>
      </div>
    </>
  );
}
