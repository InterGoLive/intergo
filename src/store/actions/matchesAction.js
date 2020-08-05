import { 
    SET_MATCHES,
    SET_MATCH
 } from './actionsTypes'
import firestore from '@react-native-firebase/firestore'

export const setMatches = matches => {
    return {
        type: SET_MATCHES,
        payload: matches
    }    
}

export const setMatch = match => {
    return {
        type: SET_MATCH,
        payload: match
    }    
}

export const fetchMatches = (modality) => {
    return dispatch => {
        var ref = null
        if(modality != null)
            ref = firestore().collection('matches').where('modality','==',modality.name)
        else
            ref = firestore().collection('matches')

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