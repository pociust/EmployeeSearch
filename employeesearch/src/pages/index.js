import React, { useState } from 'react';
import Card from '../components/Card';
import Form from '../components/Form';
import SortCard from './../components/SortCard';
import '../styles/style.css';

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
    // filteredEmployeesByName.sort(employees.name);
  };

  let sortEmployeelistSalary = () => {
    console.log('sort');
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
    // filteredEmployeesByName.sort(employees.name);
  };

  // if (searchedQueryAge !== '') {
  //   var filteredEmployeesByAge = employees.filter(
  //     employee => employee.age >= searchedQueryAge
  //   );
  // } else {
  //   filteredEmployeesByAge = employees;
  // }

  // if (searchQuerySalary !== '') {
  //   var filteredEmployeesBySalary = employees.filter(
  //     employee => parseFloat(employee.salary) <= parseFloat(searchQuerySalary)
  //   );
  // } else {
  //   filteredEmployeesBySalary = employees;
  // }

  const handleSubmit = event => {
    event.preventDefault();

    setQueryName(event.target.employeeName.value);
  };

  const searchEmployeeName = event => {
    setQueryName(event.target.value);
  };

  // const searchAge = event => {
  //   setQueryAge(event.target.value);
  // };

  // const searchSalary = event => {
  //   setQuerySalary(event.target.value);
  // };

  return (
    <div>
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
            // onChangeAge={searchAge}
            // onChangeSalary={searchSalary}
          ></Form>
          <button onClick={() => sortEmployeelistAge()}>Sort by Age</button>
          <button onClick={() => sortEmployeelistSalary()}>
            Sort by Salary
          </button>
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
