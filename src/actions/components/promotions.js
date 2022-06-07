import axios from "../../helpers/axios"
import { promotionConstants } from "../constants"
import { updatedPromotion } from './../api/promotion';

export const getPromotions = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: promotionConstants.GET_PROMOTION_REQUEST })
            const res = await axios.get("promotions/get")
            if (res.status === 200) {
                const { promotion } = res.data
                dispatch({
                    type: promotionConstants.GET_PROMOTION_SUCCESS,
                    payload: {
                        promotion
                    }
                })
            } else {
                dispatch({ type: promotionConstants.GET_PROMOTION_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addPromotion = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: promotionConstants.ADD_PROMOTION_REQUEST })
            const res = await axios.post("promotions/create", form)
            if (res.status === 201) {
                dispatch({ type: promotionConstants.ADD_PROMOTION_SUCCESS })
                dispatch(getPromotions())
            } else {
                dispatch({ type: promotionConstants.ADD_PROMOTION_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}
export const updatePromotion = (id, post) => async (dispatch) => {
    try {
        const { data } = await updatedPromotion(id, post)
        dispatch({
            type: promotionConstants.GET_PROMOTION_SUCCESS, payload: data
        })
        dispatch(getPromotions())
    } catch (error) {
        console.log(error);
    }
}

export const deletePromotion = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: promotionConstants.DELETE_PROMOTION_REQUEST })
            const res = await axios.delete("promotions/delete", {
                data: { payload }
            })
            if (res.status === 202) {
                dispatch({ type: promotionConstants.DELETE_PROMOTION_SUCCESS })
                dispatch(getPromotions())
            } else {
                const { error } = res.data
                dispatch({
                    type: promotionConstants.DELETE_PROMOTION_FAILURE,
                    payload: {
                        error
                    }
                })

            }
        } catch (e) {
            console.log(e.message)
        }
    }
}