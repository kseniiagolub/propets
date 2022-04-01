const initialState = {
    email: null,
    name: null,
    id: null,
    token: null,
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_INFO_USER':
            return {...state, name: payload.name, id: payload.id}
        case 'SET_INFO_USER_REG':
            return {...state, email: payload.email, token: payload.token, id: payload.id}
        default:
            return state
    }
}