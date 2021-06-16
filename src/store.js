import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middleWare = applyMiddleware(thunk);

export default createStore(reducer, compose(middleWare));