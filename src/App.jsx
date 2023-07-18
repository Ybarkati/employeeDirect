import "./index.css";
import Homepage from "./components/Homepage.jsx";
import {Routes, Route} from 'react-router-dom'
import EmployeePage from "./Pages/EmployeePage.jsx";
import { useState } from "react";
// named import
import { data } from "./data";

export default function App() {
  let [employees, setEmployees] = useState(data);
  const [chosenEmployee, setChosenEmployee] = useState({});
  function addEmployee(emp) {
    setEmployees([...employees, emp]);
  }
  function filterEmployee(searchInput) {
    const filterEmp = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchInput) ||
        employee.title.toLowerCase().includes(searchInput)
    );

    if (searchInput.length < 2) {
      setEmployees(data);
    } else {
      setEmployees(filterEmp);
    }
  }

  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Homepage employees={employees} addEmployee={addEmployee} filterEmployee = {filterEmployee} setChosenEmployee={setChosenEmployee}/>} />
        <Route path='/employee' element={<EmployeePage employee={chosenEmployee}/>} />
      </Routes>
      
      
    </div>
  );
}

