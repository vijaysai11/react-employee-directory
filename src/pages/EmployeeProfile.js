import React from "react";
import { useParams } from "react-router-dom";
import mockEmployees from "../data/mockEmployees";

const EmployeeProfile = () => {
  const { id } = useParams();
  const employee = mockEmployees.find((emp) => emp.id === parseInt(id));

  if (!employee) {
    return (
      <h2>
        https://th.bing.com/th/id/OIP.NWf2PzgA833ETeILN9qnmgHaE7?w=251&h=180&c=7&r=0&o=5&pid=1.7not
        found in database
      </h2>
    );
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
