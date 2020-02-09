import React, { useState } from 'react';
import Card from './../components/Card';
import Form from './../components/Form'

const EmployeeList = ({ initialList }) => {
  const [employees, setEmployees] = useState(initialList || []);

  return (
    <div>
      <Form></Form>
      {employees.map(employee => (
        <Card name={employee.name} occupation={employee.occupation} />
      ))}
    </div>
  );
};

export default EmployeeList;
