import React, { Fragment, useContext, useEffect } from "react";
import StatusForm from "./StatusForm";
import StatusTable from "./StatusTable";
import StatusContext from "../../context/status/statusContext";

const Status = () => {
  // const statusContext = useContext(StatusContext);

  // const { addStatus } = statusContext;
  return (
    <Fragment>
      <StatusForm />
      <StatusTable />
    </Fragment>
  );
};

export default Status;
