import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppHeader from './components/view/AppHeader';
import Home from './Home';
import Page from './components/container/Page';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AppHeader />
  </React.StrictMode>,
  document.getElementById('appHeader')
);

ReactDOM.render(
  <React.StrictMode>
    <Page>
      <Home />
    </Page>
  </React.StrictMode>,
  document.getElementById('pager')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
