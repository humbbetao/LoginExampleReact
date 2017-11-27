import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class Logo extends React.Component {
    render(){
        return(
            <View style={styles.container} >
                <Image
                    style={{width:40, height:70}}
                    source={require('../images/logo.png')} />
                    <Text style={ styles.logo }>Welcome To My APP</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#455a64',
      flexGrow:1,
      alignItems: 'center',
      justifyContent: 'flex-end', 
    },
    logo:{
        marginVertical: 15,
        fontSize:18,
        color:'rgba(255,255,255,0.7)'
    }
  });
  