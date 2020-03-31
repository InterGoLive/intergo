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
        register(user.email, user.password)
    }
}

async function register(email, password) {
    try {
        await auth().createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.error(e.message);
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
        //chamar validacao de usuario
        //user.name = nome
        //user.email = email
        dispatch(userLogged(user))
        dispatch(userLoaded())
    }
}