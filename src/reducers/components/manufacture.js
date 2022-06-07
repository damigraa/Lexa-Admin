import { manufactureConstants } from "../../actions/constants"


const initialState = {
    manufacture: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case manufactureConstants.DELETE_MANUFACTURE_SUCCESS:
            return state.manufacture.filter((manufacture) => manufacture._id !== action.payload)
        case manufactureConstants.UPDATE_MANUFACTURE_SUCCESS:
            return state.manufacture.map((manufacture) => manufacture._id === action.payload._id ? action.payload : manufacture)


        case manufactureConstants.GET_MANUFACTURE_SUCCESS:
            state = {
                ...state,
                manufacture: action.payload.manufacture,

            }
            break
    }
    return state
}