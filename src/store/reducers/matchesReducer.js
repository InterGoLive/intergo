import { 
    SET_MATCHES,
    SET_MATCH 
} from '../actions/actionsTypes'

const initialState = {
    matches: [],
    match: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MATCHES:
            return {
                ...state,
                matches: action.payload,
            }

        case SET_MATCH:
            return {
                ...state,
                match: action.payload,
            }    

        default:
            return state        
    }
}

export default reducer