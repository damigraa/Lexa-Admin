
import axios from '../../helpers/axios';


export const updatedMainImage = (id, updateMainImage) => axios.patch(`/mainImage/updateMainImage/${id}`, updateMainImage)
// export const deletedHeader = (id) => axios.delete(`/header/deleteHeader/${id}`)
