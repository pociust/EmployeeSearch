import React, { useState } from 'react';
import Card from './../components/Card';
import Form from './../components/Form';

const EmployeeList = ({ initialList }) => {
  const [employees, setEmployees] = useState(initialList || []);
  const [searchedQuery, setQuery] = useState('');
  const filteredEmployees = employees.filter(
    employee => employee.name.indexOf(searchedQuery) !== -1
  );

  const handleSubmit = event => {
    event.preventDefault();

    setQuery(event.target.employeeName.value);

  };

  const searchEmployee = event => {

    setQuery(event.target.value)
  };

  return (
    <div>
      <div className="frow">
        <Form onSubmit={handleSubmit} onChange={searchEmployee}></Form>
      </div>
      {filteredEmployees.map(employee => (
        <Card
          key={employee.id}
          name={employee.name}
          occupation={employee.occupation}
        />
      ))}
      <Card></Card>
    </div>
  );
};

export default EmployeeList;
