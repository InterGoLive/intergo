import { 
    USER_LOGGED_IN, 
    USER_LOGGED_OUT, 
    LOADING_USER, 
    USER_LOADED 
} from './actionsTypes'

import auth from '@react-native-firebase/auth';

export const userLogged = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT,
    }
}


  

export const createUser = user => {
    return dispatch => {
        //criar usuario
        auth().createUserWithEmailAndPassword(user.email, user.password)
        .then()
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }
}

export const doLogout = () => {
    return dispatch => {
        //criar usuario
        auth().signOut().then(function() {
            dispatch(logout())
        }).catch(function(error) {
            // An error happened.
        });
    }
}



export const loadingUser = () => {
    return {
        type: LOADING_USER
    }
}

export const userLoaded = () => {
    return {
        type: USER_LOADED
    }
}

export const login = user => {
    return dispatch => {
        dispatch(loadingUser())
        auth().signInWithEmailAndPassword(user.email, user.password)
        .then(() => {
            dispatch(userLogged(user))
            dispatch(userLoaded())
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }
}