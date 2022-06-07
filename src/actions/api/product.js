
import axios from '../../helpers/axios';


export const updatedProduct = (id, updateProduct) => axios.patch(`/product/update/${id}`, updateProduct)
export const deletedProduct = (id) => axios.delete(`/product/delete/${id}`)
