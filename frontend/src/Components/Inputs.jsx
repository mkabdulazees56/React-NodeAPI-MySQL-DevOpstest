import React from "react";

const Inputs = ({ type, name, placeholder, value, onChange, label }) => {
  return (
    <>
      <div className="grid items-center gap-1">
        <label
          htmlFor={label}
          className="text-gradient"
        >
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className="input-theme"
        />
      </div>
    </>
  );
};

export default Inputs;
