import React, { Component } from 'react'
import {
    StyleSheet,
    Image
} from 'react-native'

import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Login from './screens/Login'
import Register from './screens/Register'

const authRouter = createStackNavigator({
    Login: {screen: Login, navigationOptions: { title: 'Login' }},
    Register: {screen: Register, navigationOptions: { title: 'Register' }},
}, {
    initialRouteName: 'Login'
})

const styles = StyleSheet.create({
    imageHome: {
        width: 26.45,
        height: 26.45,
        resizeMode: 'contain'
    },
    imageRanking: {
        width: 22.92,
        height: 22.92,
        resizeMode: 'contain'
    }
})

export default createAppContainer(LoginNavigatior);