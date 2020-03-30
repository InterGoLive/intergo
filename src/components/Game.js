import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    Dimensions
} from 'react-native'

class Game extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.imageTeam1} style={styles.image}/>
                <Image source={this.props.imageTeam2} style={styles.image}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    }
})

export default Game