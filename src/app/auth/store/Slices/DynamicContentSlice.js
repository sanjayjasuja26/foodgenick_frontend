const { constants } = require("@/common/Constant");
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import axios from "axios";
import Cookies from "js-cookie";

 export const updateAllDynamicData = createAsyncThunk("DynamicContantSlice/updateAllDynamicData",
async(values)=>{
    try{
        const token = Cookies.get("token");
        const responce = await axios.post(`${constants.URLLOCAL}/foodgienic/content`, values,{
            headers: {
              Authorization: `Bearer ${token}`,

            },
          })
        return responce.data
      
    }catch(error){
        return error.response
    }
}

)
 export const getAllDynamicData = createAsyncThunk("DynamicContantSlice/getAllDynamicData",
async()=>{
    try{
        const token = Cookies.get("token");
        const responce = await axios.get(`${constants.URLLOCAL}/foodgienic/getcontent`)

        return responce.data
      
    }catch(error){
        return error.response
    }
}

)


const DynamicContentSlice = createSlice({
    name :"DynamicContantSlice",
    initialState:{
        updateContentData :{},
        getContentData :{}
    },
    extraReducers:{
     [updateAllDynamicData.pending]:()=>{
       console.log("pending")
     },
     [updateAllDynamicData.fulfilled]:(state,{payload})=>{
        return {...state,contentData:payload}
     },
     [updateAllDynamicData.rejected]:()=>{
        console.log("rejected")
     },
     [getAllDynamicData.pending]:()=>{
       console.log("pending")
     },
     [getAllDynamicData.fulfilled]:(state,{payload})=>{
        return {...state,getContentData:payload}
     },
     [getAllDynamicData.rejected]:()=>{
        console.log("rejected")
     }


    }
    
})

export default DynamicContentSlice.reducer
export const getaboutData = (state) => state.DynamicContentSlice?.getContentData?.data?.about_page_sections
export const getHomeData = (state) => state.DynamicContentSlice?.getContentData?.data?.home_page_sections
export const getServiceData = (state) => state.DynamicContentSlice?.getContentData?.data?.service_page_sections
export const getPriceData = (state) => state.DynamicContentSlice?.getContentData?.data?.price_page_sections
export const getBlogData = (state) => state.DynamicContentSlice?.getContentData?.data?.blog_page_sections
export const getPartnerData = (state) => state.DynamicContentSlice?.getContentData?.data?.partners_page_sections
