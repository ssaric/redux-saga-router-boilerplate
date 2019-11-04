import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';


import history from './util/history';
import rootSaga from './sagas/rootSaga';
import rootReducer from './reducers/rootReducer';

import App from './App';

import './index.css';


const routerMiddlewareInstance = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    rootReducer(history),
    process.env.NODE_ENV !== 'production'
        ? applyMiddleware(sagaMiddleware, logger, routerMiddlewareInstance)
        : applyMiddleware(sagaMiddleware, routerMiddlewareInstance)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <App store={store} history={history} />,
    document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
        module.hot.accept('./App', () => {
            ReactDOM.render(
                <App store={store} history={history} />,
                document.getElementById('root')
            );
        });
        module.hot.accept('./reducers/rootReducer', () => {
            store.replaceReducer(rootReducer);
        });
    }
}
