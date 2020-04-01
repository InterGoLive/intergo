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


const reducers = combineReducers({
    user: userReducer,
    message: messageReducer,
    matches: mathesReducer

})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig