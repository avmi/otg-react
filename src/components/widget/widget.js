import React from 'react';
import './widget.css';
import {TextWidget} from "../texWidget/textWidget";
import {ProgressWidget} from "../progressWidget/progressWidget";

export function Widget(props) {
  return (
    <div className="widget" style={{
      left: props.x,
      top: props.y,
      width: props.width,
      height: props.height,
    }}>
      {props.type === 'text' && (
        <TextWidget {...props.properties}/>
      )}
      {props.type === 'progress' && (
        <ProgressWidget {...props.properties}/>
      )}
    </div>
  )
}
