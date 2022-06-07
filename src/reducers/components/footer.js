import { footerConstants } from "../../actions/constants"


const initialState = {
    footer: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case footerConstants.DELETE_FOOTER_SUCCESS:
            return state.footer.filter((footer) => footer._id !== action.payload)
        case footerConstants.UPDATE_FOOTER_SUCCESS:
            return state.footer.map((footer) => footer._id === action.payload._id ? action.payload : footer)
        case footerConstants.GET_FOOTER_SUCCESS:
            state = {
                ...state,
                footer: action.payload.footer,
            }
            break
    }
    return state
}