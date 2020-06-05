import React from 'react';
import {Toolbar} from "./Toolbar";
import './InputForm.css';

export function InputForm(props) {

  const handleLevelChanged = (value) => {
    props.onLevelChanged(value);
  }

  const handleInputChanged = (evt) => {
    props.onInputChanged(evt.target.value);
  }

  return (
    <div className="form">
      <div className="input-box">
        <input type="text" value={props.input} onChange={handleInputChanged}/>
      </div>

      <Toolbar level={props.level} onLevelChanged={handleLevelChanged}/>
    </div>
  );
}
