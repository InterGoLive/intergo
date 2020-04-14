import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    Dimensions
} from 'react-native'
// import { AnimatedCircularProgress } from 'react-native-circular-progress'
import ProgressBar from 'react-native-progress/Bar'

class MatchLive extends Component {
    render() {

        let image1 =  { uri: this.props.team1ImageURL }
        let image2 = { uri: this.props.team2ImageURL }
        return (
            <View style={styles.container}>
                {/* <AnimatedCircularProgress
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
                </AnimatedCircularProgress> */}
                <ProgressBar 
                    progress={0.5} 
                    width={100}
                    height={1}
                    borderWidth = {0}
                    color={'#22D48D'}
                    unfilledColor= {'#707070'}  />

                <View style={ { flex:1, margin: 15, alignItems: 'center' } } >
                    <View style={ { flexDirection: 'row' } }   >
                        <Image source={image1} style={styles.image}/>
                        <Text style={ styles.textScore }  > {this.props.team1Score} </Text>
                        <Text style={ styles.textScore }  > {this.props.team2Score} </Text>
                        <Image source={image2} style={styles.image}/>
                    </View>
                    <View style={ { flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginTop: 5 } }   >
                        <Text style={ styles.textModality }  > {this.props.modality} </Text>  
                        <Text style={ styles.textModality }  >-</Text>  
                        <Text style={ styles.textModality }  > {this.props.gender} </Text>  

                    </View>
                </View>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
    },
    image: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    textScore: {
        fontSize: 20,
        alignSelf: 'center',
        fontFamily: 'Overpass-Regular',
        color: '#fff'
    },
    textModality: {
        fontSize: 10,
        fontFamily: 'Overpass-Regular',
        color: '#fff',
        alignContent: 'center'
    }


})

export default MatchLive