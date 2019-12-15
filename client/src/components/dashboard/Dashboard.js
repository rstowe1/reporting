import React from "react";
import DashboardStatusTable from "./DashboardStatusTable";
import DashboardApprovalsTable from "./DashboardApprovalsTable";

const Dashboard = () => {
  return (
    <div>
      <div>
        <h2 className="text-primary">Status (7 Days)</h2>
        <DashboardStatusTable />
      </div>
      <div>
        <h2 className="text-primary">Approvals (7 Days)</h2>
        <DashboardApprovalsTable />
      </div>
    </div>
  );
};

export default Dashboard;
