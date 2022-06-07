import { ceramicsConstants } from "../../actions/constants"


const initialState = {
    ceramics: [],
    view: 'list'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ceramicsConstants.DELETE_CERAMICS_SUCCESS:
            return state.ceramics.filter((ceramics) => ceramics._id !== action.payload)
        case ceramicsConstants.UPDATE_CERAMICS_SUCCESS:
            return state.ceramics.map((ceramics) => ceramics._id === action.payload._id ? action.payload : ceramics)

 
        case ceramicsConstants.GET_CERAMICS_SUCCESS:
            state = {
                ...state,
                ceramics: action.payload.ceramics,

            }
            break
        case ceramicsConstants.SET_VIEW:
            state = {
                ...state,
                view: action.payload
            }
            break;
    }
    return state
}

export const setCeramics = (payload) => ({ type: ceramicsConstants.SET_VIEW, payload })
