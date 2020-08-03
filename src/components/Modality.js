import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Image
} from 'react-native'
import iconModality from '../../assets/images/soccer.png'

class Modality extends Component {
    state = {
        name: 'Handebol',
        image: iconModality
    }

    render() {
        return (
            <View style={[
                styles.container, 
                {backgroundColor: this.props.modalitySelected === this.props.index ? '#22D48D' : '#6B6B6B'}]} >
                <Image style={ styles.image } source={ this.state.image } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        width: 50,
        height: 50,
        borderRadius: 100/2,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 22,
        height: 22,
        resizeMode: 'contain'
    },
    textModality: {
        fontSize: 10,
        fontFamily: 'Overpass-Regular',
        color: '#fff',
        alignContent: 'center'
    }


})

export default Modality