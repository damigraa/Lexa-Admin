import axios from "../../helpers/axios"
import { ceramicsConstants } from "../constants"
import { updatedCeramics, deletedCeramics } from '../api/ceramics';

export const getCeramics = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ceramicsConstants.GET_CERAMICS_REQUEST })
            const res = await axios.get("ceramics/get")
            if (res.status === 200) {
                const { ceramics } = res.data
                dispatch({
                    type: ceramicsConstants.GET_CERAMICS_SUCCESS,
                    payload: {
                        ceramics
                    }
                })
            } else {
                dispatch({ type: ceramicsConstants.GET_CERAMICS_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addCeramics = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ceramicsConstants.ADD_CERAMICS_REQUEST })
            const res = await axios.post("ceramics/create", form)
            if (res.status === 201) {
                dispatch({ type: ceramicsConstants.ADD_CERAMICS_SUCCESS })
                dispatch(getCeramics())
            } else {
                dispatch({ type: ceramicsConstants.ADD_CERAMICS_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}
export const updateCeramicById = (id, ceramics) => async (dispatch) => {
    try {
        const { data } = await updatedCeramics(id, ceramics)
        dispatch({
            type: ceramicsConstants.UPDATE_CERAMICS_SUCCESS, payload: data
        })
        dispatch(getCeramics())
    } catch (error) {
        console.log(error);
    }
}


export const deleteCeramicsById = (id) => async (dispatch) => {
    try {
        await deletedCeramics(id);

        dispatch({ type: ceramicsConstants.DELETE_CERAMICS_SUCCESS, payload: id });
        dispatch(getCeramics())
    } catch (error) {
        console.log(error);
    }
}