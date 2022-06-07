
import axios from '../../helpers/axios';


export const updatedGraniteTiles = (id, updateGraniteTiles) => axios.patch(`/graniteTiles/update/${id}`, updateGraniteTiles)
export const deletedGraniteTiles = (id) => axios.delete(`/graniteTiles/delete/${id}`)
