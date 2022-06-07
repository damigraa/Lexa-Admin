import {
  categoryConstansts,
  productConstants,
  orderConstants,
  galleryImageConstants,
  applicationConstants
} from "./constants";
import axios from "../helpers/axios";

export const getInitialData = () => {
  return async (dispatch) => {
    const res = await axios.post(`/initialData`);
    if (res.status === 200) {
      const { categories, products, orders, galleries, applications } = res.data;
      dispatch({
        type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories },
      });
      dispatch({
        type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
        payload: { products },
      });
      dispatch({
        type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
        payload: { orders },
      });
      dispatch({
        type: galleryImageConstants.GET_ALL_GALLERY_SUCCESS,
        payload: { galleries }
      })
      // dispatch({
      //   type: applicationConstants.GET_ALL_APPLICATION_SUCCESS,
      //   payload: { applications }
      // })

    }
  };
};
