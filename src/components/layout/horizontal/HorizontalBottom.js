import React, { useEffect, useState, useRef } from "react";
import "../../../styling/form.css";

const HorizontalBottom = ({ sizes, addContract }) => {
  const [id, setId] = useState("");
  const [year, setYear] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addContract({
      id,
      year,
      amount,
      type,
    });
    setId("");
    setYear("");
    setAmount("");
    setType("");
  };

  return (
    <div>
      <h2>Inputs - Left Section Size: </h2>
      <h4>{`${sizes}%`}</h4>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="no">Contract No:</label>
          <input
            id="no"
            name="no"
            placeholder="enter contract no..."
            required
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="year">Contract Year:</label>
          <input
            id="year"
            name="year"
            placeholder="enter contract year..."
            required
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="proposal">Contract Amount:</label>
          <input
            id="amount"
            name="amount"
            placeholder="enter contract amount..."
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="type">Contract Type:</label>
          <input
            id="type"
            name="type"
            placeholder="enter contract type..."
            required
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Save
        </button>
      </form>
    </div>
  );
};

export default HorizontalBottom;
