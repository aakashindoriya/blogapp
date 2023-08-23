import { DELETEBLOG, EDITBLOG, GETBLOGS, LOADING, ERROR, CREATEBLOG, MYBLOG } from "../actionTypes/blog.actionTypes"

const init = {
    isLoading: false,
    isError: false,
    blogs: [],
    myBlogs: []
}


export const blogReducer = (state = init, { type, payload }) => {
    switch (type) {
        case GETBLOGS: return {
            ...state,
            isLoading: false,
            isError: false,
            blogs: [...payload]
        }
        case DELETEBLOG: return {
            ...state,
            isLoading: false,
            isError: false,
            blogs: [...state.blogs.filter((el) => el._id != payload.id)],
        }
        case EDITBLOG: return {
            ...state,
            myBlogs: [...state.myBlogs.map((el) => el._id == payload._id ? { ...payload } : el)],
            isLoading: false,
            isError: false,
        }
        case CREATEBLOG: return {
            ...state,
            blogs: [payload, ...state.blogs],
            myBlogs: [payload, ...state.myBlogs],
            isLoading: false,
            isError: false,
        }
        case MYBLOG: return {
            ...state,
            myBlogs: [...payload],
            isLoading: false,
            isError: false,
        }
        case LOADING: return { ...state, isLoading: true, isError: false }
        case ERROR: return { ...state, isLoading: false, isError: true }
        default: return state
    }
}