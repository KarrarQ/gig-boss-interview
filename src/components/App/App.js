import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import RenderArea from '../RenderArea/RenderArea';
import IncomeByMusician from '../IncomeByMusician/IncomeByMusician';
import ExportDataButton from '../ExportDataButton/ExportDataButton';
import DataTable from '../DataTable/DataTable';

import TotalIncome from '../TotalIncome/TotalIncome';
import AggregateData from '../AggregateData/AggregateData'; // Import AggregateData component
import bandsData from '../SampleData/income_data_2023_24.json'; 

function App() {
  const [selectedBand, setSelectedBand] = useState(null); // State to store selected band
  const [searchQuery, setSearchQuery] = useState(''); // State to store search query
  const [showDataTable, setShowDataTable] = useState(false); // State to toggle DataTable visibility
  const [exportData, setExportData] = useState(false); // State to toggle export data visibility
  const [error, setError] = useState(null); // State to store error messages

  const handleExportData = () => {
    setExportData(true); // Set exportData state to true when Export Data button is clicked
  };

  // Calculate Total Income for each member
  const memberIncomes = bandsData?.bands?.reduce((acc, band) => {
    band.members.forEach(member => {
      acc.push(member.income);
    });
    return acc;
  }, []) || [];

  // Calculate Total Income for members who made $600 or more
  const totalIncomeOver600 = memberIncomes.filter(income => income >= 600).reduce((acc, income) => acc + income, 0);

  // Calculate Total Income for members who made less than $600
  const totalIncomeUnder600 = memberIncomes.filter(income => income < 600).reduce((acc, income) => acc + income, 0);

  // Calculate Total Payout
  const totalPaidOut = memberIncomes.reduce((acc, income) => acc + income, 0);

  // Calculate Total Personal Income
  const totalPersonalIncome = selectedBand ? 
    bandsData?.bands?.find(band => band.band_name === selectedBand)?.members.reduce((total, member) => total + member.income, 0) || 0
    : 0;

  // Error handling for invalid data
  if (!bandsData || !bandsData.bands) {
    setError("Data not found or invalid."); // Set error message if data is not found or invalid
  }

  return (
    <main>
      <Header />
      <TotalIncome selectedBand={selectedBand} bandsData={bandsData?.bands || []} />
      <DropDownMenu onSelectBand={setSelectedBand} bandsData={bandsData?.bands || []} />
      <RenderArea selectedBand={selectedBand} bandsData={bandsData?.bands || []} />
      <IncomeByMusician selectedBand={selectedBand} bandsData={bandsData?.bands || []} />
      <ExportDataButton onExport={handleExportData} /> {/* Pass handleExportData function */}
      {showDataTable && <DataTable data={bandsData?.bands?.reduce((acc, band) => acc.concat(band.members.map(member => ({ bandName: band.band_name, ...member }))), []) || []} selectedBand={selectedBand} />}
      {exportData && <AggregateData 
        totalIncome={totalIncomeOver600 + totalIncomeUnder600} 
        memberIncomes={memberIncomes} 
        totalIncomeOver600={totalIncomeOver600} 
        totalIncomeUnder600={totalIncomeUnder600} 
        totalPaidOut={totalPaidOut} 
        totalPersonalIncome={totalPersonalIncome} 
      />} {/* Render AggregateData when exportData is true */}
      {error && <div className="error-message">Error: {error}</div>} {/* Display error message if any */}
    </main>
  );
}

export default App;
