import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'
import { connect } from 'react-redux'
import { userLogged } from '../store/actions/userAction'
import auth from '@react-native-firebase/auth';


class Splash extends Component {
    componentDidMount = () => {
        setTimeout(
            () => { 
                let user = auth().currentUser;
                if (user) {
                    this.props.onUserLogged(user),
                    this.props.navigation.navigate("MainNavigator") 
                } else {
                    this.props.navigation.navigate("Login") 
                }

            },
            2000
        )
    }

    render() {
        return(
            <View style={ styles.container } >
                <Image source={require("../../assets/images/logo_splash.png")} 
                    style={ styles.image } /> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#16191D'
    },
    image: {
        height: 150,
        width: 320,
        resizeMode: 'contain'
    }
})

const mapStateToProps = ({ user }) => {
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserLogged: user => dispatch(userLogged(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)