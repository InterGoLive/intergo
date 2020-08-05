import React, {Component} from 'react'
import HeaderHome from '../components/HeaderHome'
import  {StyleSheet, FlatList, View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import MatchLive from '../components/MatchLive'
import Match from '../components/MatchHome'
import ModalityList from '../components/ModalityList'
import DayFilter from '../components/DayFilterList'
import { fetchMatches, setMatch } from '../store/actions/matchesAction'
import { connect } from 'react-redux'
import arrowLeft from '../../assets/images/arrow_left.png'
import arrowRight from '../../assets/images/arrow_right.png'
import { setMessage } from '../store/actions/messageAction'

class Matches extends Component {
    componentDidMount = () => {
        this.props.onFetchMatches(null)
    }

    componentDidUpdate = () => {
        if(this.props.match != null) {
            this.props.navigation.navigate('MatchDetail')
        }
    }

    onMatchSelected(item) {
        this.props.onMatchSelected(item)
    }

    // onModalitylected(modality, index) {
    //     this.setState({
    //         modalitySelected: index
    //     });

    //     this.props.onFetchMatches(modality)
    // }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <HeaderHome/>
                <ScrollView>
                    <ModalityList />
                    <View style={ styles.containerList } >
                        <View style={ styles.containerHorizontalListHeader } >
                            <Text style={ styles.textTitle } > Ao vivo </Text>
                            <View style={ { flexDirection: 'row' } } >
                                <Image source={ arrowLeft } style={ styles.imageLeft } />
                                <Image source={ arrowRight } style={ styles.imageRigth } />
                            </View>
                        </View>
                        <View style={ { alignItems: 'center' } } >
                            <FlatList
                                horizontal={true}
                                data={this.props.matches}
                                keyExtractor={item => `${item.id}`}
                                renderItem={({item}) => (
                                    <TouchableOpacity onPress={ () => this.onMatchSelected(item)}>
                                        <MatchLive key={item.id} {...item} />
                                    </TouchableOpacity>
                                )}
                                />
                        </View>
                    </View>
                    <View style={ styles.containerList } >
                        <View style={ styles.containerHorizontalListHeader } >
                            <Text style={ styles.textTitle } > Tabela </Text>
                            <DayFilter/>
                        </View>
                        <FlatList
                            data={this.props.matches}
                            keyExtractor={item => `${item.id}`}
                            renderItem={({item}) => (
                                <TouchableOpacity onPress={ () => this.onMatchSelected(item)}>
                                    <Match key={item.id} {...item} />
                                </TouchableOpacity>
                            )}
                            />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16191D'
    },
    containerHorizontalListHeader: {
        flex:1,
        flexDirection: 'row', 
        alignItems: 'center'
    },
    containerList: {
        borderBottomWidth: 0.5,
        borderColor: '#8B8C8E',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
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
        marginLeft: 20,
        marginRight: 20,
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
        matches: matches.matches,
        match: matches.match
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMatches: modality => dispatch(fetchMatches(modality)),
        onMessage: (title, text) => dispatch(setMessage({
            title: title,
            text: text
        })),
        onMatchSelected: match => dispatch(setMatch(match))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches)