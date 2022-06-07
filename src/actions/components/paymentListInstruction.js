import axios from "../../helpers/axios"
import { deletedPaymentLI, updatedPaymentLI } from "../api/paymentLI"
import { paymentListInstructionConstants } from "../constants"



export const getPaymentLI = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: paymentListInstructionConstants.GET_PAYMENT_LIST_INSTRUCTION_REQUEST })
            const res = await axios.get("paymentLI/get")
            if (res.status === 200) {
                const { paymentLI } = res.data
                dispatch({
                    type: paymentListInstructionConstants.GET_PAYMENT_LIST_INSTRUCTION_SUCCESS,
                    payload: {
                        paymentLI
                    }
                })
            } else {
                dispatch({ type: paymentListInstructionConstants.GET_PAYMENT_LIST_INSTRUCTION_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}


export const addPaymentLI = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: paymentListInstructionConstants.ADD_PAYMENT_LIST_INSTRUCTION_REQUEST })
            const res = await axios.post("paymentLI/create", form)
            if (res.status === 201) {
                dispatch({ type: paymentListInstructionConstants.ADD_PAYMENT_LIST_INSTRUCTION_SUCCESS })
                dispatch(getPaymentLI())
            } else {
                dispatch({ type: paymentListInstructionConstants.ADD_PAYMENT_LIST_INSTRUCTION_FAILURE })
            }
        } catch (e) {
            console.log(e)
        } 
    }

}

export const updatePayloadLI = (id, paymentLI) => async (dispatch) => {
    try {
        const { data } = await updatedPaymentLI(id, paymentLI)
        dispatch({
            type: paymentListInstructionConstants.UPDATE_PAYMENT_LIST_INSTRUCTION_SUCCESS, payload: data
        })
        dispatch(getPaymentLI())
    } catch (e) {
        console.log(e)
    }
}
export const deletePayloadLI = (id) => async (dispatch) => {
    try {
        await deletedPaymentLI(id)
        dispatch({ type: paymentListInstructionConstants.DELETE_PAYMENT_LIST_INSTRUCTION_SUCCESS, payload: id })
        dispatch(getPaymentLI())
    } catch (e) {
        console.log(e)
    }
}