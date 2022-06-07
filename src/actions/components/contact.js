import axios from "../../helpers/axios"
import { contactConstants } from '../constants';
import { deletedContact, updatedContact } from './../api/contact';


export const getContacts = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: contactConstants.GET_CONTACT_REQUEST })
            const res = await axios.get("contact/get")
            if (res.status === 200) {
                const { contact } = res.data
                dispatch({
                    type: contactConstants.GET_CONTACT_SUCCESS,
                    payload: {
                        contact
                    }
                })
            } else {
                dispatch({ type: contactConstants.GET_CONTACT_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addContact = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: contactConstants.ADD_CONTACT_REQUEST })
            const res = await axios.post("contact/create", form)
            if (res.status === 201) {
                dispatch({ type: contactConstants.ADD_CONTACT_SUCCESS })
                dispatch(getContacts())
            } else {
                dispatch({ type: contactConstants.ADD_CONTACT_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const updateContact = (id, post) => async (dispatch) => {
    try {
        const { data } = await updatedContact(id, post)
        dispatch({
            type: contactConstants.UPDATE_CONTACT_SUCCESS, payload: data
        })
        dispatch(getContacts())
    } catch (error) {
        console.log(error);
    }
}

export const deleteContact = (id) => async (dispatch) => {
    try {
        await deletedContact(id);

        dispatch({ type: contactConstants.DELETE_CONTACT_SUCCESS, payload: id });
        dispatch(getContacts())
    } catch (error) {
        console.log(error);
    }
}
