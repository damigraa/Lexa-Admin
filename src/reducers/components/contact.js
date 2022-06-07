import { contactConstants } from '../../actions/constants';



const initialState = {
    contact: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case contactConstants.DELETE_CONTACT_SUCCESS:
            return state.contact.filter((contact) => contact._id !== action.payload)
        case contactConstants.UPDATE_CONTACT_SUCCESS:
            return state.contact.map((contact) => contact._id === action.payload._id ? action.payload : contact)
        
    
            case contactConstants.GET_CONTACT_SUCCESS:
            state = {
                ...state,
                contact: action.payload.contact
            }
            break
    }
    return state
}