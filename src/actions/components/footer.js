import axios from "../../helpers/axios"
import { footerConstants } from "../constants"
import { updatedFooter, deletedFooter } from '../api/footer';

export const getFooter = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: footerConstants.GET_FOOTER_REQUEST })
            const res = await axios.get("footer/get")
            if (res.status === 200) {
                const { footer } = res.data
                dispatch({
                    type: footerConstants.GET_FOOTER_SUCCESS,
                    payload: {
                        footer
                    }
                })
            } else {
                dispatch({ type: footerConstants.GET_FOOTER_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addFooter = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: footerConstants.ADD_FOOTER_REQUEST })
            const res = await axios.post("footer/create", form)
            if (res.status === 201) {
                dispatch({ type: footerConstants.ADD_FOOTER_SUCCESS })
                dispatch(getFooter())
            } else {
                dispatch({ type: footerConstants.ADD_FOOTER_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}
export const updateFooter = (id, footer) => async (dispatch) => {
    try {
        const { data } = await updatedFooter(id, footer)
        dispatch({
            type: footerConstants.UPDATE_FOOTER_SUCCESS, payload: data
        })
        dispatch(getFooter())
    } catch (error) {
        console.log(error);
    }
}


export const deleteFooter = (id) => async (dispatch) => {
    try {
        await deletedFooter(id);

        dispatch({ type: footerConstants.DELETE_FOOTER_SUCCESS, payload: id });
        dispatch(getFooter())
    } catch (error) {
        console.log(error);
    }
}