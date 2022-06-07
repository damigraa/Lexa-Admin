import { applicationConstants } from "../actions/constants";

const initialState = {
    applications: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case  applicationConstants.GET_ALL_APPLICATION_SUCCESS:
            state = {
                ...state,
                applications: action.payload.applications
            }
            break;
    }

    return state;
}

export const setApplication = (applications) => ({ type: applicationConstants.GET_ALL_APPLICATION_SUCCESS, payload: applications })
