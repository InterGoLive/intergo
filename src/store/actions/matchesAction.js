import { SET_MATCHES } from './actionsTypes'
import firestore from '@react-native-firebase/firestore'

export const setMatches = matches => {
    return {
        type: SET_MATCHES,
        payload: matches
    }
      
}

export const fetchMatches = () => {
    return dispatch => {
        const ref = firestore().collection('matches')
        ref.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                list.push({
                    ...doc.data(),
                    id: doc.id
                })  
            });

            dispatch(setMatches(list))
        });
    }
}