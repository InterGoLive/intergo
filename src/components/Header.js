import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={this.props.icon} style={styles.image} />
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
 }

 const styles = StyleSheet.create({
     container: {
         marginTop: Platform.OS === 'ios' ? 20 : 0,
         height: '10%',
         borderBottomWidth: 0.5,
         borderColor: '#8B8C8E',
         width: '100%',
         justifyContent: "center"
     },
     rowContainer: {
         flexDirection: 'row',
         alignItems: 'center'
     },
     image: {
         marginLeft: 61,
         height: 20,
         width: 20,
         resizeMode: 'contain'
     },
     title: {
         color: '#FFF',
         fontFamily: 'Overpass-Regular',
         justifyContent: 'center',
         fontSize: 20,
         marginLeft: 10
     }
 })

 export default Header