import {
  CATCH_ERROR,
  GET_APPROVALS,
  ADD_APPROVALS,
  DELETE_APPROVALS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_APPROVALS:
      return {
        ...state,
        approvals: action.payload
      };
    case ADD_APPROVALS:
      return {
        ...state,
        approvals: action.payload
      };
    case DELETE_APPROVALS:
      return {
        ...state,
        approvals: state.approvals.filter(
          approval => approval._id !== action.payload
        )
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
