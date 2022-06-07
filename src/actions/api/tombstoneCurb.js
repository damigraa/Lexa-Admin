
import axios from '../../helpers/axios';


export const updatedTombstoneCurb = (id, updateTombstoneCurb) => axios.patch(`/tombstoneCurb/update/${id}`, updateTombstoneCurb)
export const deletedTombstoneCurb = (id) => axios.delete(`/tombstoneCurb/delete/${id}`)
