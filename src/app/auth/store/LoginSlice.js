import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { constants } from "@/common/Constant";
import axios from "axios";

  export const fetchUsers = createAsyncThunk("users/fetchUsers",
 async (values)=>{
    try {
    const responce = await axios.post(`${constants.URLLOCAL}/user/login`,values)
    console.log("api responce",responce.data)
    return responce.data
} catch (error) {
    return error.response
}
 }
 )
 const initialState={
    user:{},
    islogin:false
 }
const LoginSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:{
[fetchUsers.pending]:()=>{
    console.log("api is pending")
},
[fetchUsers.fulfilled]:(state,{payload})=>{
    console.log("api is fulfilled")
    return {...state,user:payload,islogin:true}
},
[fetchUsers.rejected]:(state,{payload})=>{
    console.log("api is rejected")
    return {...state,user:payload,islogin:false}
},

    }
})
 export default LoginSlice.reducer
 export const getuserData =(state)=>state.LoginSlice
