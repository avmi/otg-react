import React from 'react';
import './App.css';
import {Canvas} from "./components/Canvas/canvas";
import * as EventTypes from './eventTypes';

class App extends React.Component {
  state = {
    clients: {
      list: [],
    },
    widgets: {
      1: {
        id: 1,
        type: 'text',
        properties: {
          value: 'Hello from Widget 1',
        },
        x: 10,
        y: 30,
        width: 100,
        height: 50,
      },

      2: {
        id: 2,
        type: 'text',
        properties: {
          value: 'The London is the capital of Great Britain',
        },
        x: 350,
        y: 200,
        width: 200,
        height: 350,
      },

      3: {
        id: 3,
        type: 'progress',
        properties: {
          progress: 50,
        },
        x: 250,
        y: 100,
        width: 200,
        height: 50,
      },
    }
  }

  dispatch = (action) => {
    switch (action.type) {
      case EventTypes.WIDGET_POSITION_CHANGE:
        this.setState({
          widgets: {
            ...this.state.widgets,
            [action.data.id]: {
              ...this.state.widgets[action.data.id],
              x: action.data.x,
              y: action.data.y,
            }
          }
        })
        break;

      case EventTypes.WIDGET_SIZE_CHANGE:
        this.setState({
          widgets: {
            ...this.state.widgets,
            [action.data.id]: {
              ...this.state.widgets[action.data.id],
              width: action.data.width,
              height: action.data.height,
            }
          }
        })
        break;
    }
  }

  render() {
    return (
      <div className="app">
        <Canvas
          widgets={this.state.widgets}
          dispatch={this.dispatch}
        />
      </div>
    );
  }
}

export default App;
