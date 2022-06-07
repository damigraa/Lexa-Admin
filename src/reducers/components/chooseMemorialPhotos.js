import { chooseMemorialPhotosConstants } from "../../actions/constants"


const initialState = {
    chooseMemorialPhotos: [],
}


export default (state = initialState, action) => {
    switch (action.type) {
        case chooseMemorialPhotosConstants.GET_CHOOSE_MEMORIAL_PHOTOS_SUCCESS:
            state = {
                ...state,
                chooseMemorialPhotos: action.payload.chooseMemorialPhotos,
            }
            break

    }
    return state
}