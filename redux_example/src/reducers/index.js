import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counterReducer: counterReducer,
    loggedReducer: loggedReducer
})

export default rootReducer;