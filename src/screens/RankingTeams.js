import React, {Component} from 'react'
import Header from '../components/Header'
import  {StyleSheet, FlatList, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import { fetchTeams } from '../store/actions/teamActions'
import { connect } from 'react-redux'
import TeamRanking from '../components/TeamRanking'
import ModalityList from '../components/ModalityList'

class RankingTeams extends Component {
    state = {
        type: 'geral',
        year: '2019'
    }
    componentDidMount = () => {
        this.props.onFetchTeams(this.state.type, this.state.year)
    }

    onTeamSelected(item) {
        console.log('Selected Item :',item);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header title={ 'Classificação' } />
                <ScrollView>
                
                    <ModalityList/>
                    <View style={ { margin: 20 } } >
                        <FlatList
                            data={this.props.teams}
                            keyExtractor={item => `${item.id}`}
                            renderItem={({item,index}) => (
                                <View style={styles.separator}>
                                    <TouchableOpacity onPress={ () => this.onTeamSelected(item)}>
                                        <TeamRanking key={item.id} {...item} index={index+1} />
                                    </TouchableOpacity>
                                </View>
                                
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
    separator: {
        borderBottomWidth: 1, 
        borderColor: '#2B323B'
    },
})

const mapStateToProps = ({ teams }) => {
    return {
        teams: teams.teams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchTeams: (type, year) => dispatch(fetchTeams(type, year))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RankingTeams)