import React, { useState, useEffect } from 'react';
import './RenderArea.css'

function RenderArea({ selectedBand, bandsData }) {
  const [bandIncome, setBandIncome] = useState(null); 
  const [bandMembersIncome, setBandMembersIncome] = useState([]);


  const updateIncomeData = () => {
    if (selectedBand && bandsData) {
      const band = bandsData.find(band => band.band_name === selectedBand);
      if (band) {
        setBandIncome(band.totalIncome);
        setBandMembersIncome(band.members);
      } else {
        setBandIncome(null);
        setBandMembersIncome([]);
      }
    }
  };

  useEffect(() => {
    updateIncomeData();
  }, [selectedBand, bandsData]);

  return (
    <div className="render-area">
      <h2>Income Information</h2>
      {selectedBand && bandsData ? (
        <div>
          <p>Total Income for {selectedBand}:</p>
          <p>{bandIncome}</p>
          <p>Income of each band member:</p>
          <ul>
            {bandMembersIncome.map((member, index) => (
              <li key={index}>{member.name}: ${member.income}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Please select a band from the dropdown menu</p>
      )}
    </div>
  );
}

export default RenderArea;

