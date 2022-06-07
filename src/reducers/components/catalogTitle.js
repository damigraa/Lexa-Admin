import { catalogTitleConstants } from "../../actions/constants"


const initialState = {
    catalogTitle: [],
} 

export default (state = initialState, action) => {
    switch (action.type) {
        case catalogTitleConstants.DELETE_CATALOG_TITLE_SUCCESS:
            return state.catalogTitle.filter((catalogTitle) => catalogTitle._id !== action.payload)
        case catalogTitleConstants.UPDATE_CATALOG_TITLE_SUCCESS:
            return state.catalogTitle.map((catalogTitle) => catalogTitle._id === action.payload._id ? action.payload : catalogTitle)
        case catalogTitleConstants.GET_CATALOG_TITLE_SUCCESS:
            state = {
                ...state,
                catalogTitle: action.payload.catalogTitle,
            }
            break
    }
    return state
}