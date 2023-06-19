import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2 futuristic-search-container">
      <label className="futuristic-search-label">Search</label>
      <input
        className="pa3 ba b--green bg-lightest-blue futuristic-search-input"
        type="search"
        placeholder=""
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
