import React from 'react';
import './App.css';
import Canvas from "./components/Canvas/canvas";
import { Provider } from 'react-redux'
import {store} from './redux/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Canvas/>
        </div>
      </Provider>
    );
  }
}

export default App;
