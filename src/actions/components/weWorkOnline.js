import axios from "../../helpers/axios"
import { weWorkOnlineConstants } from "../constants"
import { deletedWeWorkOnline, updatedWeWorkOnline } from './../api/weWorkOnline';

export const getWeWorkOnline = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: weWorkOnlineConstants.GET_WE_WORK_ONLINE_REQUEST })
            const res = await axios.get("weWorkOnline/get")
            if (res.status === 200) {
                const { weWorkOnline } = res.data
                dispatch({
                    type: weWorkOnlineConstants.GET_WE_WORK_ONLINE_SUCCESS,
                    payload: {
                        weWorkOnline
                    }
                })
            } else {
                dispatch({ type: weWorkOnlineConstants.GET_WE_WORK_ONLINE_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addWeWorkOnline = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: weWorkOnlineConstants.ADD_WE_WORK_ONLINE_REQUEST })
            const res = await axios.post("weWorkOnline/create", form)
            if (res.status === 201) {
                dispatch({ type: weWorkOnlineConstants.ADD_WE_WORK_ONLINE_SUCCESS })
                dispatch(getWeWorkOnline())
            } else {
                dispatch({ type: weWorkOnlineConstants.ADD_WE_WORK_ONLINE_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const updateWeWorkOnline = (id, weWorkOnline) => async (dispatch) => {
    try {
        const { data } = await updatedWeWorkOnline(id, weWorkOnline)
        dispatch({
            type: weWorkOnlineConstants.UPDATE_WE_WORK_ONLINE_SUCCESS, payload: data
        })
        dispatch(getWeWorkOnline())
    } catch (error) {
        console.log(error);
    }
}

export const deleteWeWorkOnline = (id) => async (dispatch) => {
    try {
        await deletedWeWorkOnline(id);
        dispatch({ type: weWorkOnlineConstants.DELETE_WE_WORK_ONLINE_SUCCESS, payload: id });
        dispatch(getWeWorkOnline())
    } catch (error) {
        console.log(error);
    }
}