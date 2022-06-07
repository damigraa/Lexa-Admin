
import axios from '../../helpers/axios';


export const updatedGraniteMaterial = (id, updateGraniteMaterial) => axios.patch(`/graniteMaterial/update/${id}`, updateGraniteMaterial)
export const deletedGraniteMaterial = (id) => axios.delete(`/graniteMaterial/delete/${id}`)
