import React, { useReducer } from "react";
import axios from "axios";

import ApprovalsContext from "./approvalsContext";
import approvalsReducer from "./approvalsReducer";
import {
  ADD_APPROVALS,
  DELETE_APPROVALS,
  GET_APPROVALS,
  CATCH_ERROR
} from "../types";

const ApprovalsState = props => {
  const initialState = {
    name: "",
    date: "",
    approved: "",
    rejected: "",
    hours_worked: "",
    original_approvals: "",
    client: "",
    queryDate: Date()
  };
  const [state, dispatch] = useReducer(approvalsReducer, initialState);

  // Get Approvals
  const getApprovals = async () => {
    try {
      const res = await axios.get("/api/approvals");

      dispatch({ type: GET_APPROVALS, payload: res.data });
    } catch (err) {
      dispatch({
        type: CATCH_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Approvals
  const addApprovals = async approvals => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/approvals", approvals, config);

      dispatch({ type: ADD_APPROVALS, payload: res.data });
    } catch (err) {
      dispatch({
        type: CATCH_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete Approvals
  const deleteApprovals = async id => {
    try {
      await axios.delete(`/api/approvals/${id}`);
      dispatch({ type: DELETE_APPROVALS, payload: id });
    } catch (err) {
      dispatch({
        type: CATCH_ERROR,
        payload: err.response.msg
      });
    }
  };
  return (
    <ApprovalsContext.Provider
      value={{
        name: state.name,
        date: state.date,
        approved: state.approved,
        rejected: state.rejected,
        hours_worked: state.hours_worked,
        original_approvals: state.original_approvals,
        client: state.client,
        queryDate: Date(),
        getApprovals,
        addApprovals,
        deleteApprovals
      }}
    >
      {props.children}
    </ApprovalsContext.Provider>
  );
};

export default ApprovalsState;
