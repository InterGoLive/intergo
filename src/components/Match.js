import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    Dimensions
} from 'react-native'

class Match extends Component {
    render() {

        let image1 =  { uri: this.props.imageUrlTeam1 }
        let image2 = { uri: this.props.imageUrlTeam2 }
        return (
            <View style={styles.container}>
                <Image source={image1} style={styles.image}/>
                <Text> vs </Text>
                <Image source={image2} style={styles.image}/>
                {/* <Text>{this.props.team1}</Text>
                <Text>{this.props.team2}</Text> */}
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

export default Match