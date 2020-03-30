import { SET_MATCHES } from './actionsTypes'

export const setMatches = matches => {
    return {
        type: SET_MATCHES,
        payload: matches
    }
      
}

export const fetchMatches = () => {
    return dispatch => {
        //buscar jogos
    }
}