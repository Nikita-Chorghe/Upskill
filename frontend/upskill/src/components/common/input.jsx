import React from "react";

const Input = ({ type, name, label, value, error, onChange }) => {
  return (
    <div className="form-group w-50 mb-3">
      <label htmlFor="name">{label}</label>
      <input
        autoFocus
        value={value}
        onChange={onChange}
        type={type}
        id={name}
        name={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
