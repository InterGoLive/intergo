import { 
    BACKGROUND_NOTIFICATION,
    FOREGROUND_NOTIFICATION,
    REGISTER_DEVICE_FCM
 } from './actionsTypes'

import messaging from '@react-native-firebase/messaging'

export const getForegroundNotification = (notification) => {
    return {
        type: FOREGROUND_NOTIFICATION,
        payload: notification
    }
      
}

export const getBackgroundNotification = (notification) => {
    return {
        type: BACKGROUND_NOTIFICATION,
        payload: notification
    }
      
}

export const setOnForegroundNotification = () => {
    return dispatch => {
        messaging().onMessage(async remoteMessage => {
            console.log('FCM Message Data:', remoteMessage.data);
       
            // Update a users messages list using AsyncStorage
            const currentMessages = await AsyncStorage.getItem('messages');
            const messageArray = JSON.parse(currentMessages);
            messageArray.push(remoteMessage.data);
            await AsyncStorage.setItem('messages', JSON.stringify(messageArray));

            dispatch(getForegroundNotification(remoteMessage.data))
          });
    }
}

export const setOnBackgroundNotification = () => {
    return dispatch => {
        messaging().setBackgroundMessageHandler(async remoteMessage => {
            dispatch(getBackgroundNotification(remoteMessage.data))
          });
    }
}

export const registerDevice = () => {
    return dispatch => {
        
    }
}