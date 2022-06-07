
import axios from '../../helpers/axios';


export const updatedCatalogTitle = (id, updateCatalogTitle) => axios.patch(`/catalogTitle/update/${id}`, updateCatalogTitle)
export const deletedCatalogTitle = (id) => axios.delete(`/catalogTitle/delete/${id}`)
 