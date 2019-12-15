import { ADD_STATUS, DELETE_STATUS, GET_STATUS, CATCH_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_STATUS:
      return {
        ...state,
        status: action.payload
      };
    case ADD_STATUS:
      return {
        ...state,
        status: action.payload
      };
    case DELETE_STATUS:
      return {
        ...state,
        status: state.status.filter(statu => statu._id !== action.payload)
      };
    case CATCH_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
