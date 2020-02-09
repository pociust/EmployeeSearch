import React from 'react';


function Form (props) {
  return (
    <form onSubmit = {props.onSubmit}>
      <input type="text" placeholder="Name" name="employeeName">
        
      </input>
    </form>
  )

}


export default Form;