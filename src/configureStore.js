import { createStore, applyMiddleware } from 'redux';
import Reducers from './reducers';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

export const history = createHistory()
const history_middleware = routerMiddleware(history)

const Store = createStore(Reducers, applyMiddleware(history_middleware, thunk));

export default Store;
