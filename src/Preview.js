import React from 'react';
import './Preview.css';

class Preview extends React.Component {
  render() {
    const element = React.createElement(`h${this.props.level}`, null, this.props.children);
    return (
      <div className="preview-box">
        {element}
      </div>
    );
  }
}

export default Preview;
