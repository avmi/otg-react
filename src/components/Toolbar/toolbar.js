import React from 'react';
import './toolbar.css';

export default function Toolbar(props) {
  return (
    <div className="command-toolbar">
      {props.children}
    </div>
  )
}
