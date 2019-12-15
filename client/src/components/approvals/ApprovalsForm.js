import React, { useState, useContext } from "react";
import ApprovalsContext from "../../context/approvals/approvalsContext";

const ApprovalsForm = () => {
  const approvalsContext = useContext(ApprovalsContext);
  const { addApprovals } = approvalsContext;

  const [approvals, SetApprovals] = useState({
    name: "",
    date: "",
    approved: "",
    rejected: "",
    hours_worked: "",
    original_approvals: "",
    client: "",
    queryDate: Date()
  });

  const {
    name,
    date,
    approved,
    rejected,
    hours_worked,
    original_approvals,
    client
  } = approvals;

  const onChange = e => {
    SetApprovals({
      ...approvals,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    addApprovals(approvals);
    clearAll();
  };

  const clearAll = () => {
    SetApprovals({
      name: "",
      date: "",
      approved: "",
      rejected: "",
      hours_worked: "",
      original_approvals: "",
      client: "",
      queryDate: Date()
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Item</h2>
      <select
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      >
        <option value=""> Select One...</option>
        <option value="Ryan">Ryan</option>
        <option value="Patrick">Patrick</option>
        <option value="Jennifer">Jennifer</option>
        <option value="Dan">Dan</option>
        <option value="David">David</option>
        <option value="Devin">Devin</option>
        <option value="Will">Will</option>
        <option value="Carl">Carl</option>
      </select>
      <input
        type="date"
        placeholder="Date"
        name="date"
        value={date}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Approved"
        name="approved"
        value={approved}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Rejected"
        name="rejected"
        value={rejected}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Hours Worked"
        name="hours_worked"
        value={hours_worked}
        onChange={onChange}
      />
      <select
        type="text"
        placeholder="Original Approvals"
        name="original_approvals"
        value={original_approvals}
        onChange={onChange}
      >
        <option value=""> Select One...</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <input
        type="text"
        placeholder="Client"
        name="client"
        value={client}
        onChange={onChange}
      />
      <div>
        <input
          type="submit"
          value={"Submit"}
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ApprovalsForm;
