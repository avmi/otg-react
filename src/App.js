import React from 'react';
import './App.css';
import InputForm from "./InputForm";
import Preview from "./Preview";

class App extends React.Component {

  state = {
    input: "Preview Text",
    level: 3
  }

  handleLevelChanged = (value) => {
    this.setState({
      level: value
    });
  }

  handleInputChanged = (value) => {
    this.setState({
      input: value
    });
  }

  render() {
    return (
      <div className="app">
        <Preview level={this.state.level}>{this.state.input}</Preview>

        <InputForm onInputChanged={this.handleInputChanged} onLevelChanged={this.handleLevelChanged}
                   input={this.state.input} level={this.state.level}/>
      </div>
    );
  }
}

export default App;
