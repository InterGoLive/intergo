import { SET_MODALITIES } from './actionsTypes'
import firestore from '@react-native-firebase/firestore'

export const setModalities = modalities => {
    return {
        type: SET_MODALITIES,
        payload: modalities
    }
      
}

export const fetchModalities = () => {
    return dispatch => {
        const ref = firestore().collection('modalities')
        ref.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                list.push({
                    ...doc.data(),
                    id: doc.id
                })  
            });

            dispatch(setModalities(list))
        });
    }
}