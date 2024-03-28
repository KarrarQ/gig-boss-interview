import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import RenderArea from '../RenderArea/RenderArea';
import IncomeByMusician from '../IncomeByMusician/IncomeByMusician';
import ExportDataButton from '../ExportDataButton/ExportDataButton';
import DataTable from '../DataTable/DataTable';
import SearchInput from '../Searchinput/Searchinput';
import TotalIncome from '../TotalIncome/TotalIncome';
import bandsData from '../SampleData/income_data_2023_24.json'; 

function App() {
  const [selectedBand, setSelectedBand] = useState(null); // State to store selected band
  const [searchQuery, setSearchQuery] = useState(''); // State to store search query
  const [showDataTable, setShowDataTable] = useState(false); // State to toggle DataTable visibility

  const handleExportData = () => {
    setShowDataTable(true); // Show DataTable when Export Data button is clicked
  };

  return (
    <main>
      <Header />
      <TotalIncome selectedBand={selectedBand} bandsData={bandsData.bands} />
      <DropDownMenu onSelectBand={setSelectedBand} bandsData={bandsData.bands} />
      <RenderArea selectedBand={selectedBand} bandsData={bandsData.bands} />
      <IncomeByMusician selectedBand={selectedBand} bandsData={bandsData.bands} />
      <ExportDataButton onClick={handleExportData} />
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      {showDataTable && <DataTable data={bandsData.bands.reduce((acc, band) => acc.concat(band.members.map(member => ({ bandName: band.band_name, ...member }))), [])} selectedBand={selectedBand} />}
    </main>
  );
}

export default App;
