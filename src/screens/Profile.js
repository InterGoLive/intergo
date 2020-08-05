import React, { Component } from 'react'
import { connect } from 'react-redux'
import { doLogout } from '../store/actions/userAction'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import UserAvatar from 'react-native-user-avatar'
import Header from '../components/Header'
import icon from '../../assets/images/header_profile.png'

class Profile extends Component {

    componentDidUpdate = prevProps => {
        if(prevProps.email != '' && this.props.email == '') {
            this.props.navigation.navigate('Login')
        }
    }

    logout = () => {
        this.props.onLogout()
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title={ 'Perfil' } icon={icon} />
                <View>
                    <UserAvatar style={ styles.avatar }  size={70} name={this.props.name} src={this.props.photoURL} />
                </View>
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
        marginTop: 20
    },
    // circleShape: {
    //     width: 100,
    //     height: 100,
    //     borderRadius: 50,
    //     borderWidth: 1,
    //     borderColor:'#707070',
    //     backgroundColor: '#16191D'
    // },
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
        name: user.name,
        photoURL: user.photoURL
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(doLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)