import React from 'react';

class DecreaseButton extends React.Component {
  handleClick = () => {
    if (this.props.value > this.props.min) {
      this.props.onClick(this.props.value - 1);
    }
  }

  render() {
    return (
      <button disabled={this.props.value === this.props.min} onClick={this.handleClick}>-</button>
    );
  }
}

export default DecreaseButton;
