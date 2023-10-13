import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { constants } from "@/common/Constant";
import axios from "axios";


export const addRestaurantFunc = createAsyncThunk("addRestaurants/addRestaurantFunc",
    async (values) => {
        try {
            const responce = await axios.post(`${constants.URLLOCAL}/restaurent/signupRestaurent`, values)
            console.log("api responce", responce.data)
            return responce.data
        } catch (error) {
            return error.response
        }
    }
)
export const verifileRestaurantFunc = createAsyncThunk("verifideRestaurants/verifileRestaurantFunc",
    async (values) => {
        try {
            const responce = await axios.post(`${constants.URLLOCAL}/restaurent/verifiedRestaurent`, values)
            console.log("api responce", responce.data)
            return responce.data
        } catch (error) {
            return error.response
        }
    }
)
export const updateRestaurantFunc = createAsyncThunk("updateRestaurants/updateRestaurantFunc",
    async (values) => {
        try {
            const responce = await axios.post(`${constants.URLLOCAL}/restaurent/updateRestaurent`,values)
            console.log("api responce", responce.data)
            return responce.data
        } catch (error) {
            return error.response
        }
    }
)
export const deleteRestaurantFunc = createAsyncThunk("deleteRestaurants/deleteRestaurantFunc",
    async (values) => {
        try {
            const responce = await axios.post(`${constants.URLLOCAL}/restaurent/deleteRestaurent`, values)
            console.log("api responce", responce.data)
            return responce.data
        } catch (error) {
            return error.response
        }
    }
)

export const getRestaurantFunc = createAsyncThunk("getRestaurants/getRestaurantFunc",
    async () => {
        try {
            const responce = await axios.get(`${constants.URLLOCAL}/restaurent/getRestaurent`)
            console.log("api responce", responce.data)
            return responce.data
        } catch (error) {
            return error.response
        }
    }
)
export const getVerifidRestaurantsFunc = createAsyncThunk("getVerifidRestaurants/getVerifidRestaurantsFunc",
    async () => {
        try {
            const responce = await axios.get(`${constants.URLLOCAL}/restaurent/getVerifiedRestaurent`)
            console.log("api responce", responce.data)
            return responce.data
        } catch (error) {
            return error.response
        }
    }
)
const initialState = {
    addRestaurants: {},
    getRestaurants: {},
    getVerifidRestaurants: {},
    updateRestaurants: {},
    deleteRestaurants: {},
    verifideRestaurants:{},
    loading: false,

}
const RestaurantSlice = createSlice({
    name: "restaurants",
    initialState,
    reducers: {},
    extraReducers: {

        [addRestaurantFunc.fulfilled]: (state, { payload }) => {
            return { ...state, addRestaurants: payload, loading: true, }
        },

        [getRestaurantFunc.pending]: (state) => {
            return { ...state, loading: false }
        },
        [getRestaurantFunc.fulfilled]: (state, { payload }) => {
            return { ...state, getRestaurants: payload, loading: true }
        },
        [getRestaurantFunc.rejected]: (state) => {
            return { ...state, loading: false }
        },


        [getVerifidRestaurantsFunc.pending]: (state) => {
            return { ...state, loading: false }
        },
        [getVerifidRestaurantsFunc.fulfilled]: (state, { payload }) => {
            return { ...state, getRestaurants: payload, loading: true }
        },
        [getVerifidRestaurantsFunc.rejected]: (state) => {
            return { ...state, loading: false }
        },




        [updateRestaurantFunc.pending]: (state, { payload }) => {
            return { ...state, updateRestaurants: payload, loading: false, }
        },
        [updateRestaurantFunc.fulfilled]: (state, { payload }) => {
            return { ...state, updateRestaurants: payload, loading: true, }
        },
        [updateRestaurantFunc.rejected]: (state, { payload }) => {
            return { ...state, updateRestaurants: payload, loading: false, }
        },




        [verifileRestaurantFunc.pending]: (state, { payload }) => {
            return { ...state, updateRestaurants: payload, loading: false, }
        },
        [verifileRestaurantFunc.fulfilled]: (state, { payload }) => {
            return { ...state, updateRestaurants: payload, loading: true, }
        },
        [verifileRestaurantFunc.rejected]: (state, { payload }) => {
            return { ...state, updateRestaurants: payload, loading: false, }
        },



        [deleteRestaurantFunc.fulfilled]: (state, { payload }) => {
            return { ...state, deleteRestaurants: payload, loading: true }
        },

    }
})
export default RestaurantSlice.reducer
export const RestaurantStore = (state) => state.RestaurantSlice
export const getRestaurantData = (state) => state.RestaurantSlice.getRestaurants.data






