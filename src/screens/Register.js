import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native'
import { createUser } from '../store/actions/userAction'
import HeaderRegister from '../components/HeaderRegister'
import { connect } from 'react-redux'


class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmationPassword: ''
    }

    render() {
        return(
            <View style={styles.container} >
                <HeaderRegister/>
                <Text style={styles.text1}>Estamos quase lá,</Text>

                <TextInput placeholder='Nome completo' style={styles.input}
                    autoFocus={false}
                    value={this.state.name}
                    onChangeText={ name => this.setState({ name })}/>

                <TextInput placeholder='Email' style={styles.input}
                    autoFocus={false}
                    value={this.state.email}
                    onChangeText={ email => this.setState({ email })}/>

                <TextInput placeholder='Senha' style={styles.input}
                    secureTextEntry={false} value={this.state.password}
                    onChangeText={ password => this.setState({ password })}/>

                <TextInput placeholder='Repita sua senha' style={styles.input}
                    secureTextEntry={true} value={this.state.confirmationPassword}
                    onChangeText={ confirmationPassword => this.setState({ confirmationPassword })}/>

                <TouchableOpacity 
                    onPress={() => { this.props.onCreateUser(this.state) }} 
                    style={styles.buttom}>
                    <Text style={styles.buttomText}>Ok</Text>
                </TouchableOpacity> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#16191D'

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
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onCreateUser: user => dispatch(createUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Register)