import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout, doLogout } from '../store/actions/userAction'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import HeaderProfile from '../components/HeaderProfile'

class Profile extends Component {
    logout = () => {
        this.props.onLogout()
        this.props.navigation.navigate('Login')
    }

    render() {
        const options = { email: this.props.email, secure: true }
        return (
            <View style={styles.container}>
                <HeaderProfile />
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname}>{this.props.name}</Text>
                <Text style={styles.email}>{this.props.email}</Text>
                <TouchableOpacity onPress={this.logout} 
                    style={styles.buttom}>
                    <Text style={styles.buttomText}>Sair</Text>
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
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 75,
        marginTop: 58
    },
    nickname: {
        marginTop: 10,
        fontSize: 16,
        fontFamily: 'Overpass-Regular',
        color: '#FFF'
    },
    email: {
        fontSize: 8,
        color: '#FFF'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#FF5957'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    }
})

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(doLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)