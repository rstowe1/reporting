import React, { useState, useContext } from "react";
import StatusContext from "../../context/status/statusContext";

const StatusForm = () => {
  const statusContext = useContext(StatusContext);

  const { addStatus } = statusContext;

  const [status, SetStatus] = useState({
    name: "",
    date: "",
    comment: "",
    queryDate: Date()
  });

  const { name, date, comment } = status;

  const onChange = e => {
    SetStatus({
      ...status,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    addStatus(status);
    clearAll();
  };

  const exportData = e => {};

  const clearAll = () => {
    SetStatus({ name: "", date: "", comment: "", queryDate: Date() });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Item</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
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
        <input
          type="submit"
          value={"Export"}
          className="btn btn-primary btn-block"
          onClick={exportData()}
        />
      </div>
    </form>
  );
};

export default StatusForm;
