import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import RenderArea from '../RenderArea/RenderArea';
import IncomeByMusician from '../IncomeByMusician/IncomeByMusician';
import ExportDataButton from '../ExportDataButton/ExportDataButton';
import DataTable from '../DataTable/DataTable';

import TotalIncome from '../TotalIncome/TotalIncome';
import AggregateData from '../AggregateData/AggregateData'; 
import bandsData from '../SampleData/income_data_2023_24.json'; 

function App() {
  const [selectedBand, setSelectedBand] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); 
  const [showDataTable, setShowDataTable] = useState(false);
  const [exportData, setExportData] = useState(false);
  const [error, setError] = useState(null); 

  const handleExportData = () => {
    setExportData(true); 
  };
  const memberIncomes = bandsData?.bands?.reduce((acc, band) => {
    band.members.forEach(member => {
      acc.push(member.income);
    });
    return acc;
  }, []) || [];
  const totalIncomeOver600 = memberIncomes.filter(income => income >= 600).reduce((acc, income) => acc + income, 0);
  const totalIncomeUnder600 = memberIncomes.filter(income => income < 600).reduce((acc, income) => acc + income, 0);
  const totalPaidOut = memberIncomes.reduce((acc, income) => acc + income, 0);
  const totalPersonalIncome = selectedBand ? 
    bandsData?.bands?.find(band => band.band_name === selectedBand)?.members.reduce((total, member) => total + member.income, 0) || 0
    : 0;

  if (!bandsData || !bandsData.bands) {
    setError("Data not found or invalid.");
  }

  return (
    <main>
      <Header />
      <TotalIncome selectedBand={selectedBand} bandsData={bandsData?.bands || []} />
      <DropDownMenu onSelectBand={setSelectedBand} bandsData={bandsData?.bands || []} />
      <RenderArea selectedBand={selectedBand} bandsData={bandsData?.bands || []} />
      <IncomeByMusician selectedBand={selectedBand} bandsData={bandsData?.bands || []} />
      <ExportDataButton onExport={handleExportData} />
      {showDataTable && <DataTable data={bandsData?.bands?.reduce((acc, band) => acc.concat(band.members.map(member => ({ bandName: band.band_name, ...member }))), []) || []} selectedBand={selectedBand} />}
      {exportData && <AggregateData 
        totalIncome={totalIncomeOver600 + totalIncomeUnder600} 
        memberIncomes={memberIncomes} 
        totalIncomeOver600={totalIncomeOver600} 
        totalIncomeUnder600={totalIncomeUnder600} 
        totalPaidOut={totalPaidOut} 
        totalPersonalIncome={totalPersonalIncome} 
      />}
      {error && <div className="error-message">Error: {error}</div>}
    </main>
  );
}

export default App;
