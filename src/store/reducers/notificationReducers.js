import { 
    FOREGROUND_NOTIFICATION,
    BACKGROUND_NOTIFICATION,
    REGISTER_DEVICE_FCM 
} from '../actions/actionsTypes'

const initialState = {
    notification: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FOREGROUND_NOTIFICATION, BACKGROUND_NOTIFICATION:
            return {
                ...state,
                notification: action.payload,
            }

        default:
            return state        
    }
}

export default reducer