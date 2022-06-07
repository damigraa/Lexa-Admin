import { graniteMaterialConstants } from "../../actions/constants"


const initialState = {
    graniteMaterial: [],
}


export default (state = initialState, action) => {
    switch (action.type) {
        case graniteMaterialConstants.DELETE_GRANITE_MATERIAL_SUCCESS:
            return state.graniteMaterial.filter((graniteMaterial) => graniteMaterial._id !== action.payload)
        case graniteMaterialConstants.UPDATE_GRANITE_MATERIAL_SUCCESS:
            return state.graniteMaterial.map((graniteMaterial) => graniteMaterial._id === action.payload._id ? action.payload : graniteMaterial)
        
        case graniteMaterialConstants.GET_GRANITE_MATERIAL_SUCCESS:
            state = {
                ...state,
                graniteMaterial: action.payload.graniteMaterial,
            }
            break

    }
    return state
}