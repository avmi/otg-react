import React from 'react';
import './popup.css';

export default function Popup(props) {
  // TODO: Implement X button click - cancels dialog
  // TODO: Add shared buttons - OK and Cancel, which act appropriately and close dialog
  return (
    <div className="popup-dialog">
      <div className="popup-dialog-title">
        <h2>{props.title}</h2>
        <button>X</button>
      </div>

      <div className="popup-dialog-content">
        {props.children}
      </div>
    </div>
  )
}
