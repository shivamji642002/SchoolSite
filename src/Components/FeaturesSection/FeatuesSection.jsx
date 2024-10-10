import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <h2>Features</h2>
      <div className="row">
        <div className="col-md-4">
          <h3>Institution Management</h3>
          <p>Manage your institution's data and settings</p>
        </div>
        <div className="col-md-4">
          <h3>Student Management</h3>
          <p>Manage student data, attendance, and performance</p>
        </div>
        <div className="col-md-4">
          <h3>Parent Collaboration</h3>
          <p>Collaborate with parents and guardians</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;