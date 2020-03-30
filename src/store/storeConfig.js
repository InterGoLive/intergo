import { 
    createStore,
    combineReducers,
    compose,
    applyMiddleware
 } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'

const reducers = combineReducers({
    user: userReducer,

})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig