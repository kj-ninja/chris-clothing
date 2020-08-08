import {createStore, applyMiddleware, compose} from "redux";
import {persistStore} from "redux-persist";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const middlewares = [sagaMiddleware];

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);