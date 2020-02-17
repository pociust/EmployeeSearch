import React, { useState } from 'react';
import Card from '../components/Card';
import Form from '../components/Form';
import '../styles/style.css';
import Header from '../components/Header';

const EmployeeList = ({ initialList }) => {
  const [employees, setEmployees] = useState(initialList || []);
  const [searchedQueryName, setQueryName] = useState('');
  const [filterEmployeesAge, setFilterAge] = useState([]);
  const [filterEmployeesSalary, setFilterSalary] = useState([]);

  const filterEmployees = employees.filter(
    employee =>
      employee.name.toLowerCase().indexOf(searchedQueryName.toLowerCase()) !==
      -1
  );

  const sortEmployeelistAge = () => {
    console.log('age');
    let filterEmployeesAge = filterEmployees.sort(sortEmployeeAge);
    setFilterAge(filterEmployeesAge);
  };
  const sortEmployeeAge = (a, b) => {
    let nameA = parseFloat(a.age);
    let nameB = parseFloat(b.age);
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  };

  let sortEmployeelistSalary = () => {
    let filterEmployeesSalary = filterEmployees.sort(sortEmployeeSalary);
    setFilterSalary(filterEmployeesSalary);
  };

  let sortEmployeeSalary = (a, b) => {
    let nameA = parseFloat(a.salary);
    let nameB = parseFloat(b.salary);
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  };

  const handleSubmit = event => {
    event.preventDefault();

    setQueryName(event.target.employeeName.value);
  };

  const searchEmployeeName = event => {
    setQueryName(event.target.value);
  };

  const resetQuery = () => {
    setQueryName('');
    setFilterAge([]);
    setFilterSalary([]);
  };

  return (
    <div>
      <Header></Header>
      <div className="frow">
        <div className="col-md-3-10">
          {filterEmployees.map(employee => (
            <Card
              className="inital-list"
              key={employee.id}
              name={employee.name}
              salary={employee.salary}
              age={employee.age}
            />
          ))}
        </div>
        <div className="col-md-1-10">
          <Form
            onSubmit={handleSubmit}
            onChangeName={searchEmployeeName}
          ></Form>
          <div className="frow column-center pt-20">
            <button className="age-button" onClick={() => sortEmployeelistAge()}>Sort by Age</button>
            <button className="salary-button" onClick={() => sortEmployeelistSalary()}>
              Sort by Salary
            </button>
            <button className="reset-button" onClick={() => resetQuery('')}>Reset</button>
          </div>
        </div>

        <div className="col-md-3-10 salary-list">
          {filterEmployeesAge.map(employee => (
            <Card
              key={employee.id}
              name={employee.name}
              salary={employee.salary}
              age={employee.age}
            />
          ))}
        </div>
        <div className="col-md-3-10 salary-list">
          {filterEmployeesSalary.map(employee => (
            <Card
              key={employee.id}
              name={employee.name}
              salary={employee.salary}
              age={employee.age}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
