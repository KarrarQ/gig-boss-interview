import React from 'react';
import './DataTable.css' ;

function DataTable({ data }) {
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>Band Name</th>
            <th>Musician</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.bandName}</td>
              <td>{item.name}</td>
              <td>${item.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;