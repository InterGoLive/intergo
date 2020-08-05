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
import Event from '../components/EventTeam2'


class MatchDetail extends Component {
    render() {
        let image1 =  { uri: this.props.match.team1ImageURL }
        let image2 = { uri: this.props.match.team2ImageURL }
        return (
            <View style={styles.container}>
                <Header title={ this.props.match.modality + " " + this.props.match.gender } />
                <Text style={styles.textLive}>Ao vivo</Text>
                <View style={ {alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' } } >
                    <Image source={image1} style={styles.image}/>
                    <View style={ { alignItems: 'center' } } >
                        <View style={ { flexDirection: 'row' } } >
                            <Text style={ styles.textScore } >{this.props.match.team1Score}</Text>
                            <Text style={ styles.textScore } >:</Text>
                            <Text style={ styles.textScore } >{this.props.match.team2Score}</Text>
                        </View>
                        <Text style={ styles.textPeriod } >2 tempo</Text>
                    </View>
                    <Image source={image2} style={styles.image}/>
                </View>
                <View style={ { flexDirection: 'row' } } >
                    <Text style={styles.textLocation}>Local: </Text>
                    <Text style={styles.textLocation}>{this.props.match.team1}</Text>
                </View>
                <Text style={styles.textLive}>Lance a lance</Text>
                <FlatList
                    data={this.props.matches}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => (
                        <TouchableOpacity>
                            <Event key={item.id} {...item} />
                        </TouchableOpacity>
                    )}
                    />

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
    textLive: {
        marginTop: 20,
        fontSize: 16,
        color: '#06EFB3'
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

export default connect(mapStateToProps, null)(MatchDetail)