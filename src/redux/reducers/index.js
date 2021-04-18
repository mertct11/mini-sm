import {combineReducers } from 'redux';
 
 
import loginReducer from './loginReducer' 
import menuReducer from './menuReducer' 

import postsReducer from './postsReducer' 

export default combineReducers({ 
    posts:postsReducer,
    login:loginReducer,
    menu:menuReducer, 
});
