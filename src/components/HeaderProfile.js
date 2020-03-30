import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'

import icon from '../../assets/images/header_profile.png'

class HeaderProfile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>Perfil</Text>
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
         marginTop: 40,
         marginLeft: 61,
         height: 20,
         width: 20,
         resizeMode: 'contain'
     },
     title: {
         color: '#FFF',
         fontFamily: 'Overpass-Regular',
         fontSize: 20,
         marginTop: 40,
         marginLeft: 10
     }
 })

 export default HeaderProfile