import { userConstants } from "../actions/constants"

const initState = {
    users: [],
    error: null,
    message: '',
    loading: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case userConstants.GET_ALL_USERS_SUCCESS:
            state = {
                ...state,    
                users: action.payload.users
            }
        case userConstants.USER_REGISTER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case userConstants.USER_REGISTER_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;
        case userConstants.USER_REGISTER_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
    }

    return state;
}


export const setUser = (users) => ({ type: userConstants.GET_ALL_USERS_SUCCESS, payload: users })