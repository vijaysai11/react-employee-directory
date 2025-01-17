import React, { useState } from "react";
import EmployeeList from "../components/EmployeeList";
import SearchBar from "../components/SearchBar";
import mockEmployees from "../data/mockEmployees";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmployees = mockEmployees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <SearchBar setSearchQuery={setSearchQuery} />
      <EmployeeList employees={filteredEmployees} />
    </div>
  );
};

export default Home;
