import React from 'react';

const Input = ({ name, label, value, type, onChange }) => (
  <div className="form-group ">
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      className="form-control"
      type={type}
      name={name}
      autoComplete="off"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Input;
