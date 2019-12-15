import React, { useEffect, useState, useContext } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";
import StatusContext from "../../context/status/statusContext";

const Table = props => {
  const [tableData, setTableData] = useState([]);

  const statusContext = useContext(StatusContext);

  useEffect(() => {
    axios
      .get("/api/status")
      .then(function(response) {
        setTableData(
          response.data.filter(item => {
            let itemDate = new Date(item.date);
            let variableDate = new Date() - 604800000;

            return itemDate > variableDate;
          })
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [statusContext]);

  const columns = [
    {
      id: "Name",
      Header: "Name",
      accessor: "name"
    },
    {
      Header: "Date",
      accessor: "date"
    },
    {
      Header: "Comment",
      accessor: "comment"
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
