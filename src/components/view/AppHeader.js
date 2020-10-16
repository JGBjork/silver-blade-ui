import React from 'react';
import './AppHeader.css';

function AppHeader(props) {
  return (
    <div className="container-fluid bg-dark">
      <span className="text-silver text-bold">Silver</span>
      <span className="text-turquoise text-bold">Blade</span>
    </div>
  );
}

export default AppHeader;
