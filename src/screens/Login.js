import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginWithEmail, loginWithFacebook } from '../store/actions/userAction'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView, 
    SafeAreaView
} from 'react-native'
import facebookIcon from '../../assets/images/facebook_icon.png'

class Login extends Component {
    componentDidUpdate = prevProps => {
        if(prevProps.isLoading && !this.props.isLoading) {
            this.props.navigation.navigate('MainNavigator')
        }
    }

    login = () => {
        this.props.onLoginWithEmail({...this.state})
    }

    loginWithFacebook = () => {
        this.props.onLoginWithFacebook()
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.welcomeText1}>Seja Bem-Vindx</Text>
                <View style={styles.rowContainer}>
                    <Text style={styles.welcomeText1}>ao </Text>
                    <Text style={styles.welcomeText2}>Inter</Text>
                    <Text style={styles.welcomeText3}>GO!</Text>
                </View>

                <TextInput placeholder='Email' placeholderTextColor='#8B8C8E' style={styles.input}
                    autoFocus={false} keyboardType='email-address'
                    value={this.props.email}
                    onChangeText={ email => this.setState({ email })}/>

                <TextInput placeholder='Senha' placeholderTextColor='#8B8C8E' style={styles.input}
                    autoFocus={false}
                    secureTextEntry={true} value={this.props.password}
                    onChangeText={ password => this.setState({ password })}/>

                <TouchableOpacity onPress={this.login} style={styles.button}>
                    <Text style={styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity> 

                <View style={styles.rowContainer}>
                    <Text onPress={() => {
                        this.props.navigation.navigate('Register')}}
                        style={styles.register}>Cadastre-se</Text>
                    <Text style={styles.forget}>Esqueceu a senha?</Text>
                </View>

                <TouchableOpacity onPress={this.loginWithFacebook} style={styles.facebookButton}>
                    <Image style={ styles.facebookButton } source={facebookIcon} />
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#16191D'
    },
    welcomeText1: {
        fontSize: 31,
        color: '#FFF',
        fontFamily: 'Overpass-Thin',
    },
    welcomeText2: {
        fontSize: 31,
        color: '#FFF',
        fontFamily: 'Overpass-Bold',
    },
    welcomeText3: {
        fontSize: 31,
        color: '#06EFB3',
        fontFamily: 'Overpass-Bold',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        width: 342,
        height: 61,
        borderRadius: 6,
        marginTop: 40,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#22D48D'
    },
    facebookButton: {
        width: 50,
        height: 50,
        marginTop: 10
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontFamily: 'Overpass-Bold',
    },
    input: {
        width: 342,
        height: 61,
        marginTop: 20,
        fontSize: 18,
        borderRadius: 6,
        backgroundColor: '#1F2329',
        color: '#FFF',
        padding: 18,
        fontFamily: 'Overpass-Regular',
    },
    register: {
        marginTop: 50,
        fontSize: 16,
        color: '#8B8C8E',
        fontFamily: 'Overpass-Regular',
    },
    forget: {
        marginLeft: 40,
        marginTop: 50,
        fontSize: 16,
        color: '#8B8C8E',
        fontFamily: 'Overpass-Regular',
    }
})

const mapStateToProps = ({ user }) => {
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoginWithEmail: user => dispatch(loginWithEmail(user)),
        onLoginWithFacebook: () => dispatch(loginWithFacebook())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)