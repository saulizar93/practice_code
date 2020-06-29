import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

//import { createStore } to create the centralized redux store
import { createStore } from 'redux';

//import { rootReducer } where all the reducers are combined into one
import rootReducer from './reducers';

//import { Provider } which will wrap <App /> and will take in store as a parameter
import { Provider } from 'react-redux';

//createStore will take in only one Reducer, that's why we feed it the root Reducer with all them combined
//we install the redux plugin in Chrome and then feed window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//to be able to use the Redux tool and look at the variables stored in the redux store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


//wrap App with <Provider>
ReactDOM.render(
  
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//STEPS 
//1) npx create-react-app react_example
//2) npm i react react-redux
//3) We need a store
//4) We need an action
//5) We need a reducer
//6) We need to dispatch the action