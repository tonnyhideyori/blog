import axios from "axios";
import {
  AUTH_USER,
  AUTH_ERROR,
  FETCH_CONTENT,
  FETCH_ERROR,
  BLOG_POST
} from "./types";

axios.defaults.headers.common["Token"] = localStorage.getItem("token");
axios.defaults.headers.post["Content-Type"] = "application/json";

export const signin = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post(
      "/api/signin",
      formProps
    );
    localStorage.setItem("user", JSON.stringify(res.data));
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: AUTH_USER,
      payload: res.data
    });
    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: e.response.data
    });
  }
};
export const fetch = () => async dispatch => {
  try {
    const res = await axios.get("/api/allblog");
    dispatch({
      type: FETCH_CONTENT,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      payload: error.response.data
    });
  }
};
export const signup = (formPros, callback) => async dispatch => {
  try {
    const res = await axios.post("/api/signup", formPros);
    localStorage.setItem("user", JSON.stringify(res.data));
    localStorage.setItem("token", JSON.stringify(res.data.token));
    dispatch({
      type: AUTH_USER,
      payload: res.data
    });
    callback();
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response.data
    });
  }
};
export const signout = () => dispatch => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  dispatch({
    type: AUTH_USER,
    payload: null
  });
};
export const profile = () => async dispatch => {
  try {
    const res = await axios.get("/api/blog");
    dispatch({
      type: FETCH_CONTENT,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      payload: error.response.data
    });
  }
};
export const blog = (formProps, file, callback) => async () => {
  if (file) {
    const preUrl = await axios.get("/api/upload");
    await axios.put(preUrl.data.url, file, { headers: { 'Content-Type': file.type } })
  
    await axios.post("/api/post", {
      ...formProps,
      imageUrl: preUrl.data.key
    });
  } else {
    await axios.post("/api/post", {
      ...formProps,
     
    });
  }
  callback();
};
