import React, { useState } from 'react';
import './DropDownMenu.css';

function DropDownMenu({ onSelectBand, bandsData }) {
  
  const [selectedBand, setSelectedBand] = useState(''); 
  const handleBandChange = (event) => {
    const selectedBand = event.target.value;
    setSelectedBand(selectedBand);
    onSelectBand(selectedBand);
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
