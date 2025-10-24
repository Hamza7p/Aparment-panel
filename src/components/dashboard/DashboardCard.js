import React from 'react';

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="dashboard-card">
      <div className="card-icon">{icon}</div>
      <h4 className="card-title">{title}</h4>
      <p className="card-value">{value}</p>
    </div>
  );
};

export default DashboardCard;