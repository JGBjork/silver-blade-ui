import React from 'react';
import ReactDOM from 'react-dom';
import { Page } from '../container/Pager';
import Home from '../../Home';

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

function Title(props) {
  let text = props.caption;
  if (props.paged) {
    text += ` - step ${props.part} of ${props.total}`;
  }
  return(
    <div className="d-flex justify-content-between">
    <h3 className="text-muted">{text}</h3>
    <button type="button" 
            className="close" 
            aria-label="Close"
            onClick={goHome}>
      <span aria-hidden="true">&times;</span>
    </button>
    </div>
  );
}

export default Title;
