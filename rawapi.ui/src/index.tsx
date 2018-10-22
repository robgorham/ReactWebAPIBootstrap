import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, Store } from 'redux';
// react-router has its own Redux middleware, so we'll use this
import { routerMiddleware } from 'react-router-redux';
// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
import { composeWithDevTools } from 'redux-devtools-extension';
// If you use react-router, don't forget to pass in your history type.
import { History, createHashHistory } from 'history';
import reducers from './store/reducers';
//import { initialState } from './store/reducers';
import { StoreState } from './types/index';
import { Provider } from 'react-redux';
import { DemoActions } from './store/actions';

function configureStore(
    history: History,
    initialState: StoreState,): Store<StoreState> {
    const composeEnhancers = composeWithDevTools({});
    return createStore<StoreState, DemoActions, any, any>(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(
            routerMiddleware(history),
        )),
    );
}

const history = createHashHistory();

const store = configureStore(history, {});

ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider></BrowserRouter >,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
