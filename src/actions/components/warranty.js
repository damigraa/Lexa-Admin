import axios from "../../helpers/axios"
import { warrantyConstants } from '../constants';
import { deletedWarranty, updatedWarranty } from './../api/api';


export const getWarranty = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: warrantyConstants.GET_WARRANTY_REQUEST })
            const res = await axios.get("warranty/get")
            if (res.status === 200) {
                const { warranty } = res.data
                dispatch({
                    type: warrantyConstants.GET_WARRANTY_SUCCESS,
                    payload: {
                        warranty
                    }
                })
            } else {
                dispatch({ type: warrantyConstants.GET_WARRANTY_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addWarranty = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: warrantyConstants.ADD_WARRANTY_REQUEST })
            const res = await axios.post("warranty/create", form)
            if (res.status === 201) {
                dispatch({ type: warrantyConstants.ADD_WARRANTY_SUCCESS })
                dispatch(getWarranty())
            } else {
                dispatch({ type: warrantyConstants.ADD_WARRANTY_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}


export const updateWarranty = (id, post) => async (dispatch) => {
    try {
        const { data } = await updatedWarranty(id, post)
        dispatch({
            type: warrantyConstants.GET_WARRANTY_SUCCESS, payload: data
        })
        dispatch(getWarranty())
    } catch (error) {
        console.log(error);
    }
}

export const deleteWarranty = (id) => async (dispatch) => {
    try {
        await deletedWarranty(id);
        dispatch({ type: warrantyConstants.DELETE_WARRANTY_SUCCESS, payload: id });
        dispatch(getWarranty())
    } catch (error) {
        console.log(error);
    }
}