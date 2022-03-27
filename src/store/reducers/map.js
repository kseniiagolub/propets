const initialState = {
    map: false,
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_MAP_ACTIVE':
            return {...state, map: payload}
        default:
            return state
    }
}