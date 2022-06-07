// import axios from "../../helpers/axios"
// import { paymentConstants } from "../constants"

// export const getPayment = () => {
//     return async (dispatch) => {
//         try {
//             dispatch({ type: paymentConstants.GET_PAYMENT_REQUEST })
//             const res = await axios.get("payment/get")
//             if (res.status === 200) {
//                 const { payment } = res.data
//                 dispatch({
//                     type: paymentConstants.GET_PAYMENT_SUCCESS,
//                     payload: { payment }
//                 })
//             } else {
//                 dispatch({ type: paymentConstants.GET_PAYMENT_FAILURE })
//             }
//         } catch (e) {
//             console.log(e)
//         }
//     }
// }

// export const addPayment = (form) => {
//     return async (dispatch) => {
//         try {
//             dispatch({ type: paymentConstants.ADD_PAYMENT_REQUEST })
//             const res = await axios.post("payment/create", form)
//             if (res.status === 201) {
//                 dispatch({ type: paymentConstants.ADD_PAYMENT_SUCCESS })
//                 dispatch(getPayment())
//             } else {
//                 dispatch({ type: paymentConstants.ADD_PAYMENT_FAILURE })
//             }
//         } catch (e) {
//             console.log(e)
//         }
//     }
// }

// export const updatePayment = (payload) => {
//     return async (dispatch) => {
//         try {
//             dispatch({ type: paymentConstants.UPDATE_PAYMENT_REQUEST })
//             const res = await axios.post("payment/update", payload)
//             if (res.status === 200) {
//                 dispatch({ type: paymentConstants.UPDATE_PAYMENT_SUCCESS })
//                 dispatch(getPayment())
//             } else {
//                 dispatch({ type: paymentConstants.UPDATE_PAYMENT_FAILURE })
//             }
//         } catch (e) {
//             console.log(e)
//         }
//     }
// }

// export const deletePayment = (payload) => {
//     return async (dispatch) => {
//         try {
//             const res = await axios.delete('payment/deletePayment', {
//                 data: { payload },
//             });
//             dispatch({ type: paymentConstants.DELETE_PAYMENT_REQUEST });
//             if (res.status === 202) {
//                 dispatch({ type: paymentConstants.DELETE_PAYMENT_SUCCESS });
//                 dispatch(getPayment());
//             } else {
//                 const { error } = res.data;
//                 dispatch({
//                     type: paymentConstants.DELETE_PAYMENT_FAILURE,
//                     payload: {
//                         error,
//                     },
//                 });
//             }
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }