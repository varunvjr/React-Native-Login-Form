import {LOGIN_SUCCESS,LOGIN_FAIL} from "./userConstants";

const initialState={
  isMatch:false
}

export const loginReducer=(state=initialState,action)=>{
  switch(action.type){ 
    case LOGIN_SUCCESS:return{
      isMatch:true,
      userInfo:action.payload
    }
    case LOGIN_FAIL:return{
       isMatch:false,
       userInfo:action.payload
    }
    default:return state
  }
}