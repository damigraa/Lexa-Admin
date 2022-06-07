import axios from "../../helpers/axios"
import { comeToUsConstants } from '../constants';
import { deletedComeToUs, updatedComeToUs } from './../api/comeToUs';


export const getComeToUs = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: comeToUsConstants.GET_COME_TO_US_REQUEST })
            const res = await axios.get("comeToUs/get")
            if (res.status === 200) {
                const { comeToUs } = res.data
                dispatch({
                    type: comeToUsConstants.GET_COME_TO_US_SUCCESS,
                    payload: {
                        comeToUs
                    }
                })
            } else {
                dispatch({ type: comeToUsConstants.GET_COME_TO_US_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addComeToUs = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: comeToUsConstants.ADD_COME_TO_US_REQUEST })
            const res = await axios.post("comeToUs/create", form)
            if (res.status === 201) {
                dispatch({ type: comeToUsConstants.ADD_COME_TO_US_SUCCESS })
                dispatch(getComeToUs())
            } else {
                dispatch({ type: comeToUsConstants.ADD_COME_TO_US_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}


export const updateComeToUs = (id, comeToUs) => async (dispatch) => {
    try {
        const { data } = await updatedComeToUs(id, comeToUs)
        dispatch({
            type: comeToUsConstants.UPDATE_COME_TO_US_SUCCESS, payload: data
        })
        dispatch(getComeToUs())
    } catch (error) {
        console.log(error);
    }
}
export const deleteComeToUs = (id) => async (dispatch) => {
    try {
        await deletedComeToUs(id);

        dispatch({ type: comeToUsConstants.DELETE_COME_TO_US_SUCCESS, payload: id });
        dispatch(getComeToUs())
    } catch (error) {
        console.log(error.message);
    }
}