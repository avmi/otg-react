import React from 'react';
import DecreaseButton from "./DecreaseButton";
import IncreaseButton from "./IncreaseButton";
import './Toolbar.css';

class Toolbar extends React.Component {
  handleButtonClick = (value) => {
    this.props.onLevelChanged(value);
  }

  onLevelSelected = (evt) => {
    this.props.onLevelChanged(Number(evt.target.value));
  }

  render() {
    return (
      <div className="toolbar">
        <DecreaseButton min={1} value={this.props.level} onClick={this.handleButtonClick}/>

        <select onChange={this.onLevelSelected} value={this.props.level}>
          <option value={1}>h1</option>
          <option value={2}>h2</option>
          <option value={3}>h3</option>
          <option value={4}>h4</option>
          <option value={5}>h5</option>
          <option value={6}>h6</option>
        </select>

        <IncreaseButton max={6} value={this.props.level} onClick={this.handleButtonClick}/>
      </div>
    );
  }
}

export default Toolbar;
