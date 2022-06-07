
import axios from '../../helpers/axios';


export const updatedManufacture = (id, updateManufacture) => axios.patch(`/manufacture/update/${id}`, updateManufacture)
export const deletedManufacture = (id) => axios.delete(`/manufacture/delete/${id}`)
 