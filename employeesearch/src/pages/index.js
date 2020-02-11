import React, { useState } from 'react';
import Card from './../components/Card';
import Form from './../components/Form';

const EmployeeList = ({ initialList }) => {
  const [employees, setEmployees] = useState(initialList || []);
  const [searchedQuery, setQuery] = useState('');
  const filteredEmployees = employees.filter(
    employee =>
      employee.name.toLowerCase().indexOf(searchedQuery.toLowerCase()) !== -1
  );

  const handleSubmit = event => {
    event.preventDefault();

    setQuery(event.target.employeeName.value);
  };

  const searchEmployee = event => {
    setQuery(event.target.value);
  };

  const searchAge = () => {
    console.log('tom')
  };

  return (
    <div>
      <div className="frow">
        <Form onSubmit={handleSubmit} onChangeName={searchEmployee} onChangeAge={searchAge}></Form>
      </div>
      {filteredEmployees.map(employee => (
        <Card
          key={employee.id}
          name={employee.name}
          salary={employee.salary}
          age={employee.age}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
