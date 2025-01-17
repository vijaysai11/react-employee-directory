import React from "react";

const EmployeeDetails = ({ employee, onClose }) => {
  if (!employee) return null;

  return (
    <div className="employee-details-overlay">
      <div className="employee-details-card">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <img src={employee.avatar} alt={employee.name} />
        <h2>{employee.name}</h2>
        <p>
          <strong>Role:</strong> {employee.role}
        </p>
        <p>
          <strong>Email:</strong> {employee.email}
        </p>
        <p>
          <strong>Phone:</strong> {employee.phone}
        </p>
      </div>
    </div>
  );
};

export default EmployeeDetails;
