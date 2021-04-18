import { applyMiddleware, createStore } from 'redux'
import reducers from '../reducers';

import thunk from 'redux-thunk'

const initialState = {};

const middleWare = [thunk];

const store = createStore(reducers, initialState, applyMiddleware(...middleWare));


export default store;  
