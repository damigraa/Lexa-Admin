import { blogConstants } from "../../actions/constants"


const initialState = {
    blog: [],
    view: 'list'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case blogConstants.DELETE_BLOG_SUCCESS:
            return state.blog.filter((blog) => blog._id !== action.payload)
        case blogConstants.UPDATE_BLOG_SUCCESS:
            return state.blog.map((blog) => blog._id === action.payload._id ? action.payload : blog)


        case blogConstants.GET_BLOG_SUCCESS:
            state = {
                ...state,
                blog: action.payload.blog,

            }
            break
        case blogConstants.SET_VIEW:
            state = {
                ...state,
                view: action.payload
            }
            break;
    }
    return state
}

export const setFileView = (payload) => ({ type: blogConstants.SET_VIEW, payload })
