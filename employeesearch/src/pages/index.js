import React, { useState } from 'react';
import Card from './../components/Card';
import Form from './../components/Form';

const EmployeeList = ({ initialList }) => {
  const [employees, setEmployees] = useState(initialList || []);
  const [searchedQueryName, setQueryName] = useState('');
  const [searchedQueryAge, setQueryAge] = useState('');
  const [searchQuerySalary, setQuerySalary] = useState('');

  // const filteredEmployeesByName = employees.filter(
  //   employee =>
  //     employee.name.toLowerCase().indexOf(searchedQueryName.toLowerCase()) !==
  //     -1
  // );
  if (searchedQueryAge !== '') {
    var filteredEmployeesByAge = employees.filter(
      employee => employee.age >= searchedQueryAge
    );
  } else {
    filteredEmployeesByAge = employees;
  }

  if (searchQuerySalary !== '') {
    var filteredEmployeesBySalary = employees.filter(
      employee => parseFloat(employee.salary) <= parseFloat(searchQuerySalary)
    );
  } else {
    filteredEmployeesBySalary = employees;
  }

  const handleSubmit = event => {
    event.preventDefault();

    setQueryName(event.target.employeeName.value);
  };

  const searchEmployeeName = event => {
    setQueryName(event.target.value);
  };

  const searchAge = event => {
    setQueryAge(event.target.value);
  };

  const searchSalary = event => {
    setQuerySalary(event.target.value);
  };

  return (
    <div>
      <div className="frow">
        <Form
          onSubmit={handleSubmit}
          onChangeName={searchEmployeeName}
          onChangeAge={searchAge}
          onChangeSalary={searchSalary}
        ></Form>
      </div>
      {filteredEmployeesByAge.map(employee => (
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
