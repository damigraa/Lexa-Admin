
import axios from '../../helpers/axios';


export const updatedEngraving = (id, updateEngraving) => axios.patch(`/engraving/update/${id}`, updateEngraving)
export const deletedEngraving = (id) => axios.delete(`/engraving/delete/${id}`)
