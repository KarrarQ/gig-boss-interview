import React, { useState } from 'react';
import './DropDownMenu.css';

function DropDownMenu({ onSelectBand, bandsData }) {
  const [selectedBand, setSelectedBand] = useState(''); // Initialize selectedBand state

  // Function to handle band change
  const handleBandChange = (event) => {
    const selectedBand = event.target.value;
    setSelectedBand(selectedBand);
    onSelectBand(selectedBand); // Pass the selected band to the parent component
  };

  return (
    <div className="dropdown">
      <label htmlFor="bands">Select a Band:</label>
      <select id="bands" value={selectedBand} onChange={handleBandChange}>
        <option value="">Select a band...</option>
        {bandsData.map((band, index) => (
          <option key={index} value={band.band_name}>{band.band_name}</option>
        ))}
      </select>
    </div>
  );
}

export default DropDownMenu;
