
import axios from '../../helpers/axios';


export const updatedPaymentLI = (id, updatePaymentLI) => axios.patch(`/paymentLI/update/${id}`, updatePaymentLI)
export const deletedPaymentLI = (id) => axios.delete(`/paymentLI/delete/${id}`)
