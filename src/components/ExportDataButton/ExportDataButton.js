import React from 'react';
import './ExportDataButton.css';

function ExportDataButton({ onClick }) {
  const handleClick = () => {
    onClick(); // Call the onClick function passed from the parent component
  };

  return (
    <div className="export-data-button">
      <button onClick={handleClick}>Export Data</button>
    </div>
  );
}

export default ExportDataButton;
