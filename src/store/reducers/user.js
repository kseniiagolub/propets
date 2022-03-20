const initialState = {
    email: null,
    token: null,
    id: null
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_USER':
            return {...state, email: payload.email, token: payload.token, id: payload.id}
        case 'REMOVE_USER':
            return {...state, email: null, token: null, id: null}
        default:
            return state
    }
}