import React, { useState } from 'react';
import employeeslist from '../EmployeeList.json'
import Card from './../components/Card'



const EmployeeList = () => {
  const [employees, setEmployees] = useState(employeeslist); 

  return (
    <div>
      {employees.map(employee => (
        <Card name = {employee.name}/>
      ))} 
    </div>
  );









}



export default EmployeeList;
