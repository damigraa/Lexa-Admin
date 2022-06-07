import { weWorkOnlineConstants } from "../../actions/constants"


const initialState = {
    weWorkOnline: [],
}


export default (state = initialState, action) => {
    switch (action.type) {
        case weWorkOnlineConstants.DELETE_WE_WORK_ONLINE_SUCCESS:
            return state.weWorkOnline.filter((weWorkOnline) => weWorkOnline._id !== action.payload)
        case weWorkOnlineConstants.UPDATE_WE_WORK_ONLINE_SUCCESS:
            return state.weWorkOnline.map((weWorkOnline) => weWorkOnline._id === action.payload._id ? action.payload : weWorkOnline)
        
        case weWorkOnlineConstants.GET_WE_WORK_ONLINE_SUCCESS:
            state = {
                ...state,
                weWorkOnline: action.payload.weWorkOnline,
            }
            break

    }
    return state
}