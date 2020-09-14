import React, { Component } from 'react'
import {
    StyleSheet,
    Image
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/Login'
import Register from './screens/Register'
import Splash from './screens/Splash'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Matches from './screens/Matches'
import RankingTeams from './screens/RankingTeams'
import Profile from './screens/Profile'
import MatchDetail from './screens/MatchDetail'

const LoginStack = createStackNavigator();

function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="Register" component={Register} />
    </LoginStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={HomeScreen} />
      <LoginStack.Screen name="Register" component={DetailsScreen} />
    </LoginStack.Navigator>
  );
}

const InitStack = createStackNavigator();

function InitStackScreen() {
    return (
      <InitStack.Navigator>
        <InitStack.Screen name="Splash" component={Splash} />
        <InitStack.Screen name="LoginScreen" component={LoginStackScreen} />
      </InitStack.Navigator>
    );
  }

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Matches} />
      <HomeStack.Screen name="MatchDetail" component={MatchDetail} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MainStackScreen() {
    return (
      <HomeStack.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Ranking" component={RankingTeams} />
        <Tab.Screen name="Profile" component={Profile} />
      </HomeStack.Navigator>
    );
  }

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Init" component={InitStackScreen} />
        <MainStack.Screen name="Main" component={MainStackScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}