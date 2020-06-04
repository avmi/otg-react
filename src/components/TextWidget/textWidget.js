import React from 'react';
import './textWidget.css';

export default function TextWidget(props) {
  return (
    <div className="text-widget">
      {props.value}
    </div>
  )
}
