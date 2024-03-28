import React from 'react';
import './App.css';
import Header from '../Header/Header';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import RenderArea from '../RenderArea/RenderArea';
import IncomeByMusician from '../IncomeByMusician/IncomeByMusician';
import ExportDataButton from '../ExportDataButton/ExportDataButton';
import bandsData from '../SampleData/income_data_2023_24.json.json'; 

function App() {
  return (
    <main>
      <Header />
      <DropDownMenu />
      <RenderArea />
      {/* Pass the bands data to the IncomeByMusician component */}
      <IncomeByMusician bands={bandsData.bands} />
      <ExportDataButton />
    </main>
  );
}

export default App;
