import axios from '../../helpers/axios';

export const updatedEngravingLayout = (id, updateEngravingLayout) => axios.patch(`/engravingCategory/update/${id}`, updateEngravingLayout)
export const deletedEngravingLayout = (id) => axios.delete(`/engravingCategory/delete/${id}`)
