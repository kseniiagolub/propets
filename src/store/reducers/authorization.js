const initialState = {
    email: null,
    password: null,
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_USER_EMAIL_AUTH':
            return {...state, email: payload}
        case 'SET_USER_PASSWORD_AUTH':
            return {...state, password: payload}
        default:
            return state
    }
}