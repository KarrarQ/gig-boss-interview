import React from 'react';
import './DataTable.css';
import AggregateData from '../AggregateData/AggregateData'; // Import the AggregateData component

function DataTable({ data, selectedBand }) {
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            {/* Render band name only if a band is selected */}
            {selectedBand && <th>Band Name</th>}
            <th>Musician</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {/* Conditionally render band name based on selected band */}
              {selectedBand && <td>{item.bandName}</td>}
              <td>{item.name}</td>
              <td>${item.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Conditionally render the AggregateData component */}
      {selectedBand && <AggregateData data={data} />}
    </div>
  );
}

export default DataTable;
