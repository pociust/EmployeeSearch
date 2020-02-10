import React, { useState } from 'react';
import Card from './../components/Card';
import Form from './../components/Form';

const EmployeeList = ({ initialList }) => {
  const [employees, setEmployees] = useState(initialList || []);

  // filteredEmployees = (poetFilter) => {
  //   let filteredPoets = employees
  //   filteredPoets = filteredPoets.filter((poet) => {
  //     let poetName = poet.nae
  //     return poetName.indexOf(
  //       poetFilter.toLowerCase()) !== -1
  //   })
  //   this.setState({
  //     filteredPoets
  //   })
  // }

  const handleSubmit = event => {
    event.preventDefault();
    // let mike = event.target.employeeName.value;
    // var i;
    // console.log('1', event);
    // for (i = 0; i < employees.length; i++) {
    //   let tom = employees[i].name;
    //   console.log('2', mike, tom);
    // }

    let employeeSearched = event.target.employeeName.value;
    let filteredEmployees = employees.name;
    filteredEmployees = employees.filter(
      employee => employee.name.indexOf(employeeSearched) !== -1
    );
    setEmployees(filteredEmployees);
    // console.log('1', searchedEmployee);

    console.log('tom', filteredEmployees);
  };

  const searchEmployee = event => {
    console.log(event.target.value);
  };

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
