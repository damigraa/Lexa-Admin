import { mainImageConstants } from './../../actions/constants';



const initialState = {
    mainImage: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case mainImageConstants.DELETE_MAIN_IMAGE_SUCCESS:
            return state.mainImage.filter((mainImage) => mainImage._id !== action.payload)
        case mainImageConstants.UPDATE_MAIN_IMAGE_SUCCESS:
            return state.mainImage.map((mainImage) => mainImage._id === action.payload._id ? action.payload : mainImage)

        case mainImageConstants.GET_MAIN_IMAGE_SUCCESS:
            state = {
                ...state,
                mainImage: action.payload.mainImage
            }
            break
    }
    return state
}