import React, { useState, useContext } from "react";
import StatusContext from "../../context/status/statusContext";

const StatusForm = () => {
  const statusContext = useContext(StatusContext);

  const { addStatus } = statusContext;

  const [status, SetStatus] = useState({
    name: "",
    type: "",
    date: "",
    comment: "",
    queryDate: Date()
  });

  const { name, type, date, comment } = status;

  const onChange = (e) => {
    SetStatus({
      ...status,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addStatus(status);
    clearAll();
  };

  const exportData = (e) => {};

  const clearAll = () => {
    SetStatus({
      name: "",
      type: "",
      date: "",
      comment: "",
      queryDate: Date()
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Item</h2>
      <select
        id="statusName"
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
      <select
        type="text"
        placeholder="Type"
        name="type"
        value={type}
        onChange={onChange}
      >
        <option value=""> Select One...</option>
        <option value="UpLoad">UpLoad</option>
        <option value="Reconciliation">Reconciliation</option>
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
        placeholder="Task"
        name="comment"
        value={comment}
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

export default StatusForm;
