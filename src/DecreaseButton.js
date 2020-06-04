import React from 'react';

export function DecreaseButton(props) {
  const handleClick = () => {
    if (props.value > props.min) {
      props.onClick(props.value - 1);
    }
  }

  return (
    <button disabled={props.value === props.min} onClick={handleClick}>-</button>
  );
}
