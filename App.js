import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import LoginForm from "./components/LoginForm";
import Login from "./components/Functional_Login";
// You can import from local files
import AssetExample from './components/AssetExample';
import { Provider } from 'react-redux';
import { configureStore} from '@reduxjs/toolkit'
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import  store from "./redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Login/>
      </View>
    </Provider>
   
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
