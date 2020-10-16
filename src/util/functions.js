import React from 'react';
import ReactDOM from 'react-dom';
import { Page } from '../components/container/Pager';
import Home from '../Home';
import Spinner from '../components/view/Spinner';
const fetch = require('node-fetch');

// Create an error response handler with custom generic message
// @param msg: String - custom message on default error
// @returns: Function - a response handler for node-fetch
export function makeErrorResponseChecker(msg) {
  return res => {
    if(res.status === 200) 
      return res;
    else if (res.status === 400) 
      throw Error("Bad Request");
    else if (res.status === 500)
      throw Error("Internal Server Error");
    else throw Error(`[${res.status}] ${msg}`);
  }
}

//
// Server reponse rendering
//
// This section contains functions that serve to render the server
// response onto the screen.
//
// 'goHome' and 'insertOkButton' are auxiliary functions to the main
// rendering functions, and are not exported.
//

// Redirect to home screen
function goHome() {
  ReactDOM.render(
    <React.StrictMode>
      <Page titleLess>
        <Home />
      </Page>
    </React.StrictMode>,
    document.getElementById('pager')
  );
}

// Replace send button with OK
// @param dispatch: redux action dipatcher
// @param resetAction: redux action to reset slice
function insertOkButton(dispatch, resetAction) {
  ReactDOM.render(
    <button className="col-6 col-md-4 btn btn-primary ml-1 mr-1"
            onClick={() => {
              dispatch(resetAction);
              goHome();}
            }>OK</button>,
    document.getElementById('btnContainer')
  );
}

// Render details and insert OK button
// @param details: the details to render
// @param dispatch: redux action dispatcher
// @param resetAction: redux action to reset slice
function finaliseResponseRender(details, dispatch, resetAction) {
  // render user notification
  ReactDOM.render(
    details,
    document.getElementById('responseDetails')
  );

  // insert OK button
  insertOkButton(dispatch, resetAction);
}

// Render details in case of a success response
// @param data: server response data
// @param msg: a custom message to display
// @param responseDetails: the details to render
// @param dispatch: redux action dispatcher
// @param resetAction: redux action to reset slice
export function renderSuccess(data, msg, responseDetails, dispatch, resetAction) {
  // render OK response notice
  ReactDOM.render(
    <div className="alert alert-success">
      {msg}
    </div>,
    document.getElementById('responseStatus')
  );

  finaliseResponseRender(responseDetails, dispatch, resetAction);
}

// Render details in case of a failure response
// @param data: server response data
// @param msg: a custom message to display
// @param errorDetails: the details to render
// @param dispatch: redux action dispatcher
// @param resetAction: redux action to reset slice
export function renderError(e, errorDetails, dispatch, resetAction) {
  // render error message
  ReactDOM.render(
    <div className="alert alert-danger">{e.message}</div>,
    document.getElementById('responseStatus')
  );

  finaliseResponseRender(errorDetails, dispatch, resetAction);
}

// Sends a request to the server
// @param url: target API endpoint
// @param body: object with the details to send
// @param config: configuration object
// @param dispatch: redux action dispatcher
export function sendRequest(url, body, config, dispatch) {
  // block further clicks
  
  // insert a spinner to indicate loading
  if(config.spinnerHook) {
    ReactDOM.render(
      <Spinner />,
      document.getElementById(config.spinnerHook)
    );
  }

  // request data from server
  return fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify(body)
  });
}
