import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

//combines all the reducers into one
const rootReducer = combineReducers({
    counterReducer: counterReducer,
    loggedReducer: loggedReducer
})

export default rootReducer;