import React from 'react';
import {Widget} from "../Widget/widget";

export function Canvas(props) {
  return (
    <>
      {Object.keys(props.widgets).map((widgetKey) => {
        const widgetData = props.widgets[widgetKey]
        return (
          <Widget
            key={widgetKey}
            {...widgetData}
            dispatch={props.dispatch}
          />
        )
      })}
    </>
  )
}
