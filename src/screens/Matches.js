import React, {Component} from 'react'
import HeaderHome from '../components/HeaderHome'
import  {StyleSheet, FlatList, View, Text, Image } from 'react-native'
import Match from '../components/Match'
import { fetchMatches } from '../store/actions/matchesAction'
import { connect } from 'react-redux'
import { Alert } from 'react-native'
import arrowLeft from '../../assets/images/arrow_left.png'
import arrowRigth from '../../assets/images/arrow_rigth.png'



class Matches extends Component {
    componentDidMount = () => {
        this.props.onFetchMatches()
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderHome/>
                <View style={ { flexDirection: 'row', margin: 20, justifyContent: 'space-between' } } >
                    <Text style={ styles.textTitle } > Jogos ao vivo </Text>
                    <View style={ { flexDirection: 'row' } } >
                        <Image source={ arrowLeft } style={ styles.imageLeft } />
                        <Image source={ arrowRigth } style={ styles.imageRigth } />
                    </View>
                </View>
                
                <FlatList
                    horizontal={true}
                    data={this.props.matches}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => 
                        <Match key={item.id} {...item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16191D'
    },
    imageLeft: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    imageRigth: {
        width: 20,
        height: 20,
        marginLeft: 5,
        resizeMode: 'contain'
    },
    textTitle: {
        fontSize: 20,
        fontFamily: 'Overpass-Regular',
        color: '#fff',
    },
    text: {
        fontSize: 20,
        fontFamily: 'Overpass-Regular',
        color: '#fff',
    },
})

const mapStateToProps = ({ matches }) => {
    return {
        matches: matches.matches
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMatches: () => dispatch(fetchMatches())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches)