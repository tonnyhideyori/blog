import { BLOG_POST } from '../actions/types'

export default function (state = {}, actions) {
    switch (actions.type) {
        case BLOG_POST: return {
            ...state,
    blog:actions.payload}
    default: return state
    }
}