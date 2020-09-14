import { 
    SET_NOTIFICATIONS,
 } from './actionsTypes'

export const setNotifications = notifications => {
    return {
        type: SET_NOTIFICATIONS,
        payload: notifications
    }    
}