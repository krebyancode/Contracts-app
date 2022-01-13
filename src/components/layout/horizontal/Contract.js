import React from "react";
import "../../../styling/table.css";

const Contract = ({ contract, columnNames }) => {
  // const { id, year, amount, type } = contract;
  const keys = Object.keys(contract);
  return (
    <tr>
      {columnNames.map((column, index) => {
        for (let key of keys) {
          if (column.toLowerCase() === key) {
            if (key === "amount") {
              return <td key={index}>{`$ ${contract[key]}`}</td>;
            } else {
              return <td key={index}>{contract[key]}</td>;
            }
          }
        }
      })}
    </tr>
  );
};

export default Contract;
