import React from 'react';
import {Switch,Route } from 'react-router-dom';
import frontPage from './components/frontPage';
import homePage from './components/homePage';
import EventHandler from './components/calendar';
import testComponent from './components/testComponent';
import GetBatchDetails from './components/batchDetails';
// import {useDispatch,useSelector} from 'react-redux';
// import { increment, decrement, signIn } from './actions';

//useSelector allows us to access the variables stored in the store
//useDispatch allows us to dispatch an action

// { increment, decrement} are our actions

function App() {

  // //store in counter the value of the state.counterReducer
  // const counter = useSelector(state=> state.counterReducer);

  // //store is isLogged the boolena stored in state.isLogged
  // const isLogged = useSelector(state=> state.loggedReducer);

  // //used to dispatch actions
  // const dispatch= useDispatch();
  return (

     <div>
    {/* //   <div className="App">
    //   <h1>Counter {counter}</h1>
    //   <button onClick={()=> dispatch(increment(5))}>+</button>
    //   <button onClick={()=> dispatch(decrement(5))}>-</button>
    //   <button onClick={()=> dispatch(signIn())}>LogIn/LogOut</button>
    //   {isLogged ? <h3>Login: True</h3>:<h3>Login: False</h3>}
    //   {isLogged ? <h3>Valuable information I shouldn't see</h3>:<h3>Normal information</h3>}
    // </div> */}
      <Switch>
      <Route path='/' component={homePage} exact/>
      <Route path='/frontpage' component={frontPage} />
      <Route path='/calendar' component={EventHandler} />
      <Route path='/test' component={testComponent} />
      <Route path='/batchdetails' component={GetBatchDetails} />
    </Switch>
    </div>
  );
}

export default App;
