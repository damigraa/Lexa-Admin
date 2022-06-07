import axios from "../../helpers/axios"
import { engravingConstants } from "../constants"
import { deletedEngraving, updatedEngraving } from './../api/engraving';

export const getEngraving = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: engravingConstants.GET_ENGRAVING_REQUEST })
            const res = await axios.get("engraving/get")
            if (res.status === 200) {
                const { engraving } = res.data
                dispatch({
                    type: engravingConstants.GET_ENGRAVING_SUCCESS,
                    payload: {
                        engraving
                    }
                })
            } else {
                dispatch({ type: engravingConstants.GET_ENGRAVING_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addEngraving = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: engravingConstants.ADD_ENGRAVING_REQUEST })
            const res = await axios.post("engraving/create", form)
            if (res.status === 201) {
                dispatch({ type: engravingConstants.ADD_ENGRAVING_SUCCESS })
                dispatch(getEngraving())
            } else {
                dispatch({ type: engravingConstants.ADD_ENGRAVING_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const updateEngraving = (id, engraving) => {
    return async (dispatch) => {
        try {
            const { data } = await updatedEngraving(id, engraving)
            dispatch({
                type: engravingConstants.UPDATE_ENGRAVING_SUCCESS, payload: data
            })
            dispatch(getEngraving())
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteEngraving = (id) => {
    return async (dispatch) => {
        try {
            await deletedEngraving(id);
            dispatch({ type: engravingConstants.DELETE_ENGRAVING_SUCCESS, payload: id });
            dispatch(getEngraving())
        } catch (error) {
            console.log(error);
        }
    }
}