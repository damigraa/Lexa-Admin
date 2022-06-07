import axios from "../../helpers/axios"
import { blogConstants } from "../constants"
import { updatedBlog, deletedBlog } from '../api/blog';

export const getBlog = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: blogConstants.GET_BLOG_REQUEST })
            const res = await axios.get("blog/get")
            if (res.status === 200) {
                const { blog } = res.data
                dispatch({
                    type: blogConstants.GET_BLOG_SUCCESS,
                    payload: {
                        blog
                    }
                })
            } else { 
                dispatch({ type: blogConstants.GET_BLOG_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addBlog = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: blogConstants.ADD_BLOG_REQUEST })
            const res = await axios.post("blog/create", form)
            if (res.status === 201) {
                dispatch({ type: blogConstants.ADD_BLOG_SUCCESS })
                dispatch(getBlog())
            } else {
                dispatch({ type: blogConstants.ADD_BLOG_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}
export const updateBlog = (id, blog) => async (dispatch) => {
    try {
        const { data } = await updatedBlog(id, blog)
        dispatch({
            type: blogConstants.UPDATE_BLOG_SUCCESS, payload: data
        })
        dispatch(getBlog())
    } catch (error) {
        console.log(error);
    }
}


export const deleteBlog = (id) => async (dispatch) => {
    try {
        await deletedBlog(id);
        dispatch({ type: blogConstants.DELETE_BLOG_SUCCESS, payload: id });
        dispatch(getBlog())
    } catch (error) {
        console.log(error);
    }
}