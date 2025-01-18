import React, { useState } from "react";
import EmployeeDetails from "./EmployeeDetails";

const EmployeeList = ({ employees }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleCardClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleClose = () => {
    setSelectedEmployee(null);
  };

  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <div
          key={employee.id}
          className="employee-card"
          onClick={() => handleCardClick(employee)}
        >
          <img src={employee.avatar} alt={employee.name} />
          <h3>{employee.name}</h3>
          <p>{employee.role}</p>
        </div>
      ))}

      {/* EmployeeDetails Popup */}
      {selectedEmployee && (
        <EmployeeDetails employee={selectedEmployee} onClose={handleClose} />
      )}
    </div>
  );
};

export default EmployeeList;
