import React from 'react';
import { Provider } from 'react-redux'
import Canvas from "./components/Canvas/canvas";
import CommandToolbar from './components/CommandToolbar/commandToolbar';
import Popup from "./components/Popup/popup";

import {store} from './redux/store';

import './App.css';
import OpenPopup from "./components/OpenPopup/openPopup";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <CommandToolbar/>
          <Canvas/>

          <OpenPopup/>
        </div>
      </Provider>
    );
  }
}

export default App;
