import axios from "../../helpers/axios"
import { tombstoneCurbConstants } from "../constants"
import { updatedTombstoneCurb, deletedTombstoneCurb } from '../api/tombstoneCurb';

export const getTombstoneCurb = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: tombstoneCurbConstants.GET_TOMBSTONE_CURB_REQUEST })
            const res = await axios.get("tombstoneCurb/get") 
            if (res.status === 200) {
                const { tombstoneCurb } = res.data
                dispatch({
                    type: tombstoneCurbConstants.GET_TOMBSTONE_CURB_SUCCESS,
                    payload: {
                        tombstoneCurb
                    }
                })
            } else {
                dispatch({ type: tombstoneCurbConstants.GET_TOMBSTONE_CURB_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addTombstoneCurb = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: tombstoneCurbConstants.ADD_TOMBSTONE_CURB_REQUEST })
            const res = await axios.post("tombstoneCurb/create", form)
            if (res.status === 201) {
                dispatch({ type: tombstoneCurbConstants.ADD_TOMBSTONE_CURB_SUCCESS })
                dispatch(getTombstoneCurb())
            } else {
                dispatch({ type: tombstoneCurbConstants.ADD_TOMBSTONE_CURB_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}
export const updateTombstoneCurb = (id, tombstoneCurb) => async (dispatch) => {
    try {
        const { data } = await updatedTombstoneCurb(id, tombstoneCurb)
        dispatch({
            type: tombstoneCurbConstants.UPDATE_TOMBSTONE_CURB_SUCCESS, payload: data
        })
        dispatch(getTombstoneCurb())
    } catch (error) {
        console.log(error);
    }
}


export const deleteTombstoneCurb = (id) => async (dispatch) => {
    try {
        await deletedTombstoneCurb(id);

        dispatch({ type: tombstoneCurbConstants.DELETE_TOMBSTONE_CURB_SUCCESS, payload: id });
        dispatch(getTombstoneCurb())
    } catch (error) {
        console.log(error);
    }
}