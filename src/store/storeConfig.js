import { 
    createStore,
    combineReducers,
    compose,
    applyMiddleware
 } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import messageReducer from './reducers/messageReducer'
import mathesReducer from './reducers/matchesReducer'
import notificationReducer from './reducers/notificationReducers'
import teamsReducer from './reducers/teamsReducer'


const reducers = combineReducers({
    user: userReducer,
    message: messageReducer,
    matches: mathesReducer,
    notification: notificationReducer,
    teams: teamsReducer

})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig