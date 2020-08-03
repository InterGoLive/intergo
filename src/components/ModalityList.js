import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native'
import arrowLeft from '../../assets/images/arrow_left.png'
import arrowRight from '../../assets/images/arrow_right.png'
import Modality from '../components/Modality'
import { fetchModalities } from '../store/actions/modalitiesAction'
import { connect } from 'react-redux'

class ModalityList extends Component {
    state = {
        modalitySelected: -1
    }

    componentDidMount = () => {
        this.props.onFetchModalities()
    }

    onModalitylected(modality, index) {
        this.setState({
            modalitySelected: index
        });
    }

    render() {
        return (
            <View style={ styles.containerList } >
                <View style={ styles.containerHorizontalListHeader } >
                    <Text style={ styles.textTitle } > Esportes </Text>
                    <View style={ { flexDirection: 'row' } } >
                        <Image source={ arrowLeft } style={ styles.imageLeft } />
                        <Image source={ arrowRight } style={ styles.imageRigth } />
                    </View>
                </View>
                <View style={ { alignItems: 'center', margin: 10 } } >
                    <FlatList
                        horizontal={true}
                        data={this.props.modalities}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item, index}) => (
                            <TouchableOpacity onPress={ () => this.onModalitylected(item, index)}>
                                <Modality key={item.id} {...item} index={index} modalitySelected={this.state.modalitySelected} />
                            </TouchableOpacity>
                        )}
                        />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerHorizontalListHeader: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
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

const mapStateToProps = ({ modalities }) => {
    return {
        modalities: modalities.modalities
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchModalities: () => dispatch(fetchModalities()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalityList)