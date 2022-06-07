
import axios from '../../helpers/axios';


export const updatedCostDelivery = (id, updateCostDelivery) => axios.patch(`/costDelivery/update/${id}`, updateCostDelivery)
export const deletedCostDelivery = (id) => axios.delete(`/costDelivery/delete/${id}`)
