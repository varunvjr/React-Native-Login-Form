import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import LoginForm from "./components/LoginForm";
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#36485f',
    paddingLeft: 60,
    paddingRight:60
  }
});
