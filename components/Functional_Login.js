import {Text,TextInput,TouchableOpacity,View,StyleSheet} from 'react-native'
import {useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {validateLogin} from "../redux/userActions";
 const Login=()=>{
  const dispatch=useDispatch();
  const userLogin=useSelector(state=>state.userLogin);
  const {isMatch,userInfo}=userLogin;
  if(isMatch){
    console.log("Welcome Login Success:",userInfo.username)
  }else{
        console.log("Welcome Login Fail:",userInfo.username)
  }
    useEffect(()=>{
      dispatch(validateLogin(username,password))
  },[dispatch,username,password])

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const handleSubmit=()=>{
    dispatch(validateLogin(username,password));
  }
  return(
      <View style={styles.loginForm}>
        <Text style={styles.header}>Login Form</Text>
        <TextInput style={styles.textInput} placeholder="Enter the Username" 
          value={username}
          onChangeText={(newUser)=>setUsername(newUser)}
          underlineColorAndroid={'transparent'}
        />
        <TextInput style={styles.textInput} placeholder="Enter the Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(newPass)=>setPassword(newPass)}
          underlineColorAndroid={'transparent'}
        />
        <TouchableOpacity style={styles.button}>
          <Text onPress={handleSubmit} style={styles.btntext}>Login</Text>
        </TouchableOpacity>
      </View>
    );
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
export default Login;