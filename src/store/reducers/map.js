const initialState = {
    map: false,
    header: false,
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_MAP_ACTIVE':
            return {...state, map: payload.map, header: payload.header}
        default:
            return state
    }
}