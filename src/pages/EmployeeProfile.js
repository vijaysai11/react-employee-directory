import React from "react";
import { useParams } from "react-router-dom";
import mockEmployees from "../data/mockEmployees";

const EmployeeProfile = () => {
  const { id } = useParams();
  const employee = mockEmployees.find((emp) => emp.id === parseInt(id));

  if (!employee) {
    return <h2>Employee not found</h2>;
  }

  return (
    <div className="employee-profile">
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
  );
};

export default EmployeeProfile;
