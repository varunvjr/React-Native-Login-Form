import React from 'react';
import {StyleSheet,Text, View,TextInput,TouchableOpacity,Alert} from 'react-native';
export default class LoginForm extends React.Component{
    constructor(props){
      super(props);
      this.state={
        "username":"",
        "password":""
      }
    }
   submitForm(e){
      e.preventDefault();
      console.log("hello")
     
    }

  render(){
   
    return(
      <View style={styles.loginForm}>
        <Text style={styles.header}>Login Form</Text>
        <TextInput style={styles.textInput} placeholder="Enter the Username" 
          value={this.state.username}
          onChangeText={(newUser)=>this.setState({username:newUser})}
          underlineColorAndroid={'transparent'}
        />
        <TextInput style={styles.textInput} placeholder="Enter the Password"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(newPass)=>this.setState({password:newPass})}
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