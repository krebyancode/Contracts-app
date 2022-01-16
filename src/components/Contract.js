import React from "react";
import "../styling/table.css";

const Contract = ({ contract, columnNames, editContract, deleteContract }) => {
  const keys = Object.keys(contract);

  const handleAction = (column) => {
    if (column === "Edit") {
      editContract(contract.id);
    } else if (column === "Delete") {
      deleteContract(contract.id);
    }
  };

  return (
    // table rows are set here, as per the sorting of columns.
    <tr>
      {columnNames.map((column, index) => {
        for (let key of keys) {
          if (column.toLowerCase() === key) {
            if (key === "amount") {
              return (
                <td key={index}>{`$ ${contract[key]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}</td>
              );
            } else {
              return <td key={index}>{contract[key]}</td>;
            }
          }
        }
        return (
          <td key={index} style={{ textAlign: "center" }}>
            <button
              className="btn"
              style={
                column === "Delete"
                  ? { background: "darkred" }
                  : { background: "darkslategrey" }
              }
              onClick={() => handleAction(column)}
            >
              {column}
            </button>
          </td>
        );
      })}
    </tr>
  );
};

export default Contract;
