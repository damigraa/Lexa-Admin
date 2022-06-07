import axios from "../../helpers/axios"
import { mainImageConstants } from '../constants';
import { updatedMainImage } from './../api/mainImage';


export const getMainImage = () => {
    return async (dispatch) => {
        try { 
            dispatch({ type: mainImageConstants.GET_MAIN_IMAGE_REQUEST })
            const res = await axios.get("mainImage/get")
            if (res.status === 200) {
                const { mainImage } = res.data
                dispatch({
                    type: mainImageConstants.GET_MAIN_IMAGE_SUCCESS,
                    payload: {
                        mainImage
                    }
                })
            } else {
                dispatch({ type: mainImageConstants.GET_MAIN_IMAGE_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addMainImage = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: mainImageConstants.ADD_MAIN_IMAGE_REQUEST })
            const res = await axios.post("mainImage/create", form)
            if (res.status === 201) {
                dispatch({ type: mainImageConstants.ADD_MAIN_IMAGE_SUCCESS })
                dispatch(getMainImage())
            } else {
                dispatch({ type: mainImageConstants.ADD_MAIN_IMAGE_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const updateMainImage = (id, post) => {
    return async (dispatch) => {
        try {
            const data = await updatedMainImage(id, post)
            dispatch({
                type: mainImageConstants.UPDATE_MAIN_IMAGE_SUCCESS, payload: data
            })
            dispatch(getMainImage())
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteMainImage = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: mainImageConstants.DELETE_MAIN_IMAGE_REQUEST })
            const res = await axios.delete("mainImage/delete", {
                data: { payload }
            })
            if (res.status === 202) {
                dispatch({ type: mainImageConstants.DELETE_MAIN_IMAGE_SUCCESS })
                dispatch(getMainImage())
            } else {
                const { error } = res.data
                dispatch({
                    type: mainImageConstants.DELETE_MAIN_IMAGE_FAILURE,
                    payload: {
                        error
                    }
                })

            }
        } catch (e) {
            console.log(e.message)
        }
    }
}