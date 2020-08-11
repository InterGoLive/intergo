import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    Dimensions
} from 'react-native'
import ProgressBar from 'react-native-progress/Bar'
import arrowRight from '../../assets/images/arrow_right.png'

class Notification extends Component {
    render() {
        return (
            <View style={ { flexDirection: 'row', alignContent: 'center', justifyContent: 'center'} }   >
                <Text style={ styles.text }  >Ponto de Texas Tech - 14:8</Text>  
                <Image source={arrowRight} style={styles.image}/>
 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center',
    },
    image: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 16,
        fontFamily: 'Overpass-Regular',
        color: '#fff',
        alignContent: 'center'
    }

})

export default Notification