import React from 'react';
import { Provider } from 'react-redux'
import Canvas from "./components/Canvas/canvas";
import CommandToolbar from './components/CommandToolbar/commandToolbar';
import Popup from "./components/Popup/popup";

import {store} from './redux/store';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <CommandToolbar/>
          <Canvas/>

          {true && (
            <Popup title="Dialog Title">
              Some dialog content
            </Popup>
          )}
        </div>
      </Provider>
    );
  }
}

export default App;
