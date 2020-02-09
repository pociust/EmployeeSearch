import React from 'react';

function Card(props) {
  return (
    <ul>
      <li>
        <strong>Name:</strong> {props.name}
      </li>
      <li>
        <strong>Occupation:</strong> {props.occupation}
      </li>
    </ul>
    /* <span className="remove" onClick={() => props.removeFriend(props.id)}>𝘅</span> */
  );
}

export default Card;
