const initialState = {
    map: false,
    header: false,
    finish: false,
    edit: false,
    dropdown: false,
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_MAP_ACTIVE':
            return {...state, map: payload.map, header: payload.header}
        case 'SET_ANKET':
            return {...state, finish: payload.finish, edit: payload.edit}
        case 'SET_DROPDOWN':
            return {...state, dropdown: payload.dropdown}
        default:
            return state
    }
}