import { productConstants } from "../actions/constants";

const initialState = {
    products: [],
    view: 'list'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case productConstants.DELETE_PRODUCT_BY_ID_SUCCESS:
            return state.products.filter((products) => products._id !== action.payload)
        case productConstants.UPDATE_PRODUCT_BY_ID_SUCCESS:
            return state.products.map((products) => products._id === action.payload._id ? action.payload : products)
        case productConstants.GET_ALL_PRODUCTS_SUCCESS:
            state = {
                ...state,
                products: action.payload.products
            }
            break;
        case productConstants.SET_VIEW:
            state = { 
                ...state,
                view: action.payload
            }
            break;
    }

    return state;
}

export const setFileView = (payload) => ({ type: productConstants.SET_VIEW, payload })
export const setProduct = (products) => ({ type: productConstants.GET_ALL_PRODUCTS_SUCCESS, payload: products })