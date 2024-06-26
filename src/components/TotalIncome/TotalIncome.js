import React, { useState, useEffect } from 'react';
import './TotalIncome.css';

function TotalIncome({ bandsData, selectedBand }) {
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    if (bandsData) {
      let total = 0;
      bandsData.forEach(band => {
        total += band.members.reduce((acc, member) => acc + member.income, 0);
      });
      setTotalIncome(total);
    }
  }, [bandsData]);

  useEffect(() => {
    if (selectedBand && bandsData) {
      const band = bandsData.find(band => band.band_name === selectedBand);
      if (band) {
        const bandTotalIncome = band.members.reduce((acc, member) => acc + member.income, 0);
        setTotalIncome(bandTotalIncome);
      }
    }
  }, [selectedBand, bandsData]);

  return (
    <div className="total-income">
      <h2>Total Income for {selectedBand ? selectedBand : '2023-2024:'}</h2>
      <p>${totalIncome}</p>
    </div>
  );
}

export default TotalIncome;
