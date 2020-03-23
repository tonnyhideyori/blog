import axios from 'axios'
import { AUTH_USER,AUTH_ERROR } from './types'

export const signin = (formProps, callback) => async (dispatch)=> {
    try {
        const res = await axios.post('http://localhost:5600/api/signin', formProps)
        console.log(res.data.user);
        localStorage.setItem("user",JSON.stringify(res.data))
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
export const signup = (formPros, callback) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:5600/api/signup", formPros);
        localStorage.setItem("user", JSON.stringify(res.data))
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
    dispatch({
        type: AUTH_USER,
        payload:null
    })
}

