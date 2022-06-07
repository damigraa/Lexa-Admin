import axios from "../../helpers/axios"
import { deletedCostDelivery, updatedCostDelivery } from "../api/costDelivery"
import { costDeliveryConstants } from "../constants"



export const getCostDelivery = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: costDeliveryConstants.GET_COST_DELIVERY_REQUEST })
            const res = await axios.get("costDelivery/get")
            if (res.status === 200) {
                const { costDelivery } = res.data
                dispatch({
                    type: costDeliveryConstants.GET_COST_DELIVERY_SUCCESS,
                    payload: {
                        costDelivery
                    }
                })
            } else {
                dispatch({ type: costDeliveryConstants.GET_COST_DELIVERY_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}


export const addCostDelivery = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: costDeliveryConstants.ADD_COST_DELIVERY_REQUEST })
            const res = await axios.post("costDelivery/create", form)
            if (res.status === 201) {
                dispatch({ type: costDeliveryConstants.ADD_COST_DELIVERY_SUCCESS })
                dispatch(getCostDelivery())
            } else {
                dispatch({ type: costDeliveryConstants.ADD_COST_DELIVERY_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }

}

export const updateCostDelivery = (id, costDelivery) => async (dispatch) => {
    try {
        const { data } = await updatedCostDelivery(id, costDelivery)
        dispatch({
            type: costDeliveryConstants.UPDATE_COST_DELIVERY_SUCCESS, payload: data
        })
        dispatch(getCostDelivery())
    } catch (e) {
        console.log(e)
    }
}
export const deleteCostDelivery = (id) => async (dispatch) => {
    try {
        await deletedCostDelivery(id)
        dispatch({ type: costDeliveryConstants.DELETE_COST_DELIVERY_SUCCESS, payload: id })
        dispatch(getCostDelivery())
    } catch (e) {
        console.log(e)
    }
}