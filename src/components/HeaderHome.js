import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'

import icon from '../../assets/images/icon.png'

class HeaderHome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
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
        height: 101,
        borderBottomWidth: 0.5,
        borderColor: '#8B8C8E',
        width: '100%'
    },
     rowContainer: {
         flexDirection: 'row',
         alignItems: 'center'
     },
     image: {
         height: 30,
         width: 30,
         resizeMode: 'contain'
     },
     title1: {
         color: '#FFF',
         fontFamily: 'Teko-Light',
         marginTop: 20,
         marginLeft: 20,
         fontSize: 48
     },
     title2: {
        color: '#06EFB3',
        fontFamily: 'Teko-Light',
         marginTop: 20,
         fontSize: 48
    }
 })

 export default HeaderHome