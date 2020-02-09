import React from 'react';


function Form (props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text" placeholder="Name" name="employeeName" onChange={props.onChange}>
        
      </input>
    </form>
  )

}


export default Form;