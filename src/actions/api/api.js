
import axios from '../../helpers/axios';


export const updatedWarranty = (id, updateWarranty) => axios.patch(`/warranty/update/${id}`, updateWarranty)
export const deletedWarranty = (id) => axios.delete(`/warranty/delete/${id}`)
