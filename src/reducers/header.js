import { headerConstants } from "../actions/constants"


const initialState = {
    header: [],
    clickDisable: false,
    loading: false,
    status: ""
}


export default (state = initialState, action) => {
    switch (action.type) {
        case headerConstants.DELETE_HEADER_SUCCESS:
            return state.header.filter((header) => header._id !== action.payload)
        case headerConstants.UPDATE_HEADER_SUCCESS:
            return state.header.map((header) => header._id === action.payload._id ? action.payload : header)
        case headerConstants.GET_HEADER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break
        case headerConstants.GET_HEADER_SUCCESS:
            state = {
                ...state,
                header: action.payload.header,
                loading: false

            }
            break
        case headerConstants.GET_HEADER_FAILURE:
            state = {
                ...state,
                loading: false
            }
            break
        case headerConstants.SET_STATUS: {
            state = {
                ...state,
                status: action.status
            }

        }
            break
    }
    return state
}

export const setStatus = (status) => ({ type: headerConstants.SET_STATUS, status });
// export const setHeader = (headers) => ({ type: headerConstants.GET_HEADER_SUCCESS, payload: headers })