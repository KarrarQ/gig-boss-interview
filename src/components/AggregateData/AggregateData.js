import React from 'react';
import './AggregateData.css';

function AggregateData({ totalIncome, memberIncomes, totalIncomeOver600, totalIncomeUnder600, totalPaidOut, totalPersonalIncome, visible }) {
  return (
    <div className={`aggregate-data-container ${visible ? '' : 'hidden'}`}>
      {visible && (
        <div className="aggregate-data">
          <p>Total Income 2023-2024: ${totalIncome}</p>
          <p>Total Income for Each Member: ${memberIncomes.join(', $')}</p>
          <p>Total Income for Members Who Made $600 or More: ${totalIncomeOver600}</p>
          <p>Total Income for Members Who Made Less Than $600: ${totalIncomeUnder600}</p>
          <p>Total Payout: ${totalPaidOut}</p>
          <p>Total Personal Income: ${totalPersonalIncome}</p>
        </div>
      )}
    </div>
  );
}

export default AggregateData;
