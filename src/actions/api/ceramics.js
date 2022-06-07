
import axios from '../../helpers/axios';


export const updatedCeramics = (id, updateCeramics) => axios.patch(`/ceramics/update/${id}`, updateCeramics)
export const deletedCeramics = (id) => axios.delete(`/ceramics/delete/${id}`)
