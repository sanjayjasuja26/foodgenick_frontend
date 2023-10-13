import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { constants } from "@/common/Constant";
import axios from "axios";

  export const userSignUpFunc = createAsyncThunk("users/userSignUpFunc",
 async (values)=>{
    try{
    const responce = await axios.post(`${constants.URLLOCAL}/restaurent/signupRestaurent`,values)
    console.log("api responce",responce.data)
    return responce.data
    }catch (error){
        return error.responce
    }
 }
 )
 const initialState={
    userSignUp:{},
    isSignUP:false
 }
const SignUpSlice = createSlice({
    name:"userSignUp",
    initialState,
    reducers:{},
    extraReducers:{
[userSignUpFunc.pending]:()=>{
    console.log("api is pending")
},
[userSignUpFunc.fulfilled]:(state,{payload})=>{
    console.log("api is fulfilled")
    return {...state,userSignUp:payload,isSignUP:true}
},
[userSignUpFunc.rejected]:(state,{payload})=>{
    console.log("api is rejected")
    return {...state,userSignUp:payload,isSignUP:false}
},






    }
})
 export default SignUpSlice.reducer
 export const getSignupData =(state)=>state.SignUpSlice


