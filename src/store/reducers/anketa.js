const initialState = {
    type: null,
    sex: null,
    breed: null,
    color: null,
    height: null,
    features: null,
    description: null,
    location: null,
    contacts: [],
    images: [],
    date: Date.now(),
    found: false,
}



export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_ANKETA_INFO':
            return {
                ...state,
                type: payload.type,
                sex: payload.sex,
                breed: payload.breed,
                color: payload.color,
                height: payload.height,
                features: payload.features,
                description: payload.description,
                location: payload.location,
                contacts: payload.contacts,
                date: payload.date,
                found: payload.found,
            }
        case 'SET_ANKETA_IMG':
            return {...state, images: [...state.images, payload]}
        default:
            return state
    }
}