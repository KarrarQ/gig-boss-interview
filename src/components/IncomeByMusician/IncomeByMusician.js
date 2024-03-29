import React, { useState } from 'react';
import './IncomeByMusician.css';

function IncomeByMusician({ selectedBand, bandsData }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('');
  const [dropdownClicked, setDropdownClicked] = useState(false); 

  const selectedBandData = bandsData.find(band => band.band_name === selectedBand);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
    setDropdownClicked(true); 
  };

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
          <li key={index} style={{ color: dropdownClicked && (member.income >= 600 ? 'green' : 'inherit') }}>
            Band: {selectedBand}, Musician: {member.name}, Income: ${member.income}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IncomeByMusician;
