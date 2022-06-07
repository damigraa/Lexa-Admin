import axios from "../helpers/axios";
import { galleryImageConstants } from "./constants";

// new action
const getGallery = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: galleryImageConstants.GET_ALL_GALLERY_REQUEST });
      const res = await axios.get("gallery/getGallery");
      if (res.status === 200) {
        const { galleries } = res.data;
        dispatch({
          type: galleryImageConstants.GET_ALL_GALLERY_SUCCESS,
          payload: { galleries },
        });
      } else {
        dispatch({ type: galleryImageConstants.GET_ALL_GALLERY_FAILURE });
      }
    } catch (error) {
      console.log(error); 
    }
  };
};

// modified actrion
export const addGallery = (form) => {
  return async (dispatch) => {
    try {
      dispatch({ type: galleryImageConstants.CREATE_GALLERY_REQUEST });
      const res = await axios.post("gallery/create", form);
      if (res.status === 201) {
        dispatch({ type: galleryImageConstants.CREATE_GALLERY_SUCCESS });
        dispatch(getGallery());
      } else {
        dispatch({ type: galleryImageConstants.CREATE_GALLERY_FAILURE });
      }
    } catch (error) {
      console.log(error);
    } 
  };
};

export const deleteGalleryById = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: galleryImageConstants.DELETE_GALLERY_BY_ID_REQUEST });
      const res = await axios.delete("gallery/deleteGalleryById", {
        data: { payload },
      });
      if (res.status === 202) {
        dispatch({ type: galleryImageConstants.DELETE_GALLERY_BY_ID_SUCCESS });
        dispatch(getGallery());
      } else {
        const { error } = res.data;
        dispatch({
          type: galleryImageConstants.DELETE_GALLERY_BY_ID_FAILURE,
          payload: {
            error,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
