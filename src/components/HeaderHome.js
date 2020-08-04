import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native'

class HeaderHome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Text style={styles.title1}>Inter</Text>
                    <Text style={styles.title2}>GO!</Text>
                </View>

            </View>
        )
    }
 }

 const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        height: '15%',
        borderBottomWidth: 0,
        borderColor: '#8B8C8E',
        justifyContent: "center",
        alignItems: 'center',
        width: '100%'
    },
     rowContainer: {
         flexDirection: 'row',
         alignItems: 'center',
     },
     image: {
         height: 40,
         width: 40,
         resizeMode: 'contain'
     },
     title1: {
         color: '#FFF',
         fontFamily: 'Teko-Light',
         fontSize: 48
     },
     title2: {
        color: '#06EFB3',
        fontFamily: 'Teko-Light',
        fontSize: 48
    }
 })

 export default HeaderHome