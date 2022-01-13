import React, { useEffect, useState, useRef } from "react";
import Contract from "./Contract";
import "../../../styling/table.css";
import "../../../styling/dropdown.css";
import Checkbox from "./Checkbox";

const HorizontalTop = ({
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
    <div>
      <h2>Outputs - Left Section Size: </h2>
      <h4>{`${sizes}%`}</h4>
      <div className="droplist-menu">
        <select
          className="droplist-years"
          onChange={(e) => filterContracts(e.target.value)}
        >
          <option value="all">All</option>
          {yearsFiltered.map((year, index) => (
            <option key={index}>{year}</option>
          ))}
        </select>
        <Checkbox columns={columns} arrangeColumnNames={arrangeColumnNames} />
      </div>
      <table>
        <thead>
          <tr>
            {columnNames.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredContracts.map((contract) => (
            <Contract
              key={contract.id}
              contract={contract}
              columnNames={columnNames}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HorizontalTop;
