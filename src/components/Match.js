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
                    <View style={ { alignItems: 'center', justifyContent: 'center' } } >
                        <Text style={ styles.textDay }  > {this.props.hour}h </Text>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={ styles.textDay }> {this.props.day.replace(/-Feira/g, '')} </Text>
                    </View>
                    <View style={ { height: '80%', width: 2, backgroundColor: '#333943', marginLeft: 5, marginRight: 10 } } />
                    <View style={ { flex: 1 } }  >
                        <View style={ { flexDirection: 'row', justifyContent: 'space-between' } } >
                            <View style={ { flexDirection: 'row' } }   >
                                <Image source={image1} style={styles.image}/>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={ styles.textTeam }> {this.props.team1} </Text>
                            </View>
                            <Text style={ styles.textScore }  > {this.props.team1Score} </Text>
                        </View>
                        <View style={ { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 } } >
                            <View style={ { flexDirection: 'row' } }   >
                                <Image source={image2} style={styles.image}/>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={ styles.textTeam }> {this.props.team2} </Text>
                            </View>
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
        alignItems: 'center',
        borderColor: '#333943', 
        borderWidth: 2 ,
        flexDirection: 'row',
        padding: 20,
        width: '95%'
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    textTeam: {
        fontSize: 12,
        marginLeft: 5,
        alignSelf: 'center',
        fontFamily: 'Overpass-Regular',
        color: '#fff',
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
        fontSize: 12,
        fontFamily: 'Overpass-Regular',
        color: '#fff',
        alignContent: 'center'
    }


})

export default Match