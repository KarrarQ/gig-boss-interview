import React from 'react';
import './DataTable.css';
import AggregateData from '../AggregateData/AggregateData';

function DataTable({ data, selectedBand }) {
  return (
    <div className="data-table-container">
      <div className="data-table">
      <h2>Aggregate Data</h2>
        <table>
          <thead>
            <tr>
              {selectedBand && <th>Band Name</th>}
              <th>Musician</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {selectedBand && <td>{item.bandName}</td>}
                <td>{item.name}</td>
                <td>${item.income}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="aggregate-data-container">
        {selectedBand && <AggregateData data={data} />}
      </div>
    </div>
  );
}

export default DataTable;
