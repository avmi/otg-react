import React from 'react';

export function IncreaseButton(props) {
  const handleClick = () => {
    if (props.value < props.max) {
      props.onClick(props.value + 1);
    }
  }

  return (
    <button disabled={props.value === props.max} onClick={handleClick}>+</button>
  );
}
