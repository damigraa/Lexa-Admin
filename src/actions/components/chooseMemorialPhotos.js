import axios from "../../helpers/axios"
import { chooseMemorialPhotosConstants } from "../constants"

export const getChooseMemorialPhotos = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: chooseMemorialPhotosConstants.GET_CHOOSE_MEMORIAL_PHOTOS_REQUEST })
            const res = await axios.get("chooseMemorialPhotos/get")
            if (res.status === 200) {
                const { chooseMemorialPhotos } = res.data
                dispatch({
                    type: chooseMemorialPhotosConstants.GET_CHOOSE_MEMORIAL_PHOTOS_SUCCESS,
                    payload: {
                        chooseMemorialPhotos
                    }
                })
            } else {
                dispatch({ type: chooseMemorialPhotosConstants.GET_CHOOSE_MEMORIAL_PHOTOS_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addChooseMemorialPhotos = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: chooseMemorialPhotosConstants.ADD_CHOOSE_MEMORIAL_PHOTOS_REQUEST })
            const res = await axios.post("chooseMemorialPhotos/create", form)
            if (res.status === 201) {
                dispatch({ type: chooseMemorialPhotosConstants.ADD_CHOOSE_MEMORIAL_PHOTOS_SUCCESS })
                dispatch(getChooseMemorialPhotos())
            } else {
                dispatch({ type: chooseMemorialPhotosConstants.ADD_CHOOSE_MEMORIAL_PHOTOS_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const updateChooseMemorialPhotos = (updateText) => {
    return async (dispatch) => {
        try {
            dispatch({ type: chooseMemorialPhotosConstants.GET_CHOOSE_MEMORIAL_PHOTOS_REQUEST })
            const res = await axios.post("chooseMemorialPhotos/update", updateText``)
            if (res.status === 200) {
                dispatch({ type: chooseMemorialPhotosConstants.GET_CHOOSE_MEMORIAL_PHOTOS_SUCCESS })
                dispatch(getChooseMemorialPhotos())
            } else {
                dispatch({ type: chooseMemorialPhotosConstants.GET_CHOOSE_MEMORIAL_PHOTOS_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteChooseMemorialPhotos = (payload) => {
    return async (dispatch) => {
        try {
            const res = await axios.delete("chooseMemorialPhotos/delete", {
                data: { payload }
            })
            dispatch({ type: chooseMemorialPhotosConstants.DELETE_CHOOSE_MEMORIAL_PHOTOS_REQUEST })
            if (res.status === 202) {
                dispatch({ type: chooseMemorialPhotosConstants.DELETE_CHOOSE_MEMORIAL_PHOTOS_SUCCESS })
                dispatch(getChooseMemorialPhotos())
            } else {
                const { error } = res.data
                dispatch({
                    type: chooseMemorialPhotosConstants.DELETE_CHOOSE_MEMORIAL_PHOTOS_FAILURE,
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