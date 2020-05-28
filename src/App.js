import React from 'react';
import './App.css';
import {Canvas} from "./components/Canvas/canvas";

class App extends React.Component {
  widgets = [
    {
      id: '1',
      type: 'text',
      properties: {
        value: 'Hello from Widget 1',
      },
      x: 10,
      y: 30,
      width: 100,
      height: 50,
    },

    {
      id: '2',
      type: 'text',
      properties: {
        value: 'The London is the capital of Great Britain',
      },
      x: 350,
      y: 200,
      width: 200,
      height: 350,
    },

    {
      id: '3',
      type: 'progress',
      properties: {
        progress: 50,
      },
      x: 250,
      y: 100,
      width: 200,
      height: 50,
    },
  ];

  render() {
    return (
      <div className="app">
        <Canvas widgets={this.widgets} />
      </div>
    );
  }
}

export default App;
