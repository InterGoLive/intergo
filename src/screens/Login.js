import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/userAction'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native'

class Login extends Component {
    state = {
        name: 'Temporario',
        email: '',
        password: ''
    }

    componentDidUpdate = prevProps => {
        if(prevProps.isLoading && !this.props.isLoading) {
            this.props.navigation.navigate('MainNavigator')
        }
    }

    login = () => {
        this.props.onLogin({ ...this.state })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcomeText1}>Seja Bem-Vindx</Text>
                <View style={styles.rowContainer}>
                    <Text style={styles.welcomeText2}>ao </Text>
                    <Text style={styles.welcomeText3}>Inter</Text>
                    <Text style={styles.welcomeText4}>GO!</Text>
                </View>

                <TextInput placeholder='Email' style={styles.input}
                    autoFocus={false} keyboardType='email-address'
                    value={this.state.email}
                    onChangeText={ email => this.setState({ email })}/>

                <TextInput placeholder='Senha' style={styles.input}
                    autoFocus={false}
                    secureTextEntry={true} value={this.state.password}
                    onChangeText={ password => this.setState({ password })}/>

                <TouchableOpacity onPress={this.login} style={styles.buttom}>
                    <Text style={styles.buttomText}>ENTRAR</Text>
                </TouchableOpacity> 

                <View style={styles.rowContainer}>
                    <Text onPress={() => {
                        this.props.navigation.navigate('Register')}}
                        style={styles.register}>Cadastre-se</Text>
                    <Text style={styles.forget}>Esqueceu a senha?</Text>
                </View>

            </View>
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
        fontFamily: 'Overpass-Thin',
    },
    welcomeText3: {
        fontSize: 31,
        color: '#FFF',
        fontFamily: 'Overpass-Bold',
    },
    welcomeText4: {
        fontSize: 31,
        color: '#06EFB3',
        fontFamily: 'Overpass-Bold',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttom: {
        width: 342,
        height: 61,
        borderRadius: 6,
        marginTop: 40,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#22D48D'
    },
    buttomText: {
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
        color: '#FFFFFF80',
        fontFamily: 'Overpass-Regular',
    },
    forget: {
        marginLeft: 40,
        marginTop: 50,
        fontSize: 16,
        color: '#FFFFFF80',
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
        onLogin: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)