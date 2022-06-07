
import axios from '../../helpers/axios';


export const updatedFooter = (id, updateFooter) => axios.patch(`/footer/update/${id}`, updateFooter)
export const deletedFooter = (id) => axios.delete(`/footer/delete/${id}`)
