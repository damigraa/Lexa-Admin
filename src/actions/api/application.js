
import axios from '../../helpers/axios';


export const deletedApplication = (id) => axios.delete(`/application/delete/${id}`)
