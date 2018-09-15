import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {injectGlobal} from "styled-components";

ReactDOM.render(<App />, document.getElementById('main'));
registerServiceWorker();

injectGlobal`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
  }`;