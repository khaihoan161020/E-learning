import createSagaMiddleware from "redux-saga";
import {applyMiddleware, compose, createStore} from 'redux'
import {routerMiddleware} from 'connected-react-router'
import thunk from 'redux-thunk';
import rootSaga from "../root-saga";
import createRootReducer from '../root-reducer';
const createBrowserHistory = require('history').createBrowserHistory;


export const history = createBrowserHistory();

const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk,sagaMiddleware, routeMiddleware];

export default function configureStore(preloadedState) {
 
  const store = compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )(createStore)(createRootReducer(history));
  sagaMiddleware.run(rootSaga);
  return store;
}
