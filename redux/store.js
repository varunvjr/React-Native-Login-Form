import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import loginReducer from "./loginReducer";

const reducer=combineReducers({userLogin:loginReducer})

const store=configureStore({reducer}); 

export default store;