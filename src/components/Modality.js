import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    Dimensions
} from 'react-native'
import iconModality from '../../assets/images/soccer.png'

class Modality extends Component {

    state = {
        name: 'Handebol',
        image: iconModality
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={ styles.image } source={ this.state.image } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        width: 50,
        height: 50,
        borderRadius: 100/2,
        backgroundColor: '#22D48D',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    textModality: {
        fontSize: 10,
        fontFamily: 'Overpass-Regular',
        color: '#fff',
        marginTop: 5,
        alignContent: 'center'
    }


})

export default Modality