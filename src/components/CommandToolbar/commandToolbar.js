import React from 'react';
import {connect} from 'react-redux';

import Toolbar from '../Toolbar/toolbar';

const CommandToolbar = (props) => {
  // TODO: Properly display "active" state of some buttons (alignment, bold, italic etc)
  // TODO: Properly decompose toolbar for formatting

  // TODO: Implement conditional appearance of font formatting set of buttons when text widget is selected
  const isTextWidgetSelected = false;

  return (
    <Toolbar>
      <button>Add Text</button>
      <button>Add Progress</button>

      <div className="separator"/>

      <button>Delete</button>

      <div className="separator"/>

      <button>Move Up</button>
      <button>Move Down</button>

      <div className="separator"/>

      <button>Random Size</button>
      <button>Random Position</button>

      {isTextWidgetSelected && (
        <>
          <div className="separator"/>

          <label>Font size:</label>
          <select>
            {[10, 14, 20, 32, 48].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <div className="separator"/>

          <button><strong>B</strong></button>
          <button><em>I</em></button>

          <div className="separator"/>

          <label>Align:</label>
          <button>LEFT</button>
          <button>CENTER</button>
          <button>RIGHT</button>
        </>
      )}

      <div className="separator"/>

      <button>Open Document</button>
      <button>Save Document</button>
    </Toolbar>
  )
}

function mapStateToProps() {
  /*
   TODO:
   Implement all state projection, required to properly display status of buttons
   (enabled/disabled, depending on actual selection)
   */
  return {
  };
}

const mapDispatchToProps = (dispatch) => {
  // TODO: Implement logic for all key operations with toolbar buttons
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommandToolbar);
