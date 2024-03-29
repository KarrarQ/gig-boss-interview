import React from 'react';
import './ExportDataButton.css';

function ExportDataButton({ onExport }) {
  const handleClick = () => {
    onExport(); 
  };

  return (
    <div className="export-data-button">
      <button onClick={handleClick}>Export Data</button>
      <div className="empty-container"></div>
    </div>
  );
}

export default ExportDataButton;
