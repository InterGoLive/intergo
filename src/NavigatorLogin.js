import React, { Component } from 'react'
import {
    StyleSheet,
    Image
} from 'react-native'
import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Login from './screens/Login'
import Register from './screens/Register'

const authRouter = createStackNavigator({
    Login: {screen: Login, navigationOptions: { title: 'Login' }},
    Register: {screen: Register, navigationOptions: { title: 'Register' }},
}, {
    initialRouteName: 'Login',
    tabBarOptions: {
        showLabel: true,
        activeTintColor: '#22D48D',
        inactiveTintColor: '#8B8C8E',
    }
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

export default createAppContainer(authRouter);