import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { constants } from "@/common/Constant";
import axios from "axios";
import Cookies from "js-cookie";


export const addBlogFunc = createAsyncThunk("blogData/addBlogFunc",
    async (values) => {
        try {
            const token = Cookies.get("token");
            const responce = await axios.post(`${constants.URLLOCAL}/foodgienic/blog`, values,{
                headers: {
                    Authorization: `Bearer ${token}`,
      
                  },
            })
            console.log("api responce", responce.data)
            return responce.data
        } catch (error) {
            return error.response
        }
    }
)

export const updateBlogFunc = createAsyncThunk("updateBlog/updateBlogFunc",
    async (values) => {
        try {
            const token = Cookies.get("token");
            const responce = await axios.post(`${constants.URLLOCAL}/foodgienic/updateBlog`,values,{
                headers: {
                    Authorization: `Bearer ${token}`,
      
                  },
            })
            console.log("api responce", responce.data)
            return responce.data
        } catch (error) {
            return error.response
        }
    }
)
export const deleteBlogFunc = createAsyncThunk("deleteBlog/deleteBlogFunc",

    async (values) => {
        try {
            const token = Cookies.get("token");
            const responce = await axios.post(`${constants.URLLOCAL}/foodgienic/deleteBlog`, values,{
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            })
            console.log("api responce", responce.data)
            return responce.data
        } catch (error) {
            return error.response
        }
    }
)

export const getBlogFunc = createAsyncThunk("getAllBolg/getBlogFunc",
    async () => {
        try {
            const responce = await axios.get(`${constants.URLLOCAL}/foodgienic/getAllBlog`)
            console.log("api responce blog ", responce.data)
            return responce.data
        } catch (error) {
            return error.response
        }
    }
)

export const getSingleBlogFunc = createAsyncThunk("getAllBolg/getSingleBlogFunc",
    async (id) => {
        try {
            const responce = await axios.get(`${constants.URLLOCAL}/foodgienic/blogDetails/${id}`)
            console.log("api responce blog ", responce.data)
            return responce.data
        } catch (error) {
            return error.response
        }
    }
)



const initialState = {
    blogData: {},
    getSingleBlog:{},
    getAllBolg: {},
    updateBlog: {},
    deleteBlog:{},
    loading: false,

}
const BlogSlice = createSlice({
    name: "Blog",
    initialState,
    reducers: {},
    extraReducers: {

        [addBlogFunc.fulfilled]: (state, { payload }) => {
            return { ...state, blogData: payload, loading: true, }
        },

        [getBlogFunc.pending]: (state) => {
            return { ...state, loading: false }
        },
        [getBlogFunc.fulfilled]: (state, { payload }) => {
            return { ...state, getAllBolg: payload, loading: true }
        },
        [getBlogFunc.rejected]: (state) => {
            return { ...state, loading: false }
        },

        [getSingleBlogFunc.pending]: (state) => {
            return { ...state, loading: false }
        },
        [getSingleBlogFunc.fulfilled]: (state, { payload }) => {
            return { ...state, getSingleBlog: payload, loading: true }
        },
        [getSingleBlogFunc.rejected]: (state) => {
            return { ...state, loading: false }
        },


     



        [updateBlogFunc.pending]: (state, { payload }) => {
            return { ...state, updateBlog: payload, loading: false, }
        },
        [updateBlogFunc.fulfilled]: (state, { payload }) => {
            return { ...state, updateBlog: payload, loading: true, }
        },
        [updateBlogFunc.rejected]: (state, { payload }) => {
            return { ...state, updateBlog: payload, loading: false, }
        },






        [deleteBlogFunc.fulfilled]: (state, { payload }) => {
            return { ...state, deleteBlog: payload, loading: true }
        },

    }
})
export default BlogSlice.reducer
export const getBlogSliceData = (state) => state.BlogSlice
export const getAllBlogData = (state) => state.BlogSlice.getAllBolg.data







