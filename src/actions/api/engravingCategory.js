import axios from '../../helpers/axios';

export const updatedEngravingCategory = (id, updateEngravingCategory) => axios.patch(`/engravingCategory/update/${id}`, updateEngravingCategory)
export const deletedEngravingCategory = (id) => axios.delete(`/engravingCategory/delete/${id}`)
