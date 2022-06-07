
import { graniteTilesConstants } from './../../actions/constants';

const initialState = {
    graniteTiles: [],
    view: 'list'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case graniteTilesConstants.DELETE_GRANITE_TILES_SUCCESS:
            return state.graniteTiles.filter((graniteTiles) => graniteTiles._id !== action.payload)
        case graniteTilesConstants.UPDATE_GRANITE_TILES_SUCCESS:
            return state.graniteTiles.map((graniteTiles) => graniteTiles._id === action.payload._id ? action.payload : graniteTiles)


        case graniteTilesConstants.GET_GRANITE_TILES_SUCCESS:
            state = {
                ...state,
                graniteTiles: action.payload.graniteTiles,

            }
            break
        case graniteTilesConstants.SET_VIEW:
            state = {
                ...state,
                view: action.payload
            }
            break;
    }
    return state
}

export const setFileView = (payload) => ({ type: graniteTilesConstants.SET_VIEW, payload })
