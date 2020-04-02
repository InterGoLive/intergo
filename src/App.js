import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import Navigator from './Navigator'
import { clearMessage } from './store/actions/messageAction'
import { 
    setOnForegroundNotification,
    setOnBackgroundNotification 
} from './store/actions/notificationAction'

import messaging from '@react-native-firebase/messaging';

class App extends Component {

    componentDidMount = () => {
        requestNotificationPermission()
        this.props.onNotification()
    }

    componentDidUpdate = () => {
        if(this.props.text && this.props.text.trim()) {
            Alert.alert(this.props.title || 'Mensagem', this.props.text)
            this.props.clearMessage()
        }
    }

    render() {
        return (
            <Navigator/>
        )
    }
}

 function requestNotificationPermission() {
    const granted = messaging().requestPermission();
   
    if (granted) {
        messaging().registerForRemoteNotifications()
    } else {
        console.log('User declined messaging permissions :(')
    }
}

const mapStateToProps = ({ message, notification }) => {
    return {
        title: message.title,
        text: message.text,
        notification: notification
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearMessage: () => dispatch(clearMessage()),
        onNotification: () => {
            dispatch(setOnBackgroundNotification())
            dispatch(setOnForegroundNotification())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)