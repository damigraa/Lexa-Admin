import axios from "../../helpers/axios"
import { graniteTilesConstants } from "../constants"
import { updatedGraniteTiles, deletedGraniteTiles } from '../api/graniteTiles';

export const getGraniteTiles = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: graniteTilesConstants.GET_GRANITE_TILES_REQUEST })
            const res = await axios.get("graniteTiles/get")
            if (res.status === 200) {
                const { graniteTiles } = res.data
                dispatch({
                    type: graniteTilesConstants.GET_GRANITE_TILES_SUCCESS,
                    payload: {
                        graniteTiles
                    }
                })
            } else {
                dispatch({ type: graniteTilesConstants.GET_GRANITE_TILES_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addGraniteTiles = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: graniteTilesConstants.ADD_GRANITE_TILES_REQUEST })
            const res = await axios.post("graniteTiles/create", form)
            if (res.status === 201) {
                dispatch({ type: graniteTilesConstants.ADD_GRANITE_TILES_SUCCESS })
                dispatch(getGraniteTiles())
            } else {
                dispatch({ type: graniteTilesConstants.ADD_GRANITE_TILES_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}
export const updateGraniteTiles = (id, graniteTiles) => async (dispatch) => {
    try {
        const { data } = await updatedGraniteTiles(id, graniteTiles)
        dispatch({
            type: graniteTilesConstants.UPDATE_GRANITE_TILES_SUCCESS, payload: data
        })
        dispatch(getGraniteTiles())
    } catch (error) {
        console.log(error);
    }
}


export const deleteGraniteTiles = (id) => async (dispatch) => {
    try {
        await deletedGraniteTiles(id);

        dispatch({ type: graniteTilesConstants.DELETE_GRANITE_TILES_SUCCESS, payload: id });
        dispatch(getGraniteTiles())
    } catch (error) {
        console.log(error);
    }
}