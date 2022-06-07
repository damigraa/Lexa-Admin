import { costDeliveryConstants } from "../../actions/constants"


const initialState = {
    costDelivery: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case costDeliveryConstants.DELETE_COST_DELIVERY_SUCCESS:
            return state.costDelivery.filter((costDelivery) => costDelivery._id !== action.payload)
        case costDeliveryConstants.UPDATE_COST_DELIVERY_SUCCESS:
            return state.costDelivery.map((costDelivery) => costDelivery._id === action.payload._id ? action.payload : costDelivery)


        case costDeliveryConstants.GET_COST_DELIVERY_SUCCESS:
            state = {
                ...state,
                costDelivery: action.payload.costDelivery,

            }
            break
    }
    return state
}