import React, { useState } from 'react';
import './IncomeByMusician.css';

function IncomeByMusician() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('');

  // Sample data from the JSON file
  const bandsData = {
    "bands": [
      {
        "band_name": "Global Groove",
        "members": [
          { "name": "You", "income": 2600 },
          { "name": "Carlos", "income": 2400 },
          { "name": "Deepak", "income": 2700 },
          { "name": "Elena", "income": 2500 }
        ]
      },
      {
        "band_name": "Harmony Fusion",
        "members": [
          { "name": "You", "income": 300 },
          { "name": "Chen", "income": 150 },
          { "name": "Yuki", "income": 200 },
          { "name": "Oliver", "income": 100 }
        ]
      },
      {
        "band_name": "Melody Makers",
        "members": [
          { "name": "You", "income": 400 },
          { "name": "Liam", "income": 500 },
          { "name": "Aisha", "income": 600 },
          { "name": "Raj", "income": 700 }
        ]
      }
    ]
  };

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle filter option change
  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  // Function to filter band members based on search query and filter option
  const filteredMembers = bandsData.bands.reduce((acc, band) => {
    band.members.forEach(member => {
      if (member.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        if (!filterOption || (filterOption === 'over600' && member.income >= 600) || (filterOption === 'under600' && member.income < 600)) {
          acc.push({ bandName: band.band_name, ...member });
        }
      }
    });
    return acc;
  }, []);

  return (
    <div className="income-by-musician">
      <h2>Income By Musician</h2>
      <input 
        type="text" 
        placeholder="Search by musician name..." 
        value={searchQuery} 
        onChange={handleSearchChange} 
      />
      <select value={filterOption} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="over600">= $600</option>
        <option value="under600">{'< $600'}</option>
      </select>
      <ul>
        {filteredMembers.map((member, index) => (
          <li key={index} style={{ backgroundColor: member.income >= 600 ? 'lightgreen' : 'inherit' }}>
            Band: {member.bandName}, Musician: {member.name}, Income: ${member.income}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IncomeByMusician;

