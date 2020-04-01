import { SET_MATCHES } from '../actions/actionsTypes'

const initialState = {
    matches: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MATCHES:
            return {
                ...state,
                matches: action.payload,
            }

        default:
            return state        
    }
}

export default reducer