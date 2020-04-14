import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    Dimensions
} from 'react-native'

class TeamRanking extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={ { flexDirection: 'row', alignItems: 'center', } }>
                    <Text style={[
                        styles.textScore, 
                        {color: this.props.index  < 4 ? '#22D48D' : '#fff'}]} >{this.props.index}.</Text>
                    <Image source={{ uri: this.props.imageURL }} style={styles.image}/>
                    <Text style={[
                        styles.textTeam, 
                        {color: this.props.index  < 4 ? '#22D48D' : '#fff'}]} numberOfLines={1} ellipsizeMode='tail'> {this.props.team} </Text>
                </View>
                <Text style={[
                        styles.textScore, 
                        {color: this.props.index  < 4 ? '#22D48D' : '#fff'}]}> {this.props.geral_2019} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    image: {
        width: 60,
        height: 60,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    textScore: {
        fontSize: 20,
        alignSelf: 'center',
        fontFamily: 'Overpass-Regular',
        color: '#fff'
    },
    textTeam: {
        fontSize: 18,
        fontFamily: 'Overpass-Regular',
        color: '#fff',
        marginLeft: 5
    }


})

export default TeamRanking