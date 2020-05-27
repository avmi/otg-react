import React from 'react';

export function ProgressWidget(props) {
  return (
    <div>
      <div style={{width: `${props.progress}%`, height: '20px', 'background': 'red'}}></div>
    </div>
  )
}
