import { userConstants } from "./constants";
import axios from "../helpers/axios";
import { setUser } from "../reducers/user.reducer";
import swal from 'sweetalert';


export const signup = (user) => {

    return async (dispatch) => {
        try {
            dispatch({ type: userConstants.USER_REGISTER_REQUEST });
            const res = await axios.post("/admin/signup", {
                ...user
            });
            if (res.status === 201) {
                swal({
                    title: "Успешно отправено",
                    text: "Оператор свяжится с вами в ближайшее время",
                    icon: "success",
                });
                const { message } = res.data;
                dispatch({
                    type: userConstants.USER_REGISTER_SUCCESS,
                    payload: { message }
                });

            } else {
                dispatch({
                    type: userConstants.USER_REGISTER_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export const getUsers = (sort) => {
    return async (dispatch) => {
        try {
            dispatch({ type: userConstants.GET_ALL_USERS_REQUEST })
            let url = '/admin/getUsers'
            if (sort) {
                url = `/admin/getUsers?sort=${sort}`
            }
            const res = await axios.get(url)
            if (res.status === 200) {
                const { users } = res.data;
                dispatch({
                    type: userConstants.GET_ALL_USERS_SUCCESS,
                    payload: { users }
                })
            } else {
                dispatch({ type: userConstants.GET_ALL_USERS_FAILURE })
            }
        } catch (error) {
            console.log(error)
        }

    }
}
export const searchUser = (search) => {
    return async dispatch => {
        try {
            const response = await axios.get(`/admin/getUsers/search?search=${search}`)
            dispatch(setUser(response.data))
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}