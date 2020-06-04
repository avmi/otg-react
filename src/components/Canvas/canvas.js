import React from 'react';
import Widget from "../Widget/widget";
import {connect} from 'react-redux';
import './canvas.css';

const Canvas = (props) => {
  return (
    <div className="canvas">
      {Object.keys(props.widgets).map((widgetKey) => {
        return (
          <Widget
            key={widgetKey}
            widgetId={widgetKey}
          />
        )
      })}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    widgets: state.widgets,
  }
}

export default connect(mapStateToProps)(Canvas)
