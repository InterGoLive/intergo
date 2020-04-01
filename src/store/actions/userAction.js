import { 
    USER_LOGGED_IN, 
    USER_LOGGED_OUT, 
    LOADING_USER, 
    USER_LOADED 
} from './actionsTypes'
import { setMessage } from './messageAction'
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
        .then(() => {
            dispatch(setMessage({
                title: 'Sucesso',
                text: 'Usuário criado'
            }))
        })
        .catch(error => {
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
            dispatch(setMessage({
                title: 'Sucesso',
                text: 'Login realizado'
            }))
        })
        .catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            dispatch(setMessage({
                title: 'Erro',
                text: error.message
            }))
          });
    }
}