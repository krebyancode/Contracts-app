import React from "react";
import Form from "../components/Form";
import "../styling/layout.css";

const VerticalRight = ({ sizes, addContract, editedContract }) => {
  return (
    <div className="section right">
      <h2>Contracts Form</h2>
      <h4>{`Section Size: ${sizes}%`}</h4>
      <Form addContract={addContract} editedContract={editedContract} />
    </div>
  );
};

export default VerticalRight;
