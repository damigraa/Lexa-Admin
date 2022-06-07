import axios from "../helpers/axios";
import { engravingLayoutConstants } from "./constants";
import { deletedEngravingLayout, updatedEngravingLayout } from './api/engravingLayout';


export const getEngravingLayoutBySlug = (slug, sort) => {
    return async dispatch => {
        try {
            dispatch({ type: engravingLayoutConstants.GET_ENGRAVING_LAYOUT_BY_SLUG_REQUEST })
            let url = `/engravingLayout/${slug}`
            if (sort) {
                url = `/engravingLayout/${slug}?sort=${sort}`
            }
            const res = await axios.get(url)
            if (res.status === 200) {
                dispatch({
                    type: engravingLayoutConstants.GET_ENGRAVING_LAYOUT_BY_SLUG_SUCCESS,
                    payload: res.data
                })
            } else {
                dispatch({
                    type: engravingLayoutConstants.GET_ENGRAVING_LAYOUT_BY_SLUG_FAILURE,
                })
            }
        } catch (error) {
            console.log(error)
        }

    }
}

export const getEngravingLayout = () => {
    return async dispatch => {
        dispatch({ type: engravingLayoutConstants.GET_ENGRAVING_LAYOUT_REQUEST });
        const res = await axios.get("engravingLayout/get");
        if (res.status === 200) {
            const { engravingLayout } = res.data;
            dispatch({
                type: engravingLayoutConstants.GET_ENGRAVING_LAYOUT_SUCCESS,
                payload: {
                    engravingLayout
                }
            });
        } else {
            dispatch({
                type: engravingLayoutConstants.GET_ENGRAVING_LAYOUT_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}

export const addEngravingLayout = (form) => {
    return async dispatch => {
        dispatch({ type: engravingLayoutConstants. ADD_ENGRAVING_LAYOUT_REQUEST });
        try {
            const res = await axios.post("/engravingLayout/create", form);
            if (res.status === 201) {
                dispatch({
                    type: engravingLayoutConstants.ADD_ENGRAVING_LAYOUT_SUCCESS,
                    payload: { engravingLayout: res.data.engravingLayout }
                });
            } else {
                dispatch({
                    type: engravingLayoutConstants.ADD_ENGRAVING_LAYOUT_FAILURE,
                    payload: res.data.error
                });
            }
        } catch (error) {
            console.log(error.response);
        }

    }
}

export const updateEngravingLayout = (id, engravingLayout) => async (dispatch) => {
    try {
        const { data } = await updatedEngravingLayout(id, engravingLayout)
        dispatch({
            type: engravingLayoutConstants.UPDATE_ENGRAVING_LAYOUT_SUCCESS, payload: data
        })
        dispatch(getEngravingLayout())
    } catch (error) {
        console.log(error);
    }
}


export const deleteEngravingLayout = (id) => async (dispatch) => {
    try {
        await deletedEngravingLayout(id);
        dispatch({ type: engravingLayoutConstants.DELETE_ENGRAVING_LAYOUT_SUCCESS, payload: id });
        dispatch(getEngravingLayout())
    } catch (error) {
        console.log(error);
    }
}