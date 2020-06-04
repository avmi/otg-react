import React from 'react';
import {DecreaseButton} from "./DecreaseButton";
import {IncreaseButton} from "./IncreaseButton";
import './Toolbar.css';

export function Toolbar(props) {
  const handleButtonClick = (value) => {
    props.onLevelChanged(value);
  }

  const onLevelSelected = (evt) => {
    props.onLevelChanged(Number(evt.target.value));
  }

  return (
    <div className="toolbar">
      <DecreaseButton min={1} value={props.level} onClick={handleButtonClick}/>

      <select onChange={onLevelSelected} value={props.level}>
        <option value={1}>h1</option>
        <option value={2}>h2</option>
        <option value={3}>h3</option>
        <option value={4}>h4</option>
        <option value={5}>h5</option>
        <option value={6}>h6</option>
      </select>

      <IncreaseButton max={6} value={props.level} onClick={handleButtonClick}/>
    </div>
  );
}
