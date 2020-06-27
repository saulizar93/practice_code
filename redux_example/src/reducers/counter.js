//reducer to handle the increment and decrement actions in a switch statement
//it adds or subtracts the state value (which is initialized at 0) by the action.payload (fed to the action as parameter)
const counterReducer = (state=0, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
}

export default counterReducer;