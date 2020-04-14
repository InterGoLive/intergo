import { SET_TEAMS } from '../actions/actionsTypes'

const initialState = {
    teams: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TEAMS:
            return {
                ...state,
                teams: action.payload,
            }

        default:
            return state        
    }
}

export default reducer