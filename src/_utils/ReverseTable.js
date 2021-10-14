import React from "react";
import DataTable from "react-data-table-component";
import { customStyles } from "../_utils/Table";

export default function ReverseTable(props) {
  const data = props.data;
  
  const formattedData = [
    {
      metric: "Path Count",
      number: data[0].CountPath,
      number1: data[1].CountPath,
    },
    {
      metric: "Cyclomatic",
      number: data[0].Cyclomatic,
      number1: data[1].Cyclomatic,
    },
    {
      metric: "Essential",
      number: data[0].Essential,
      number1: data[1].Essential,
    },
    {
      metric: "Max Nesting",
      number: data[0].MaxNesting,
      number1: data[1].MaxNesting,
    },
  ];

  const columns = [
    {
      name: "Metric",
      selector: "metric",
      center: true,
      sortable: true,
    },
    {
      name: "Frontend",
      selector: "number",
      center: true,
      sortable: true,
    },
    {
      name: "Backend",
      selector: "number1",
      center: true,
      sortable: true,
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        margin: "auto",
        width: props.width ? props.width : "60vw",
      }}
    >
      <DataTable
        customStyles={customStyles}
        columns={columns}
        data={formattedData}
        striped={true}
        fixedHeader={true}
        highlightOnHover={true}
      />
    </div>
  );
}
