import React from "react";
import EmployeeList from "./pages/index";
import employeeslist from './EmployeeList.json'
import './styles/style.css'


function App() {
  return (
    <div>
      <EmployeeList initialList={employeeslist} />
    </div>
  );
}

export default App;