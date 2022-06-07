import { engravingLayoutConstants } from "../../actions/constants"


const initialState = {
    engravingLayout: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case engravingLayoutConstants.DELETE_ENGRAVING_LAYOUT_SUCCESS:
            return state.engravingLayout.filter((engravingLayout) => engravingLayout._id !== action.payload)
        case engravingLayoutConstants.UPDATE_ENGRAVING_LAYOUT_SUCCESS:
            return state.engravingLayout.map((engravingLayout) => engravingLayout._id === action.payload._id ? action.payload : engravingLayout)
        case engravingLayoutConstants.GET_ENGRAVING_LAYOUT_SUCCESS:
            state = {
                ...state,
                engravingLayout: action.payload.engravingLayout,
            }
            break
        case engravingLayoutConstants.GET_ENGRAVING_LAYOUT_BY_SLUG_SUCCESS:
            state = {
                ...state,
                engravingLayout: action.payload.engravingLayout,
            };
            break;
    }
    return state
}