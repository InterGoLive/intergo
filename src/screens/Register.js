import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    ScrollView,
    Image
} from 'react-native'
import { createUser } from '../store/actions/userAction'
import Header from '../components/Header'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-picker';
import icon from '../../assets/images/header_register.png'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmationPassword: '',
        image: null
    }
    

    takeProfileImage = () => {

        const options = {
            title: 'Selecione uma imagem',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                image: { uri: 'data:image/jpeg;base64,' + response.data },
              });
            }
          });
    }

    render() {
        return(
            <SafeAreaView style={styles.container} >
                <ScrollView>
                    <Header title={ 'Registro' } icon={icon} />
                    <Text style={styles.text1}>Estamos quase lá</Text>
                    <Text style={styles.text2}>Digite os seus dados abaixo</Text>
                    <Text style={styles.text2}>ou faça login com o Facebook</Text>
                    <View style={styles.container2} >
                    
                    <TextInput placeholder='Nome completo' placeholderTextColor='#8B8C8E' style={styles.input}
                        autoFocus={false}
                        value={this.state.name}
                        onChangeText={ name => this.setState({ name })}/>

                    <TextInput placeholder='Email' placeholderTextColor='#8B8C8E' style={styles.input}
                        autoFocus={false}
                        value={this.state.email}
                        onChangeText={ email => this.setState({ email })}/>

                    <TextInput placeholder='Senha' placeholderTextColor='#8B8C8E' style={styles.input}
                        secureTextEntry={true} value={this.state.password}
                        onChangeText={ password => this.setState({ password })}/>

                    <TextInput placeholder='Repita sua senha' placeholderTextColor='#8B8C8E' style={styles.input}
                        secureTextEntry={true} value={this.state.confirmationPassword}
                        onChangeText={ confirmationPassword => this.setState({ confirmationPassword })}/>

                    <View style={styles.containerImage} onPress={() => { this.takeProfileImage() }} >
                        <Image 
                            source={ this.state.image }
                            style={styles.image}/>
                    </View>   
                    

                    <TouchableOpacity 
                        onPress={() => { this.takeProfileImage() }}
                        style={styles.buttom}>
                        <Text style={styles.buttomText}>Anexar</Text>
                    </TouchableOpacity>  

                    <TouchableOpacity 
                        onPress={() => { this.props.onCreateUser(this.state) }} 
                        style={styles.buttom}>
                        <Text style={styles.buttomText}>Ok</Text>
                    </TouchableOpacity> 

                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#16191D',
        paddingLeft:20

    },
    container2: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#16191D'

    },
    containerImage: {
        flex: 1,
        width: 342,
        height: 168,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1F2329'

    },
    image: {
        flex: 1,
        width: 342,
        height: 168,
    },
    text1: {
        fontSize: 31,
        marginTop: 50,
        color: '#FFF',
        fontFamily: 'Overpass-Thin',
    },
    text2: {
        fontSize: 20,
        color: '#FFF',
        fontFamily: 'Overpass-Thin',
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