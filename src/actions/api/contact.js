
import axios from '../../helpers/axios';


export const updatedContact = (id, updatedContact) => axios.patch(`/contact/update/${id}`, updatedContact)
export const deletedContact = (id) => axios.delete(`/contact/delete/${id}`);
 