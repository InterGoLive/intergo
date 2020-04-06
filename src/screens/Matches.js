import React, {Component} from 'react'
import HeaderHome from '../components/HeaderHome'
import  {StyleSheet, FlatList, View } from 'react-native'
import Match from '../components/Match'
import { fetchMatches } from '../store/actions/matchesAction'
import { connect } from 'react-redux'
import { Alert } from 'react-native'

class Matches extends Component {
    componentDidMount = () => {
        this.props.onFetchMatches()
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderHome/>
                <FlatList
                    // horizontal={true}
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#16191D'
    }
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