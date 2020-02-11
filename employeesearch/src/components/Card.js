import React from 'react';

function Card(props) {
  return (
    <ul>
      <li>
        <strong>Name:</strong> {props.name}
      </li>
      <li>
        <strong>Salary:</strong> ${props.salary}
      </li>
      <li>
        <strong>Age:</strong> {props.age}
      </li>
    </ul>
    /* <span className="remove" onClick={() => props.removeFriend(props.id)}>𝘅</span> */
  );
}

export default Card;
