import React from 'react';
import {Widget} from "../Widget/widget";

export function Canvas(props) {
  return (
    <>
      {props.widgets.map((widget) => (
        <Widget key={widget.id} {...widget} />
      ))}
    </>
  )
}
