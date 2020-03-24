import axios from 'axios'
import { AUTH_USER, AUTH_ERROR, FETCH_CONTENT, FETCH_ERROR } from './types'

    axios.defaults.headers.common["token"] = localStorage.getItem("token")
    axios.defaults.headers.post["Content-Type"] = "application/json"

export const signin = (formProps, callback) => async (dispatch)=> {
    try {
        const res = await axios.post('http://localhost:5600/api/signin', formProps)
        console.log(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data))
        localStorage.setItem("token",res.data.token)
        dispatch({
            type: AUTH_USER,
            payload:res.data
        })
        callback()
    } catch (e) {
        dispatch({
            type: AUTH_ERROR,
            payload:e.response.data
        })
    }
}
export const fetch = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5600/api/blog')
        dispatch({
            type: FETCH_CONTENT,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type: FETCH_ERROR,
            payload:error.response.data
        })
    }
    
}
export const signup = (formPros, callback) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:5600/api/signup", formPros);
        localStorage.setItem("user", JSON.stringify(res.data))
        localStorage.setItem("token", JSON.stringify(res.data.token));
        dispatch({
            type: AUTH_USER,
            payload:res.data
        })
        callback()
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload:error.response.data
        })
    }
}
export const signout = () => dispatch=> {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    dispatch({
        type: AUTH_USER,
        payload:null
    })
}

