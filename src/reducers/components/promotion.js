import { promotionConstants } from "../../actions/constants"


const initialState = {
    promotion: [],
}


export default (state = initialState, action) => {
    switch (action.type) {
        case promotionConstants.DELETE_PROMOTION_SUCCESS:
            return state.promotion.filter((promotion) => promotion._id !== action.payload)
        case promotionConstants.UPDATE_PROMOTION_SUCCESS:
            return state.promotion.map((promotion) => promotion._id === action.payload._id ? action.payload : promotion)

        case promotionConstants.GET_PROMOTION_SUCCESS:
            state = {
                ...state,
                promotion: action.payload.promotion,
            }
            break

    }
    return state
}