import React from 'react';

function SortCard(props) {
  return (
    <>
      <button onClick={props.buttonClick}>{props}</button>
    </>
  );
}

export default SortCard;
