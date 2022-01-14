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
}) => {
  const years = contracts.map((contract) => {
    return contract.year;
  });
  const yearsFiltered = years.filter((year, index) => {
    return years.indexOf(year) === index;
  });

  const [columnNames, setColumnNames] = useState(columns);

  const arrangeColumnNames = (cols) => {
    setColumnNames(cols);
  };

  return (
    <div className="section left">
      <h2>Outputs - Left Section Size: </h2>
      <h4>{`${sizes}%`}</h4>
      <div className="table-menu">
        <Select
          filterContracts={filterContracts}
          yearsFiltered={yearsFiltered}
        />
        <Table
          columnNames={columnNames}
          filteredContracts={filteredContracts}
        />
        <Checkbox columns={columns} arrangeColumnNames={arrangeColumnNames} />
      </div>
    </div>
  );
};

export default VerticalLeft;
