import React from 'react';
import {connect} from 'react-redux';

import * as EventTypes from '../../redux/eventTypes';

import TextWidget from "../TextWidget/textWidget";
import ProgressWidget from "../ProgressWidget/progressWidget";

import './widget.css';

const Widget = (props) => {
  // TODO: Properly display "selected" state of widget
  // TODO: Add ability to "select" widget by clicking on it, while bypassing some event allowing them to be handled by inner components (like progress slider or whatever)
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

function mapStateToProps(state, ownProps) {
  return {
    ...state.widgets[ownProps.widgetId],
  }
}

const mapDispatchToProps = (dispatch) => {
  // TODO: Map actual methods which might be appropriate for widget manipulations (like selection)
  // TODO: Methods below are left just for copy-paste convenience to other appropiate place
  return {
    processPositionChange: (id) => {
      dispatch({
        type: EventTypes.WIDGET_POSITION_CHANGE,
        data: {
          id: id,
          x: Math.round(50 + (Math.random() * 300)),
          y: Math.round(50 + (Math.random() * 300)),
        },
      })
    },
    processSizeChange: (id) => {
      dispatch({
        type: EventTypes.WIDGET_SIZE_CHANGE,
        data: {
          id: id,
          width: Math.round(100 + (Math.random() * 200)),
          height: Math.round(50 + (Math.random() * 100)),
        },
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widget)
