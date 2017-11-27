import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity, 

} from 'react-native';

export default class Logo extends React.Component {

    render(){
        return(
            <View style={styles.container} >
                <TextInput 
                    style={styles.inputBox}
                    underlineColorAndroid={'transparent'}
                    placeholder="Email"
                    placeholderTextColor="#ffffff"
                    selectionColor="#ffffff"
                    keyboardType="email-address"
                    onSubmitEditing={() =>this.password.focus() } />
                 <TextInput 
                    style={styles.inputBox}
                    underlineColorAndroid={'transparent'}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    selectionColor="#ffffff"
                    ref= {(input) => this.password = input } />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext} > {this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#455a64',
      flexGrow:1,
      alignItems: 'center',
      justifyContent: 'center', 
    },
    inputBox:{
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal: 16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10,
        paddingVertical:5 ,

    },
    button:{
        width: 200,
        backgroundColor: '#1c313a',
        borderRadius:25,
        marginVertical: 5, 
        paddingVertical:10,
    },
    buttontext:{
        fontSize: 16,
        fontWeight: '500',
        color:'#ffffff',
        textAlign:'center'

    }
  });
  