import React, {Component} from 'react'
import HeaderHome from '../components/HeaderHome'
import  {StyleSheet, FlatList, View } from 'react-native'
import Match from '../components/Match'
import firestore from '@react-native-firebase/firestore'

class Matches extends Component {
    state = {
        matches: null
    }

    componentDidMount() {
        // const ref = firestore().collection('games')
        // ref.onSnapshot(querySnapshot => {
        //     const list = [];
        //     querySnapshot.forEach(doc => {
        //         list.push(doc.data())  
        //     });

        //     this.setState({matches: list})
        // });
    }


    render() {
        const {matches} = this.state
        return (
            <View style={styles.container}>
                <HeaderHome/>
                <FlatList
                    data={this.state.matches}
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

export default Matches