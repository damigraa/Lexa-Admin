
import axios from '../../helpers/axios';


export const updatedBlog = (id, updateBlog) => axios.patch(`/blog/update/${id}`, updateBlog)
export const deletedBlog = (id) => axios.delete(`/blog/delete/${id}`)
