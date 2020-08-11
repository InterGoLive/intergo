import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'
import arrowLeft from '../../assets/images/arrow_left.png'
import ContentLoader, { Facebook } from 'react-content-loader'

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={arrowLeft} style={styles.imageBack} onPress={ () => this.props.navigation.goBack(null)} />
                    <Image source={this.props.icon} style={styles.image} />
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <ContentLoader viewBox="0 0 380 70">
                {/* Only SVG shapes */}    
                <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
            </ContentLoader>
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
         flex: 1,
         alignItems: 'center'
     },
     imageBack: {
         marginLeft: 20,
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
     image: {
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