import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo'
import Form from '../components/Form'
import { Actions } from 'react-native-router-flux';


export default class Login extends React.Component {
    signup(){
        Actions.signup();
    }
    render(){
        return(
            <View>
            
            <Logo/>
            <Form type="Login"/>
            <View style={styles.singUpTextCont}>
                <Text style={styles.textSignUp}>Don't have an account yet?</Text>
                <TouchableOpacity onPress={this.signup}>
                    <Text style={styles.signUpButton}>  SignUp</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#455a64',
      flex:1,
      alignItems: 'center',
      justifyContent: 'center', 
    },
    singUpTextCont:{
        flexGrow:1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:10 ,
        flexDirection:'row',
    },
    textSignUp:{
        color:'rgba(255,255,255,0.7)',
        fontSize:16,
    },
    signUpButton:{
        color: '#ffffff',
        fontSize:16,
        fontWeight:'500',
    }

  });
  