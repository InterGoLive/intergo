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

class DayFilterList extends Component {
    state = {
        daySelected: '',
        days: ['Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo', 'Domingo', 'Domingo']
    }

    // componentDidMount = () => {
    //     this.props.onFetchDaysFilter()
    // }

    onDaySelected(item) {
        this.setState({
            daySelected: item
        });
    }

    render() {
        return (
            <View style={ styles.containerList } >
                <FlatList
                    horizontal={true}
                    data={this.state.days}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={ () => this.onDaySelected(item)}>
                            <Text style={[
                                styles.text, 
                                {color: this.state.daySelected === item ? '#22D48D' : '#fff'}]} 
                                key={item.id} {...item} daySelected={this.state.daySelected}>{item}</Text>
                        </TouchableOpacity>
                    )}
                /> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerList: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        marginLeft: 20,
        fontFamily: 'Overpass-Regular',
        color: '#fff',
    },
    textSelected: {
        fontSize: 14,
        marginLeft: 20,
        fontFamily: 'Overpass-Regular',
        color: '#fff',
    },
})

// const mapStateToProps = ({ days }) => {
//     return {
//         daysFilter: modalities.modalities
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onFetchModalities: () => dispatch(fetchModalities()),
//     }
// }

export default connect(null, null)(DayFilterList)