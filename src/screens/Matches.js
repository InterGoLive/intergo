import React, {Component} from 'react'
import HeaderHome from '../components/HeaderHome'
import  {StyleSheet, FlatList, View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import MatchLive from '../components/MatchLive'
import Modality from '../components/Modality'
import Match from '../components/Match'
import { fetchMatches } from '../store/actions/matchesAction'
import { fetchModalities } from '../store/actions/modalitiesAction'
import { connect } from 'react-redux'
import arrowLeft from '../../assets/images/arrow_left.png'
import arrowRight from '../../assets/images/arrow_right.png'
import { setMessage } from '../store/actions/messageAction'

class Matches extends Component {
    componentDidMount = () => {
        this.props.onFetchMatches(null)
        this.props.onFetchModalities()
    }

    state = {
        modalitySelected: -1
    }

    onMatchSelected(item) {
        console.log('Selected Item :',item);
    }

    onModalitylected(modality, index) {
        this.setState({
            modalitySelected: index
        });

        this.props.onFetchMatches(modality)
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
                    <View style={ { flex: 1, alignItems: 'center' } } >
                        <FlatList
                            horizontal={true}
                            data={this.props.modalities}
                            keyExtractor={item => `${item.id}`}
                            // extraData={this.state.modalitySelected}
                            renderItem={({item, index}) => (
                                <TouchableOpacity onPress={ () => this.onModalitylected(item, index)}>
                                    <Modality key={item.id} {...item} index={index} modalitySelected={this.state.modalitySelected} />
                                </TouchableOpacity>
                            )}
                            />
                    </View>
                    
                </View>
                <View style={ styles.containerMatchesLiveList } >
                    <View style={ styles.containerHorizontalListHeader } >
                        <Text style={ styles.textTitle } > Ao vivo </Text>
                        <View style={ { flexDirection: 'row' } } >
                            <Image source={ arrowLeft } style={ styles.imageLeft } />
                            <Image source={ arrowRight } style={ styles.imageRigth } />
                        </View>
                    </View>
                    <View style={ { flex: 1, alignItems: 'center' } } >
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
                <View style={ styles.containerMatchesList } >
                    <View style={ styles.containerHorizontalListHeader } >
                        <Text style={ styles.textTitle } > Próximos ou encerrados </Text>
                        {/* <View style={ { flexDirection: 'row' } } >
                            <Image source={ arrowLeft } style={ styles.imageLeft } />
                            <Image source={ arrowRight } style={ styles.imageRigth } />
                        </View> */}
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
    containerMatchesLiveList: {
        borderBottomWidth: 0.5,
        borderColor: '#8B8C8E',
        justifyContent: 'center',
        height: '25%',
        paddingTop: 20,
        paddingBottom: 20
    },
    containerMatchesList: {
        borderBottomWidth: 0,
        borderColor: '#8B8C8E',
        justifyContent: 'center',
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

const mapStateToProps = ({ matches, modalities }) => {
    return {
        matches: matches.matches,
        modalities: modalities.modalities
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMatches: modality => dispatch(fetchMatches(modality)),
        onFetchModalities: () => dispatch(fetchModalities()),
        onMessage: (title, text) => dispatch(setMessage({
            title: title,
            text: text
        }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches)