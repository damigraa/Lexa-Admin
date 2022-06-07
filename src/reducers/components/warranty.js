import { warrantyConstants } from '../../actions/constants';



const initialState = {
    warranty: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case warrantyConstants.DELETE_WARRANTY_SUCCESS:
            return state.warranty.filter((warranty) => warranty._id !== action.payload)
        case warrantyConstants.UPDATE_WARRANTY_SUCCESS:
            return state.warranty.map((warranty) => warranty._id === action.payload ? action.payload : warranty)
        case warrantyConstants.GET_WARRANTY_SUCCESS:
            state = {
                ...state,
                warranty: action.payload.warranty
            }
            break
    }
    return state
}