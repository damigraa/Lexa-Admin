import axios from "../helpers/axios"
import { graniteMaterialConstants } from "./constants"
import { updatedGraniteMaterial, deletedGraniteMaterial } from './api/graniteMaterial';

export const getGraniteMaterial = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: graniteMaterialConstants.GET_GRANITE_MATERIAL_REQUEST })
            const res = await axios.get("/graniteMaterial/get")
            if (res.status === 200) {
                const { graniteMaterial } = res.data
                dispatch({
                    type: graniteMaterialConstants.GET_GRANITE_MATERIAL_SUCCESS,
                    payload: { graniteMaterial }
                })
            } else {
                dispatch({ type: graniteMaterialConstants.GET_GRANITE_MATERIAL_FAILURE })
            }
        } catch (e) { 
            console.log(e)
        }
    }
}

export const addGraniteMaterial = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: graniteMaterialConstants.ADD_GRANITE_MATERIAL_REQUEST })
            const res = await axios.post("/graniteMaterial/create", form)
            if (res.status === 201) {
                dispatch({ type: graniteMaterialConstants.ADD_GRANITE_MATERIAL_SUCCESS })
                dispatch(getGraniteMaterial())
            } else {
                dispatch({ type: graniteMaterialConstants.ADD_GRANITE_MATERIAL_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteGraniteMaterial = (id) => async (dispatch) => {
    try {
        await deletedGraniteMaterial(id);
        dispatch({ type: graniteMaterialConstants.DELETE_GRANITE_MATERIAL_SUCCESS, payload: id });
        dispatch(getGraniteMaterial())
    } catch (error) {
        console.log(error);
    }
}
export const updateGraniteMaterial = (id, graniteMaterial) => async (dispatch) => {
    try {
        const { data } = await updatedGraniteMaterial(id, graniteMaterial)
        dispatch({
            type: graniteMaterialConstants.UPDATE_GRANITE_MATERIAL_SUCCESS, payload: data
        })
        dispatch(getGraniteMaterial())
    } catch (error) {
        console.log(error);
    }
}