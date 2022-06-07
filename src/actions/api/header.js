
import axios from './../../helpers/axios';


export const updatedHeader = (id, updateHeader) => axios.patch(`/header/updateHeader/${id}`, updateHeader)
export const deletedHeader = (id) => axios.delete(`/header/deleteHeader/${id}`)
