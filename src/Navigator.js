import React, { Component } from 'react'
import {
    StyleSheet,
    Image
} from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Login from './screens/Login'
import Register from './screens/Register'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Matches from './screens/Matches'
import Profile from './screens/Profile'

const mainRouter = {
    Matches: {
        name: 'Matches',
        screen: Matches,
        navigationOptions: {
            title: 'Início',
            headerShown: false,
            tabBarIcon: ({ tintColor }) => 
                <Image source={require('../assets/images/tab_home.png')} style={styles.imageHome} />
        }
    }, 
    RankingTeams: {
        name: 'Ranking',
        screen: Matches,
        navigationOptions: {
            title: 'Classificação',
            tabBarIcon: ({ tintColor }) => 
                <Image source={require('../assets/images/tab_ranking.png')} style={styles.imageRanking} />
        }
    }, 
    RankingFans: {
        name: 'Fans',
        screen: Matches,
        navigationOptions: {
            title: 'Torcidômetro',
            headerShown: false,
            tabBarIcon: ({ tintColor }) => 
                <Icon name='chart' size={30} color={ tintColor } />
        }
    }, 
    Profile: {
        name: 'Profile',
        screen: Profile,
        navigationOptions: {
            title: 'Perfil',
            tabBarIcon: ({ tintColor: color }) => 
                <Icon name='user' size={30} color={ color } />
        }
    }
}

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

const mainRouterConfig = {
    initialRouteName: 'Matches',
    tabBarOptions: {
        showLabel: true,
        activeTintColor: '#22D48D',
        inactiveTintColor: '#8B8C8E',
    },
    navigationOptions: {
        headerShown: false
    }
}

const MainNavigator = createBottomTabNavigator(mainRouter, mainRouterConfig)

const router = createStackNavigator({
    Login: {screen: Login, navigationOptions: { title: 'Login', headerShown: false }},
    Register: {screen: Register, navigationOptions: { title: 'Register', headerShown: false }},
    MainNavigator
}, {
    initialRouteName: 'Login',
    tabBarOptions: {
        showLabel: true,
        activeTintColor: '#22D48D',
        inactiveTintColor: '#8B8C8E',
    }
})

export default createAppContainer(router);