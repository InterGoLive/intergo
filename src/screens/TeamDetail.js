import React, { Component } from 'react'
import { connect } from 'react-redux'
import { doLogout } from '../store/actions/userAction'
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList
} from 'react-native'
import Header from '../components/Header'

class TeamDetail extends Component {
    render() {
        let image =  { uri: this.props.match.team1ImageURL }
        return (
            <View style={styles.container}>
                <Header title={ 'Perfil' } />
                <View style={ {alignItems: 'center' } } >
                    <Image source={image} style={styles.image}/>
                    <Text style={styles.textLocation}>Texas Tech</Text>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#16191D'

    },
    textTeam: {
        fontSize: 16,
        alignSelf: 'center',
        fontFamily: 'Overpass-Regular',
        color: '#fff'
    },
    textLocation: {
        marginTop: 5,
        fontSize: 12,
        color: '#707070'
    },
    textScore: {
        fontSize: 28,
        color: '#fff'
    },
    textPeriod: {
        fontSize: 14,
        color: '#90B7F2'
    },
    image: {
        width: 60,
        height: 60,
        margin: 10
    }
})

const mapStateToProps = ({ matches }) => {
    return {
        match: matches.match
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onLogout: () => dispatch(doLogout())
//     }
// }

export default connect(mapStateToProps, null)(TeamDetail)