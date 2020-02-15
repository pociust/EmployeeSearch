import React from 'react';

function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="employeeName"
        onChange={props.onChangeName}
      ></input>
      {/* <input
        type="number"
        placeholder="Age"
        name="employeeAge"
        onChange={props.onChangeAge}
      ></input>
      Search by minimum age
      <input
        type="number"
        placeholder="Salary"
        name="employeeAge"
        onChange={props.onChangeSalary}>
      </input> */}
    </form>
  );
}

export default Form;
