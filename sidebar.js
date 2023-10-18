import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/analytics">Analytics</Link>
      <Link to="/dashboard">Dashboard</Link>
      {
        
      }
    </div>
  );
};

export default Sidebar;