import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux';
import {Provider } from 'react-redux';

const store = createStore(App);

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter></Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
