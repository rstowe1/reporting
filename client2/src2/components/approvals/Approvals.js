import React, { Fragment } from "react";
import ApprovalsForm from "./ApprovalsForm";
import ApprovalsTable from "./ApprovalsTable";

const Status = () => {
  return (
    <Fragment>
      <ApprovalsForm />
      <ApprovalsTable />
    </Fragment>
  );
};

export default Status;
