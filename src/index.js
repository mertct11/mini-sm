import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './pages/index';


import store from "./redux/store"; 
import { Provider } from 'react-redux';  

ReactDOM.render(

  <Provider store={store} >
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
