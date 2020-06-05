import React from 'react';
import './Preview.css';

export function Preview(props) {
  const element = React.createElement(`h${props.level}`, null, props.children);
  return (
    <div className="preview-box">
      {element}
    </div>
  );
}
