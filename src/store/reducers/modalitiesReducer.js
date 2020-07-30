import { SET_MODALITIES } from '../actions/actionsTypes'

const initialState = {
    modalities: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MODALITIES:
            return {
                ...state,
                modalities: action.payload,
            }

        default:
            return state        
    }
}

export default reducer