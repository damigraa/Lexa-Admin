
import axios from '../../helpers/axios';


export const updatedPromotion = (id, updatedPromotion) => axios.patch(`/promotions/update/${id}`, updatedPromotion)
