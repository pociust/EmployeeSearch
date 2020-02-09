import React, { useState } from 'react';
import Card from './../components/Card';
import Form from './../components/Form';

const EmployeeList = ({ initialList }) => {
  const [employees, setEmployees] = useState(initialList || []);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('tom');
  };

  const searchEmployee = () => {
    console.log("checkemployee")
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} onChange={searchEmployee}></Form>
      {employees.map(employee => (
        <Card
          key={employee.id}
          name={employee.name}
          occupation={employee.occupation}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
