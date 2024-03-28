import React, { useState } from 'react';

function RenderArea({ selectedBand }) {
  const [bandIncome, setBandIncome] = useState(null); // State to store band income
  const [bandMembersIncome, setBandMembersIncome] = useState([]); // State to store band members' income

  // Simulated data for demonstration
  const bandData = {
    band1: { totalIncome: 10000, membersIncome: [ { name: "Member 1", income: 2000 }, { name: "Member 2", income: 3000 }] },
    band2: { totalIncome: 15000, membersIncome: [ { name: "Member 3", income: 4000 }, { name: "Member 4", income: 5000 }] }
  };

  // Function to update income data based on selected band
  const updateIncomeData = () => {
    if (selectedBand) {
      setBandIncome(bandData[selectedBand].totalIncome);
      setBandMembersIncome(bandData[selectedBand].membersIncome);
    } else {
      setBandIncome(null);
      setBandMembersIncome([]);
    }
  };

  // Call updateIncomeData when selectedBand changes
  React.useEffect(() => {
    updateIncomeData();
  }, [selectedBand]);

  return (
    <div className="render-area">
      <h2>Income Information</h2>
      {selectedBand ? (
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
