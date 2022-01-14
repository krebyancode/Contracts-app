import React from "react";
import Form from "../components/Form";
import "../styling/layout.css";

const VerticalRight = ({ sizes, addContract }) => {
  return (
    <div className="section right">
      <h2>Inputs - Right Section Size: </h2>
      <h4>{`${sizes}%`}</h4>
      <Form addContract={addContract} />
    </div>
  );
};

export default VerticalRight;
