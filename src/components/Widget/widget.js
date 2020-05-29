import React from 'react';
import './widget.css';
import {TextWidget} from "../TextWidget/textWidget";
import {ProgressWidget} from "../ProgressWidget/progressWidget";
import * as EventTypes from '../../redux/eventTypes';
import {connect} from 'react-redux';

const Widget = (props) => {
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

      <button onClick={() => props.processPositionChange(props.id)}>POS</button>
      <button onClick={() => props.processSizeChange(props.id)}>SIZE</button>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    ...state.widgets[ownProps.widgetId],
  }
}

const mapDispatchToProps = (dispatch) => {
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
