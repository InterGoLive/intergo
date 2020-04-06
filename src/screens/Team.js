import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import HeaderProfile from '../components/HeaderProfile'

class Team extends Component {
    state = {
        image: '',
        name: '',
    }

    render() {
        return (
            <View style={styles.container}>
                <AnimatedCircularProgress
                        size={70}
                        width={1}
                        fill={100}
                        tintColor="#707070"
                        lineCap='square'
                        padding={20}
                        backgroundColor="#707070">
                        {
                            () => (
                                <Image source={this.state.image} style={styles.image}/>
                            )
                            
                        }
                    </AnimatedCircularProgress>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    image: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    }
})

export default connect(null, null)(Team)