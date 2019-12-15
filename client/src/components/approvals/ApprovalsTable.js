import React, { useEffect, useState, useContext } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";
import ApprovalsContext from "../../context/approvals/approvalsContext";

const Table = ({ load }) => {
  const [tableData, setTableData] = useState([]);

  const approvalsContext = useContext(ApprovalsContext);

  useEffect(() => {
    axios
      .get("/api/approvals")
      .then(function(response) {
        setTableData(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [approvalsContext]);

  const data = Object.values(tableData ? tableData : []);

  const columns = [
    {
      id: "Name",
      Header: "Name",
      accessor: "name",
      width: 100
    },
    {
      Header: "Date",
      accessor: "date",
      width: 150
    },
    {
      Header: "Approved",
      accessor: "approved",
      width: 90
    },
    {
      Header: "Rejected",
      accessor: "rejected",
      width: 90
    },
    {
      Header: "Hours Worked",
      accessor: "hours_worked",
      width: 150
    },
    {
      Header: "Original Approvals",
      accessor: "original_approvals",
      width: 150
    },
    {
      Header: "Client",
      accessor: "client"
    }
  ];

  return (
    <ReactTable
      data={tableData}
      columns={columns}
      pivotBy={["date"]}
      defaultPageSize={7}
      minRows={5}
    />
  );
};

export default Table;
