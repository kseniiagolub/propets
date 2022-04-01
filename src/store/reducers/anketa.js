const initialState = {
    name: null,
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
    coordinates: {
        lat: null,
        lng: null
    }
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
                contacts: payload.contacts,
                date: payload.date,
                found: payload.found,
                name: payload.name
            }
        case 'SET_LOCATION':
            return {...state, location: payload}
        case 'SET_COORDINATES':
            return {...state, coordinates: {lat: payload.lat, lng: payload.lng}}
        case 'SET_ANKETA_IMG':
            return {...state, images: [...state.images, payload]}
        default:
            return state
    }
}