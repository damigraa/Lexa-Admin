import axios from "../../helpers/axios"
import { manufactureConstants } from './../constants';
import { updatedManufacture, deletedManufacture } from './../api/manufacture';

export const getManufacture = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: manufactureConstants.GET_MANUFACTURE_REQUEST })
            const res = await axios.get("manufacture/get")
            if (res.status === 200) {
                const { manufacture } = res.data
                dispatch({
                    type: manufactureConstants.GET_MANUFACTURE_SUCCESS,
                    payload: {
                        manufacture
                    }
                })
            } else {
                dispatch({ type: manufactureConstants.GET_MANUFACTURE_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addManufacture = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: manufactureConstants.ADD_MANUFACTURE_REQUEST })
            const res = await axios.post("manufacture/create", form)
            if (res.status === 201) {
                dispatch({ type: manufactureConstants.ADD_MANUFACTURE_SUCCESS })
                dispatch(getManufacture())
            } else {
                dispatch({ type: manufactureConstants.ADD_MANUFACTURE_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}
export const updateManufacture = (id, manufacture) => async (dispatch) => {
    try {
        const { data } = await updatedManufacture(id, manufacture)
        dispatch({
            type: manufactureConstants.UPDATE_MANUFACTURE_SUCCESS, payload: data
        })
        dispatch(getManufacture())
    } catch (error) {
        console.log(error);
    }
}

export const deleteManufacture = (id) => async (dispatch) => {
    try {
        await deletedManufacture(id);

        dispatch({ type: manufactureConstants.DELETE_MANUFACTURE_SUCCESS, payload: id });
        dispatch(getManufacture())
    } catch (error) {
        console.log(error);
    }
}