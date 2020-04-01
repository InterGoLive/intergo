import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'

export default class Slaplsh extends Component {
    componentDidMount = () => {
        setTimeout(
            () => { this.props.navigation.navigate("Login") },
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