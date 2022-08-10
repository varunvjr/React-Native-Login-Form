import React from 'react';
import {StyleSheet,Text, View,TextInput,TouchableOpacity,Alert} from 'react-native';
export default class LoginForm extends React.Component{
  
   submitForm(){
      Alert.alert(
      "Login Alert",
      "Welcome to Login Screen",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("You just logged IN") }
      ]
    );
    }

  render(){
   
    return(
      <View style={styles.loginForm}>
        <Text style={styles.header}>Login Form</Text>
        <TextInput style={styles.textInput} placeholder="Enter the Username" 
       

          underlineColorAndroid={'transparent'}
        />
        <TextInput style={styles.textInput} placeholder="Enter the Password"
          secureTextEntry={true}
          
   
          underlineColorAndroid={'transparent'}
        />
        <TouchableOpacity style={styles.button}>
          <Text onPress={()=>this.submitForm()} style={styles.btntext}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  loginForm:{
    alignSelf:'stretch'
  },
  header:{
    fontSize:24,
    color:'#fff',
    paddingBottom:10,
    marginBottom:40,
    borderBottomColor:'#199187',
    borderBottomWidth:1
  },
  textInput:{
    color:'#fff',
    alignSelf:'stretch',
    height:40,
    marginBottom:30,
    borderBottomColor:'#f8f8f8',
    borderBottomWidth:1 
  },
  button:{
    alignSelf:'stretch',
    alignItems:'center',
    padding:20,
    backgroundColor:'#59cbbd',
    marginTop:30
  },
  btntext:{
    color:'#fff',
    
  }
})