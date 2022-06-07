import { paymentListInstructionConstants } from "../../actions/constants"


const initialState = {
    paymentLI: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case paymentListInstructionConstants.DELETE_PAYMENT_LIST_INSTRUCTION_SUCCESS:
            return state.paymentLI.filter((paymentLI) => paymentLI._id !== action.payload)
        case paymentListInstructionConstants.UPDATE_PAYMENT_LIST_INSTRUCTION_SUCCESS:
            return state.paymentLI.map((paymentLI) => paymentLI._id === action.payload._id ? action.payload : paymentLI)


        case paymentListInstructionConstants.GET_PAYMENT_LIST_INSTRUCTION_SUCCESS:
            state = {
                ...state,
                paymentLI: action.payload.paymentLI,

            }
            break
    }
    return state
}