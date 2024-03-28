import React from 'react';

function ExportDataButton({ onClick }) {
  const handleClick = () => {
    // Call the onClick function when the button is clicked
    onClick();
  };

  return (
    <div className="export-data-button">
      <button onClick={handleClick}>Export Data</button>
    </div>
  );
}

export default ExportDataButton;
