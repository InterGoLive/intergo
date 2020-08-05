import { 
    USER_LOGGED_IN, 
    USER_LOGGED_OUT, 
    LOADING_USER, 
    USER_LOADED 
} from './actionsTypes'
import { setMessage } from './messageAction'
import auth from '@react-native-firebase/auth'
import { 
    LoginManager,
    AccessToken
 } from 'react-native-fbsdk'

import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import fileSystem from 'react-native-fs'

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
        auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(userCredential => {
            let userSave = {
                email: userCredential.user.email,
                name: user.name,
            }

            dispatch(setMessage({
                title: 'Sucesso',
                text: 'Usuário criado - ' + userCredential.user.uid
            }))

            // fileSystem.writeFile('/tmp/imgeProfile.jpg', image, 'base64').then(res => {
            //     firestore().collection('users').doc(userCredential.user.uid).set(userSave);
            //     storage().ref().child('users').child(userCredential.user.uid).child(profile.jpeg).put({
                    
            //     })
            // })
            // .catch(err => {
            //     dispatch(setMessage({
            //         title: 'Erro',
            //         text: 'Erro ao salvar arquivo - ' + err.message
            //     }))
            // });

            
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

export const loginWithEmail = user => {
    return dispatch => {
        dispatch(loadingUser())
        auth().signInWithEmailAndPassword(user.email, user.password)
        .then(userCredential => {
            dispatch(userLogged(userCredential.user))
            dispatch(userLoaded())
            dispatch(setMessage({
                title: 'Sucesso',
                text: userCredential.user.displayName
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

export const loginWithFacebook = () => {
    return dispatch => {
        dispatch(loadingUser())
        LoginManager.logInWithPermissions(['public_profile', 'email'])
        .then(result => {
              if (result.isCancelled) {
                alert('Login was cancelled');
              } else {
                AccessToken.getCurrentAccessToken()
                .then(data => {
                    const credential = auth.FacebookAuthProvider.credential(data.accessToken)
                    auth().signInWithCredential(credential)
                    .then(userCredential => {
                        dispatch(userLogged(userCredential.user))
                        dispatch(userLoaded())
                        dispatch(setMessage({
                            title: 'Sucesso',
                            text: userCredential.user.displayName
                        }))
                    })
                })
              }
            },
            error => {
              alert('Login failed with error: ' + error)
            }
          );
    }
}