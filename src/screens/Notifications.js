import React, {Component} from 'react'
import Header from '../components/Header'
import  {StyleSheet, FlatList, View, SafeAreaView } from 'react-native'
import { fetchTeams } from '../store/actions/teamActions'
import { connect } from 'react-redux'
import Notification from '../components/Notification'

class Notifications extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header title={ 'Notificações' } />                
                <View style={ { margin: 20 } } >
                    <FlatList
                        data={this.props.teams}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item,index}) => (
                            <View style={styles.separator}>
                                <Notification key={item.id} {...item} index={index+1} />
                            </View>
                            
                        )}
                        />
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)