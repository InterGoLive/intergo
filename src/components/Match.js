import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    Dimensions
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

class Match extends Component {
    render() {

        let image1 =  { uri: this.props.team1ImageURL }
        let image2 = { uri: this.props.team2ImageURL }
        return (
            <View style={styles.container}>
                <View style={ { flexDirection: 'row', alignContent: 'center', justifyContent: 'center' } } >
                </View>
                <AnimatedCircularProgress
                    size={140}
                    width={2}
                    fill={50}
                    rotation={0}
                    tintColor="#22D48D"
                    lineCap='square'
                    padding={20}
                    backgroundColor="#707070">
                    {
                        () => (
                            <View style={ { flexDirection: 'row', alignContent: 'center', justifyContent: 'center' } } >
                                <Image source={image1} style={styles.image}/>
                                <Text style={ {color: '#fff', fontSize:12 } }  > vs </Text>
                                <Image source={image2} style={styles.image}/>
                            </View>
                        )
                        
                    }
                    </AnimatedCircularProgress>
                
                {/* <Text>{this.props.team1}</Text>
                <Text>{this.props.team2}</Text> */}
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

export default Match