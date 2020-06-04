import React from 'react';
import {connect} from 'react-redux';
import './progressWidget.css';

const ProgressWidget = (props) => {
  return (
    <div className="progress-widget">
      <div className="progress-widget-slider">
        <input type="range" value={props.progress} onChange={(evt) => {
          // TODO: Properly propagate this value and change properties of widget in app state accordingly (hint: via dispatch)
          console.log('Current value', evt.target.value);
        }}/>
      </div>

      <div className="progress-widget-current-value">
        {props.progress}&nbsp;%
      </div>
    </div>
  )
}

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  // TODO: Implement logic for changing of progress value
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressWidget);
