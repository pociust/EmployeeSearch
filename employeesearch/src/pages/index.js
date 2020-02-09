import React, { useState } from 'react';
// import Card from './components/Card';
import Employees from './../EmployeeList.json';

const EmployeeList = () => {
  const [Employees, setEmployee] = useState([]);

  return <div>{Employees}</div>;
};
export default EmployeeList;
