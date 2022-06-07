import axios from "../helpers/axios"
import { updatedHeader, deletedHeader } from "./api/header"
import { headerConstants } from "./constants"

export const getHeader = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: headerConstants.GET_HEADER_REQUEST })
            const res = await axios.get("header/get")
            if (res.status === 200) {
                const { header } = res.data
                dispatch({
                    type: headerConstants.GET_HEADER_SUCCESS,
                    payload: { header }
                })
            } else {
                dispatch({ type: headerConstants.GET_HEADER_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addHeader = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: headerConstants.ADD_HEADER_REQUEST })
            const res = await axios.post("header/create", form)
            if (res.status === 201) {
                dispatch({ type: headerConstants.ADD_HEADER_SUCCESS })
                dispatch(getHeader())
            } else {
                dispatch({ type: headerConstants.ADD_HEADER_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteHeader = (id) => async (dispatch) => {
    try {
        await deletedHeader(id);

        dispatch({ type: headerConstants.DELETE_HEADER_SUCCESS, payload: id });
        dispatch(getHeader())
    } catch (error) {
        console.log(error.message);
    }
}
export const updateHeader = (id, header) => async (dispatch) => {
    try {
        const { data } = await updatedHeader(id, header)
        dispatch({
            type: headerConstants.UPDATE_HEADER_SUCCESS, payload: data
        })
        dispatch(getHeader())
    } catch (error) {
        console.log(error);
    }
}