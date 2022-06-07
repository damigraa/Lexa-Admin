
import axios from './../../helpers/axios';


export const updatedComeToUs = (id, updateComeToUs) => axios.patch(`/comeToUs/updateComeToUs/${id}`, updateComeToUs)
export const deletedComeToUs = (id) => axios.delete(`/comeToUs/deleteComeToUs/${id}`);
