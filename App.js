import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';

import Routes from './src/navigation/Routes';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#1c311a"
          barStyle="light-content"   />
          <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#455a64',
  }
});
