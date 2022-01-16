import React, { useState } from "react";
import "../styling/layout.css";
import "../styling/tablemenu.css";
import Checkbox from "../components/Checkbox";
import Table from "../components/Table";
import Select from "../components/Select";

const VerticalLeft = ({
  sizes,
  contracts,
  filteredContracts,
  filterContracts,
  columns,
  styleMenu,
  deleteContract,
  editContract,
}) => {
  // to set dropdown list of current contracts' years
  const years = contracts.map((contract) => {
    return contract.year;
  });
  const yearsFiltered = years.filter((year, index) => {
    return years.indexOf(year) === index;
  });

  const [columnNames, setColumnNames] = useState(columns);

  // column names are sent to checkbox as prop
  const arrangeColumnNames = (cols) => {
    setColumnNames(cols);
  };

  return (
    <div className="section left">
      <h2>Contracts Table</h2>
      <h4>{`Section Size: ${sizes}%`}</h4>
      <div
        className="table-menu"
        style={
          styleMenu ? { flexDirection: "column" } : { flexDirection: "row" }
        }
      >
        <Select
          filterContracts={filterContracts}
          yearsFiltered={yearsFiltered}
        />
        <Table
          columnNames={columnNames}
          filteredContracts={filteredContracts}
          deleteContract={deleteContract}
          editContract={editContract}
        />
        <Checkbox columns={columns} arrangeColumnNames={arrangeColumnNames} />
      </div>
    </div>
  );
};

export default VerticalLeft;
