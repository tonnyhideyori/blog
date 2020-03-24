import { FETCH_CONTENT, FETCH_ERROR } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CONTENT:
      return  action.payload ;
    case FETCH_ERROR:
      return  action.payload;
    default:
      return state;
  }
}
