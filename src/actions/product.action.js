import axios from "../helpers/axios";
import { setProduct } from "../reducers/product.reducer";
import { deletedProduct, updatedProduct } from "./api/product";
import { productConstants } from "./constants";

// new action
export const getProducts = (sort) => {
  return async (dispatch) => {
    try {
      dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
      let url = 'product/getProducts'
      if (sort) {
        url = `product/getProducts?sort=${sort}`
      }
      const res = await axios.get(url);
      if (res.status === 200) {
        const { products } = res.data;
        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
          payload: { products },
        });
      } else {
        dispatch({ type: productConstants.GET_ALL_PRODUCTS_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// modified actrion
export const addProduct = (form) => {
  return async (dispatch) => {
    try {
      dispatch({ type: productConstants.ADD_PRODUCT_REQUEST });
      const res = await axios.post('product/create', form);
      if (res.status === 201) {
        dispatch({ type: productConstants.ADD_PRODUCT_SUCCESS });
        dispatch(getProducts());
      } else {
        dispatch({ type: productConstants.ADD_PRODUCT_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};


export const deleteProductById = (id) => async (dispatch) => {
  try {
    await deletedProduct(id);
    dispatch({ type: productConstants.DELETE_PRODUCT_BY_ID_SUCCESS, payload: id });
    dispatch(getProducts())
  } catch (error) {
    console.log(error);
  }
}
export const updateProductById = (id, product) => async (dispatch) => {
  try {
    const { data } = await updatedProduct(id, product)
    dispatch({
      type: productConstants.UPDATE_PRODUCT_BY_ID_SUCCESS, payload: data
    })
    dispatch(getProducts())
  } catch (error) {
    console.log(error);
  }
}


export const searchProducts = (search) => {
  return async dispatch => {
    try {
      const response = await axios.get(`product/getProducts/search?search=${search}`)
      dispatch(setProduct(response.data))
    } catch (e) {
      alert(e?.response?.data?.message)
    }
  }
}


