import React from 'react';
import './AggregateData.css';

function AggregateData({ totalIncome, memberIncomes, totalIncomeOver600, totalIncomeUnder600, totalPaidOut, totalPersonalIncome }) {
  return (
    <div className="aggregate-data">
      <h2>Aggregate Data</h2>
      <p>Total Income 2023-2024: ${totalIncome}</p>
      {/* Display Total Income for each member */}
      <p>Total Income for Each Member: ${memberIncomes.join(', $')}</p>
      {/* Calculate and Display Total Income for members who made $600 or more */}
      <p>Total Income for Members Who Made $600 or More: ${totalIncomeOver600}</p>
      {/* Calculate and Display Total Income for members who made less than $600 */}
      <p>Total Income for Members Who Made Less Than $600: ${totalIncomeUnder600}</p>
      {/* Display Total Payout */}
      <p>Total Payout: ${totalPaidOut}</p>
      {/* Display Total Personal Income */}
      <p>Total Personal Income: ${totalPersonalIncome}</p>
      {/* Provide options for exporting the data */}
      {/* Add export options here (Another Page, PDF, Excel) */}
    </div>
  );
}

export default AggregateData;
