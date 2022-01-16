import React, { useState, useEffect } from "react";
import "../styling/form.css";

const Form = ({ addContract, editedContract }) => {
  const [id, setId] = useState("");
  const [year, setYear] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  console.log(editedContract);

  useEffect(() => {
    if (editedContract) {
      setId(editedContract.id);
      setYear(editedContract.year);
      setAmount(editedContract.amount);
      setType(editedContract.type);
    }
  }, [editedContract]);

  const handleSubmit = (e) => {
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
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="no">Contract No:</label>
        <input
          id="no"
          name="no"
          placeholder="Enter contract no here"
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
          placeholder="Enter contract year here"
          required
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="proposal">
          Contract Amount <i>(in USD)</i>:
        </label>
        <input
          id="amount"
          name="amount"
          placeholder="Enter contract amount here"
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
          placeholder="Enter contract type here"
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-block">
        Save
      </button>
    </form>
  );
};

export default Form;
