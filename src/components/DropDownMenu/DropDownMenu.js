import React, { useState } from 'react';

function DropDownMenu() {
  const [selectedBand, setSelectedBand] = useState(null);
  
  const handleBandChange = (event) => {
    setSelectedBand(event.target.value);
  };

  return (
    <div className="dropdown">
      <label htmlFor="bands">Select a Band:</label>
      <select id="bands" value={selectedBand} onChange={handleBandChange}>
        <option value="">Select a band...</option>
        <option value="band1">Band 1</option>
        <option value="band2">Band 2</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
}

export default DropDownMenu;
