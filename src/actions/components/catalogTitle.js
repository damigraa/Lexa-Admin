import axios from "../../helpers/axios"
import { catalogTitleConstants } from "../constants"
import { deletedCatalogTitle, updatedCatalogTitle } from '../api/catalogTitle';

export const getCatalogTitle = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: catalogTitleConstants.GET_CATALOG_TITLE_REQUEST })
            const res = await axios.get("catalogTitle/get")
            if (res.status === 200) {
                const { catalogTitle } = res.data
                dispatch({
                    type: catalogTitleConstants.GET_CATALOG_TITLE_SUCCESS,
                    payload: {
                        catalogTitle
                    }
                })
            } else {
                dispatch({ type: catalogTitleConstants.GET_CATALOG_TITLE_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addCatalogTitle = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: catalogTitleConstants.ADD_CATALOG_TITLE_REQUEST })
            const res = await axios.post("catalogTitle/create", form)
            if (res.status === 201) {
                dispatch({ type: catalogTitleConstants.ADD_CATALOG_TITLE_SUCCESS })
                dispatch(getCatalogTitle())
            } else {
                dispatch({ type: catalogTitleConstants.ADD_CATALOG_TITLE_FAILURE })
            }
        } catch (e) {
            console.log(e) 
        }
    }
}

export const updateCatalogTitle = (id, catalogTitle) => async (dispatch) => {
    try {
        const { data } = await updatedCatalogTitle(id, catalogTitle)
        dispatch({
            type: catalogTitleConstants.UPDATE_CATALOG_TITLE_SUCCESS, payload: data
        })
        dispatch(getCatalogTitle())
    } catch (error) {
        console.log(error);
    }
}

export const deleteCatalogTitle = (id) => async (dispatch) => {
    try {
        await deletedCatalogTitle(id);
        dispatch({ type: catalogTitleConstants.DELETE_CATALOG_TITLE_SUCCESS, payload: id });
        dispatch(getCatalogTitle())
    } catch (error) {
        console.log(error);
    }
}