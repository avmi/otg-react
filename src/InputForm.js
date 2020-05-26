import React from 'react';
import Toolbar from "./Toolbar";
import './InputForm.css';

class InputForm extends React.Component {

  handleLevelChanged = (value) => {
    this.props.onLevelChanged(value);
  }

  handleInputChanged = (evt) => {
    this.props.onInputChanged(evt.target.value);
  }

  render() {
    return (
      <div className="form">
        <div className="input-box">
          <input type="text" value={this.props.input} onChange={this.handleInputChanged} />
        </div>

        <Toolbar level={this.props.level} onLevelChanged={this.handleLevelChanged} />
      </div>
    );
  }
}

export default InputForm;
