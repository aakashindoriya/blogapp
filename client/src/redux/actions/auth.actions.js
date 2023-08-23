import axios from "axios"
import { AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS } from "../actionTypes/auth.actionTypes"

export const SignUp = (data) => async (dispatch) => {
    try {
        dispatch({ type: AUTH_LOGIN_REQUEST })
        let res = await axios.post(`${process.env.REACT_APP_BASEURL || "http://localhost:8080"}/user/signup`, { ...data })
        return dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: AUTH_LOGIN_FAILURE })
    }
}

export const LogIn = (data) => async (dispatch) => {
    try {
        dispatch({ type: AUTH_LOGIN_REQUEST })
        let res = await axios.post(`${process.env.REACT_APP_BASEURL || "http://localhost:8080"}/user/login`, { ...data })
        return dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: AUTH_LOGIN_FAILURE })
    }
}