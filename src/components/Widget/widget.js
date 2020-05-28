import React from 'react';
import './widget.css';
import {TextWidget} from "../TextWidget/textWidget";
import {ProgressWidget} from "../ProgressWidget/progressWidget";
import * as EventTypes from '../../eventTypes';

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

      <button onClick={() => {
        props.dispatch({
          type: EventTypes.WIDGET_POSITION_CHANGE,
          data: {
            id: props.id,
            x: Math.round(50 + (Math.random() * 300)),
            y: Math.round(50 + (Math.random() * 300)),
          },
        })
      }}>POS</button>

      <button onClick={() => {
          props.dispatch({
            type: EventTypes.WIDGET_SIZE_CHANGE,
            data: {
              id: props.id,
              width: Math.round(100 + (Math.random() * 200)),
              height: Math.round(50 + (Math.random() * 100)),
            },
          })
      }}>SIZE</button>
    </div>
  )
}
