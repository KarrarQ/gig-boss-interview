import React, { useState } from 'react';
import './IncomeByMusician.css';

function IncomeByMusician({ selectedBand, bandsData }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('');

  // Find the selected band data
  const selectedBandData = bandsData.find(band => band.band_name === selectedBand);

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle filter option change
  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  // Filter band members based on search query and filter option
  const filteredMembers = selectedBandData ? selectedBandData.members.filter(member => {
    const nameMatches = member.name.toLowerCase().includes(searchQuery.toLowerCase());
    const meetsFilterCriteria = !filterOption || (filterOption === 'over600' && member.income >= 600) || (filterOption === 'under600' && member.income < 600);
    return nameMatches && meetsFilterCriteria;
  }) : [];

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
        <option value="over600"> >= $600</option>
        <option value="under600">{'< $600'}</option>
      </select>
      <ul>
        {filteredMembers.map((member, index) => (
          <li key={index} style={{ backgroundColor: member.income >= 600 ? 'lightgreen' : 'inherit' }}>
            Band: {selectedBand}, Musician: {member.name}, Income: ${member.income}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IncomeByMusician;

