import axios from "../helpers/axios";
import { deletedEngravingCategory, updatedEngravingCategory } from './api/engravingCategory';
import { engravingCategoryConstants } from './constants';

export const getEngravingCategory = () => {
    return async dispatch => {
        dispatch({ type: engravingCategoryConstants.GET_ENGRAVING_CATEGORY_REQUEST });
        const res = await axios.get("engravingCategory/get");
        // console.log(res);
        if (res.status === 200) {
            const { engravingCategory } = res.data;
            dispatch({
                type: engravingCategoryConstants.GET_ENGRAVING_CATEGORY_SUCCESS,
                payload: {
                    engravingCategory
                }
            });
        } else {
            dispatch({
                type: engravingCategoryConstants.GET_ENGRAVING_CATEGORY_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}

export const addEngravingCategory = (form) => {
    return async dispatch => {
        dispatch({ type: engravingCategoryConstants.ADD_ENGRAVING_CATEGORY_REQUEST });
        try {
            const res = await axios.post("/engravingCategory/create", form);
            if (res.status === 201) {
                dispatch({
                    type: engravingCategoryConstants.ADD_ENGRAVING_CATEGORY_SUCCESS,
                    payload: { engravingCategory: res.data.engravingCategory }
                });
                dispatch(getEngravingCategory())

            } else {
                dispatch({
                    type: engravingCategoryConstants.ADD_ENGRAVING_CATEGORY_FAILURE,
                    payload: res.data.error
                });
            }
        } catch (error) {
            console.log(error.response);
        }

    }
}

export const updateEngravingCategory = (id, engravingCategory) => async (dispatch) => {
    try {
        const { data } = await updatedEngravingCategory(id, engravingCategory)
        dispatch({
            type: engravingCategoryConstants.UPDATE_ENGRAVING_CATEGORY_SUCCESS, payload: data
        })
        dispatch(getEngravingCategory())
    } catch (error) {
        console.log(error);
    }
}


export const deleteEngravingCategory = (id) => async (dispatch) => {
    try {
        await deletedEngravingCategory(id);
        dispatch({ type: engravingCategoryConstants.DELETE_ENGRAVING_CATEGORY_SUCCESS, payload: id });
        dispatch(getEngravingCategory())
    } catch (error) {
        console.log(error);
    }
}