import { galleryImageConstants } from "../actions/constants"

const initialState = {
    galleries: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case galleryImageConstants.GET_ALL_GALLERY_SUCCESS:
            state = {
                ...state,
                galleries: action.payload.galleries
            }
            break; 
        case galleryImageConstants.DELETE_GALLERY_BY_ID_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break
        case galleryImageConstants.DELETE_GALLERY_BY_ID_SUCCESS:
            state = {
                ...state,
                loading: false,
            }
            break
        case galleryImageConstants.DELETE_GALLERY_BY_ID_FAILURE:
            state = {
                ...state,
                loading: false,
            }
            break
    }

    return state;
}