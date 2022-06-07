import { engravingCategoryConstants } from "../../actions/constants"


const initialState = {
    engravingCategory: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case engravingCategoryConstants.DELETE_ENGRAVING_CATEGORY_SUCCESS:
            return state.engravingCategory.filter((engravingCategory) => engravingCategory._id !== action.payload)
        case engravingCategoryConstants.UPDATE_ENGRAVING_CATEGORY_SUCCESS:
            return state.engravingCategory.map((engravingCategory) => engravingCategory._id === action.payload._id ? action.payload : engravingCategory)
        case engravingCategoryConstants.GET_ENGRAVING_CATEGORY_SUCCESS:
            state = {
                ...state,
                engravingCategory: action.payload.engravingCategory,
            }
            break
    }
    return state
}