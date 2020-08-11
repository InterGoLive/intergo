import { SET_TEAMS } from './actionsTypes'
import firestore from '@react-native-firebase/firestore'

export const setTeams = teams => {
    return {
        type: SET_TEAMS,
        payload: teams
    }
      
}

export const fetchTeams = (type, year) => {
    return dispatch => {
        const ref = firestore().collection('teams').orderBy(type + '_' + year,'desc')
        ref.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                list.push({
                    ...doc.data(),
                    id: doc.id
                })  
            });

            dispatch(setTeams(list))
        });
    }
}