import React, {Component} from 'react'
import HeaderHome from '../components/HeaderHome'
import  {StyleSheet, FlatList, View, Text, Image } from 'react-native'
import Match from '../components/Match'
import Modality from '../components/Modality'
import { fetchMatches } from '../store/actions/matchesAction'
import { connect } from 'react-redux'
import { Alert } from 'react-native'
import arrowLeft from '../../assets/images/arrow_left.png'
import arrowRight from '../../assets/images/arrow_right.png'

class Matches extends Component {
    componentDidMount = () => {
        this.props.onFetchMatches()
    }

    state = {
        modalities: [
            {
                id: 0,
                name: 'Handebol',
                image: ''
            },
            {
                id: 1,
                name: 'Handebol',
                image: ''
            },
            {
                id: 2,
                name: 'Handebol',
                image: ''
            },
            {
                id: 3,
                name: 'Handebol',
                image: ''
            },
            {
                id: 4,
                name: 'Handebol',
                image: ''
            },
            {
                id: 5,
                name: 'Handebol',
                image: ''
            }
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderHome/>
                <View style={ styles.containerModalitiesList } >
                    <View style={ styles.containerHorizontalListHeader } >
                        <Text style={ styles.textTitle } > Esportes </Text>
                        <View style={ { flexDirection: 'row' } } >
                            <Image source={ arrowLeft } style={ styles.imageLeft } />
                            <Image source={ arrowRight } style={ styles.imageRigth } />
                        </View>
                    </View>
                    <FlatList
                        horizontal={true}
                        data={this.state.modalities}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => 
                            <Modality key={item.id} {...item} />} />
                </View>
                <View style={ styles.containerMatchesList } >
                    <View style={ styles.containerHorizontalListHeader } >
                        <Text style={ styles.textTitle } > Jogos ao vivo </Text>
                        <View style={ { flexDirection: 'row' } } >
                            <Image source={ arrowLeft } style={ styles.imageLeft } />
                            <Image source={ arrowRight } style={ styles.imageRigth } />
                        </View>
                    </View>
                    <FlatList
                        horizontal={true}
                        data={this.props.matches}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => 
                            <Match key={item.id} {...item} />} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16191D'
    },
    containerHorizontalListHeader: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },
    containerMatchesList: {
        borderBottomWidth: 0.5,
        borderColor: '#8B8C8E',
        justifyContent: 'center',
        height: '25%',
        paddingTop: 20,
        paddingBottom: 20
    },
    containerModalitiesList: {
        borderBottomWidth: 0.5,
        borderColor: '#8B8C8E',
        justifyContent: 'center',
        height: '20%',
        paddingTop: 20,
        paddingBottom: 20
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