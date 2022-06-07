
import axios from '../../helpers/axios';


export const updatedWeWorkOnline = (id, updateWeWorkOnline) => axios.patch(`/weWorkOnline/update/${id}`, updateWeWorkOnline)
export const deletedWeWorkOnline = (id) => axios.delete(`/weWorkOnline/delete/${id}`)
 