const initialState = {
    isSingUp: true,
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_COMPONENT_AUTH':
            return {...state, isSingUp: payload}
        case 'SET_COMPONENT_REGISTR':
            return {...state, isSingUp: payload}
        default:
            return state
    }
}