import React from 'react';
import './Searchinput.css';

function SearchInput({ value, onChange }) {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchInput;