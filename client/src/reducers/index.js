import { combineReducers } from "redux"
import authReducer from "./authReducer"
import contentReducer from './contentReducer'
import { reducer as formReducer } from "redux-form"
import blogReducer from "./blogReducer"

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    content: contentReducer,
    blog:blogReducer
})