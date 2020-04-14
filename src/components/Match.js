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

        let image1 =  { uri: this.props.team1ImageURL }
        let image2 = { uri: this.props.team2ImageURL }
        return (
            <View style={styles.container}>
                <View style={styles.containerMatch } >
                    <View style={ { alignItems: 'center' } } >
                        <Text style={ styles.textDay }  > {this.props.hour}h </Text>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={ styles.textDay }> {this.props.day} </Text>
                    </View>
                    <View>
                        <View style={ { flexDirection: 'row' } }   >
                            <Image source={image1} style={styles.image}/>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={ styles.textTeam }> {this.props.team1} </Text>
                            <Text style={ styles.textScore }  > {this.props.team1Score} </Text>

                        </View>
                        <View style={ { flexDirection: 'row' } }   >
                            <Image source={image2} style={styles.image}/>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={ styles.textTeam }> {this.props.team2} </Text>
                            <Text style={ styles.textScore }  > {this.props.team2Score} </Text>
                        </View>
                    </View>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
    },
    containerMatch: { 
        flex:1, 
        margin: 15, 
        padding: 20, 
        alignItems: 'center', 
        justifyContent: 'space-between',
        borderColor: '#333943', 
        borderWidth: 2 ,
        flexDirection: 'row'
    },
    image: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    textTeam: {
        fontSize: 12,
        marginLeft: 5,
        alignSelf: 'center',
        fontFamily: 'Overpass-Regular',
        color: '#fff',
        width: '60%'
    },
    textDay: {
        fontSize: 12,
        alignSelf: 'center',
        fontFamily: 'Overpass-Regular',
        color: '#F0F0F0',
    },
    textScore: {
        fontSize: 15,
        marginLeft: 5,
        alignSelf: 'center',
        justifyContent:'space-between',
        fontFamily: 'Overpass-Regular',
        color: '#fff'
    },
    textModality: {
        fontSize: 10,
        fontFamily: 'Overpass-Regular',
        color: '#fff',
        alignContent: 'center'
    }


})

export default Match