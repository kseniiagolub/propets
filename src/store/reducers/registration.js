const initialState = {
    name: null,
    email: null,
    password: null,
    passwordSecond: null
}

// const passCompare = (passwordFirst, passwordSecond) => {
//     if (passwordFirst === passwordSecond || passwordSecond === passwordFirst) {
//         dispatch({type: 'SET_USER_PASSWORD', payload: passwordFirst})
//     } else {
//         alert('Passwords do not match')
//         dispatch({type: 'SET_USER_PASSWORD', payload: null})
//     }
// }


export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_USER_NAME':
            return {...state, name: payload}
        case 'SET_USER_EMAIL':
            return {...state, email: payload}
        case 'SET_USER_PASSWORD':
            return {...state, password: payload}
        case 'SET_USER_PASSWORD_SECOND':
            return {...state, passwordSecond: payload}
        default:
            return state
    }
}