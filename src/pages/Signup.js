import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo'
import Form from '../components/Form'



export default class Signup extends React.Component {

    goBack(){
        Actions.pop();
    }

    render(){
        return(
            <View>
            <Logo/>
            <Form  type="Sing up"/>
            <View style={styles.singUpTextCont}>
                <Text style={styles.textSignUp}>Already have  an account ?</Text>
                <TouchableOpacity onPress={this.goBack}>
                    <Text style={styles.signUpButton}>  Sign In</Text>
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
  