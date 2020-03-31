import React from 'react'
import { Provider } from 'react-redux'
import {AppRegistry} from 'react-native';
// import NavigatorLogin from './src/NavigatorLogin'
import NavigatorLogin from './src/Navigator'

import {name as appName} from './app.json';

import storeConfig from './src/store/storeConfig'

const store = storeConfig()
const Redux = () => {
    return(
        <Provider store={store}>
            <NavigatorLogin/>
        </Provider>
    ) 
}

AppRegistry.registerComponent(appName, () => Redux);
