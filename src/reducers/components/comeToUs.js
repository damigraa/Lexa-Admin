import { comeToUsConstants } from "../../actions/constants"



const initialState = {
    comeToUs: []
}
 
export default (state = initialState, action) => {
    switch (action.type) {
        case comeToUsConstants.DELETE_COME_TO_US_SUCCESS:
            return state.filter((comeToUs) => comeToUs._id !== action.payload)
        case comeToUsConstants.UPDATE_COME_TO_US_SUCCESS:
            return state.map((comeToUs) => comeToUs._id === action.payload._id ? action.payload : comeToUs)
        case comeToUsConstants.GET_COME_TO_US_SUCCESS:
            state = {
                ...state,
                comeToUs: action.payload.comeToUs
            }
            break
    }
    return state
}