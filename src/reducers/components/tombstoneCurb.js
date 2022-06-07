import { tombstoneCurbConstants } from "../../actions/constants"


const initialState = {
    tombstoneCurb: [],
    view: 'list'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case tombstoneCurbConstants.DELETE_TOMBSTONE_CURB_SUCCESS:
            return state.tombstoneCurb.filter((tombstoneCurb) => tombstoneCurb._id !== action.payload)
        case tombstoneCurbConstants.UPDATE_TOMBSTONE_CURB_SUCCESS:
            return state.tombstoneCurb.map((tombstoneCurb) => tombstoneCurb._id === action.payload._id ? action.payload : tombstoneCurb)


        case tombstoneCurbConstants.GET_TOMBSTONE_CURB_SUCCESS:
            state = {
                ...state,
                tombstoneCurb: action.payload.tombstoneCurb,

            }
            break
        case tombstoneCurbConstants.SET_VIEW:
            state = {
                ...state,
                view: action.payload
            }
            break;
    }
    return state
}

export const setFileView = (payload) => ({ type: tombstoneCurbConstants.SET_VIEW, payload })
