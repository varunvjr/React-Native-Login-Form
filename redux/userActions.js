 import {LOGIN_SUCCESS,LOGIN_FAIL} from "./userConstants";


export const validateLogin=(username,password)=>(dispatch)=>{
  const userData={
    username:username,
    password:password
  }
  if(username=="varun"&&password=="secret"){
    dispatch({
      type:LOGIN_SUCCESS,
      payload:userData
    }) 
  }else{
    dispatch({
      type:LOGIN_FAIL,
      payload:userData
    })
  } 
}