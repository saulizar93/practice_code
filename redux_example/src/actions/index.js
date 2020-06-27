
//an increment action that will increment by the given number. type and payload are proper naming conventions
export const increment = (byNumber) => {
    return{
        type: 'INCREMENT',
        payload: byNumber
    }
}

//a decrement action will decrement by the given number, which will be stored in the action.payload
export const decrement = (byNumber) => {
    return{
        type: 'DECREMENT',
        payload: byNumber
    }
}

//sign in action will just send 'SIGN IN' to the reducer to change the boolean from True to False and vice versa
export const signIn = () => {
    return{
        type: 'SIGN IN'
    }
}