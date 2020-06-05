import React from 'react';
import './popup.css';
import {connect} from "react-redux";
import * as EventTypes from '../../redux/eventTypes';

const Popup = (props) => {
  // TODO: Implement X button click - cancels dialog
  // TODO: Add shared buttons - OK and Cancel, which act appropriately and close dialog
  return (
    <div className="popup-dialog">
      <div className="popup-dialog-title">
        <h2>{props.title}</h2>
        <button onClick={() => props.hidePopup()}>X</button>
      </div>

      <div className="popup-dialog-content">
        {props.children}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    hidePopup: () => dispatch({type: EventTypes.CANVAS_HIDE_POPUP})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup)
