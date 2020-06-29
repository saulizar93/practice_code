import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, signIn } from './actions';
import {Switch,Route } from 'react-router-dom';
import ClippedDrawer from './components/drawer';
import SimpleMenu from './components/dropDown';

//useSelector allows us to access the variables stored in the store
//useDispatch allows us to dispatch an action

// { increment, decrement} are our actions




function App() {
  //store in counter the value of the state.counterReducer
  const counter = useSelector(state=> state.counterReducer);

  //store is isLogged the boolena stored in state.isLogged
  const isLogged = useSelector(state=> state.loggedReducer);

  //used to dispatch actions
  const dispatch= useDispatch();

  //button + will increment by 5, you can change it on the action object
  //button - will decrement by 5, you can change it on the action object
  //isLogged will alternate between "TRUE" and "FALSE", and will print accordintly

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement(5))}>-</button>
      <button onClick={()=> dispatch(signIn())}>LogIn/LogOut</button>
      {isLogged ? <h3>Login: True</h3>:<h3>Login: False</h3>}
      {isLogged ? <h3>Valuable information I shouldn't see</h3>:<h3>Normal information</h3>}
      <Switch>
      <Route path='/drawer' component={ClippedDrawer} />
      <Route path='/menu' component={SimpleMenu} />
    </Switch>
    </div>
    
  );
}

export default App;
