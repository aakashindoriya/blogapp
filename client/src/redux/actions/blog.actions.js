import axios from "axios"
import { CREATEBLOG, DELETEBLOG, EDITBLOG, ERROR, GETBLOGS, LOADING, MYBLOG } from "../actionTypes/blog.actionTypes"



export const getBlogs = (creads) => async (dispatch) => {

    try {

        dispatch({ type: LOADING })
        const { data } = await axios.get(`${process.env.REACT_APP_BASEURL || "http://localhost:8080"}/blog?category=${creads.category}&page=${creads.page}&title=${creads.title}`)
        console.log(data)
        return dispatch({ type: GETBLOGS, payload: data })
    } catch (error) {
        dispatch({ type: ERROR })
    }
}
export const editBlog = (creads) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data } = await axios.patch(`${process.env.REACT_APP_BASEURL || "http://localhost:8080"}/blog/${creads.id}`, { ...creads }, {
            headers: {
                Authorization: JSON.parse(localStorage.getItem("auth")).token
            }
        })
        alert("blog updated")
        return dispatch({ type: EDITBLOG, payload: data })
    } catch (error) {
        dispatch({ type: ERROR })
    }
}
export const deleteBlog = (creads) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data } = await axios.delete(`${process.env.REACT_APP_BASEURL || "http://localhost:8080"}/blog/${creads.id}`, {
            headers: {
                Authorization: JSON.parse(localStorage.getItem("auth")).token
            }
        })
        return dispatch({ type: DELETEBLOG, payload: data })
    } catch (error) {
        dispatch({ type: ERROR })
    }
}

export const CreateBlog = (creads) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data } = await axios.post(`${process.env.REACT_APP_BASEURL || "http://localhost:8080"}/blog/`, { ...creads }, {
            headers: {
                Authorization: JSON.parse(localStorage.getItem("auth")).token
            }
        })
        alert("blog created successfully")
        dispatch({ type: CREATEBLOG, payload: data })
    } catch (error) {
        dispatch({ type: ERROR })
    }
}
export const getMyBlogs = () => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data } = await axios.get(`${process.env.REACT_APP_BASEURL || "http://localhost:8080"}/blog/myblogs`, {
            headers: {
                Authorization: JSON.parse(localStorage.getItem("auth")).token
            }
        })
        dispatch({ type: MYBLOG, payload: data })
    } catch (error) {
        dispatch({ type: ERROR })
    }
}