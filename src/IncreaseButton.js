import React from 'react';

class IncreaseButton extends React.Component {
  handleClick = () => {
    if (this.props.value < this.props.max) {
      this.props.onClick(this.props.value + 1);
    }
  }

  render() {
    return (
      <button disabled={this.props.value === this.props.max} onClick={this.handleClick}>+</button>
    );
  }
}

export default IncreaseButton;
