import React, { useReducer } from "react";
import axios from "axios";

import StatusContext from "./statusContext";
import statusReducer from "./statusReducer";
import {
  ADD_STATUS,
  DELETE_STATUS,
  GET_STATUS,
  CATCH_ERROR,
  CLEAR_CURRENT
} from "../types";

const StatusState = props => {
  const initialState = {
    name: null,
    date: null,
    comment: null,
    queryDate: Date()
  };
  const [state, dispatch] = useReducer(statusReducer, initialState);

  // Get Status
  const getStatus = async () => {
    try {
      const res = await axios.get("/api/status");

      dispatch({ type: GET_STATUS, payload: res.data });
    } catch (err) {
      dispatch({
        type: CATCH_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Status
  const addStatus = async status => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/status", status, config);
      dispatch({ type: ADD_STATUS, payload: res.data });
    } catch (err) {
      dispatch({
        type: CATCH_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete Status
  const deleteStatus = async id => {
    try {
      await axios.delete(`/api/status/${id}`);
      dispatch({ type: DELETE_STATUS, payload: id });
    } catch (err) {
      dispatch({
        type: CATCH_ERROR,
        payload: err.response.msg
      });
    }
  };

  return (
    <StatusContext.Provider
      value={{
        name: state.name,
        date: state.date,
        comment: state.comment,
        queryDate: Date(),
        getStatus,
        addStatus,
        deleteStatus
      }}
    >
      {props.children}
    </StatusContext.Provider>
  );
};

export default StatusState;
