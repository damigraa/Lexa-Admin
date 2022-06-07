import { engravingConstants } from "../../actions/constants"


const initialState = {
    engraving: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case engravingConstants.DELETE_ENGRAVING_SUCCESS:
            return state.engraving.filter((engraving) => engraving._id !== action.payload)
        case engravingConstants.UPDATE_ENGRAVING_SUCCESS:
            return state.engraving.map((engraving) => engraving._id === action.payload._id ? action.payload : engraving)
        case engravingConstants.GET_ENGRAVING_SUCCESS:
            state = {
                ...state,
                engraving: action.payload.engraving,

            }
            break
    }
    return state
}