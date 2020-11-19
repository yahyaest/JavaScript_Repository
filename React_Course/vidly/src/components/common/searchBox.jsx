import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="input-group input-group-sm mb-3">
      <input
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        placeholder="Search..."
        value={value}
        onChange={(e)=>onChange(e.currentTarget.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
