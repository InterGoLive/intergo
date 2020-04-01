import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import Navigator from './Navigator'
import { clearMessage } from './store/actions/messageAction'

class App extends Component {

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

const mapStateToProps = ({ message }) => {
    return {
        title: message.title,
        text: message.text
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearMessage: () => dispatch(clearMessage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)