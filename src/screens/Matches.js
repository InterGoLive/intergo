import React, {Component} from 'react'
import HeaderHome from '../components/HeaderHome'
import  {StyleSheet, FlatList, View } from 'react-native'
import Game from '../components/Game'

class Matches extends Component {
    state = {
        games: [{
            id: Math.random(),
            imageTeam1: require('../../assets/images/icon.png'),
            imageTeam2: require('../../assets/images/icon.png')
        }, {
            id: Math.random(),
            imageTeam1: require('../../assets/images/icon.png'),
            imageTeam2: require('../../assets/images/icon.png')
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderHome/>
                <FlatList
                    data={this.state.games}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => 
                        <Game key={item.id} {...item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#16191D'
    }
})

export default Matches