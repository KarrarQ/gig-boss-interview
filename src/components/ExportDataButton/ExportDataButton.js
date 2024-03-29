// ExportDataButton.js
import React from 'react';
import './ExportDataButton.css';

function ExportDataButton({ onExport }) {
  const handleClick = () => {
    onExport(); // Call the onExport function passed from the parent component
  };

  return (
    <div className="export-data-button">
      <button onClick={handleClick}>Export Data</button>
    </div>
  );
}

export default ExportDataButton;
