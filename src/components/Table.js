import React from "react";
import Contract from "./Contract";
import "../styling/table.css";

const Table = ({ columnNames, filteredContracts }) => {
  return (
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
  );
};

export default Table;
