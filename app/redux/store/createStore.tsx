import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from '../reducers/index';

//import { rootSaga } from '../sagas/index';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware,
        // createLogger(),
    )
);

sagaMiddleware.run(rootSaga);

export { store }