//the initial state is set to false, but if the action is 'SIGN IN', it will set it to its opposite value (false to true and vice versa)
const loggedReducer = (state=false,action)=>{
    switch(action.type){
        case 'SIGN IN':
            return !state;
        default:
            return state;
    }
}

export default loggedReducer;