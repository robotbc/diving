import React, { Component } from 'react';
import Color from 'color';
import './App.css';

const divingPic = 'https://goo.gl/HYUf8S';

const easyGif = 'https://goo.gl/4O7B4p';
const hardGif = 'https://media.giphy.com/media/1O0ni8jsnDrO/giphy.gif';

const easyText = 'easy';
const hardText = 'hard';

const easyColor = '#1abc9c';
const hardColor = '#e74c3c';

const lighten = hex => Color(hex)
  .lighten(0.7)
  .hslString();

class App extends Component {
  constructor() {
    super();

    this.toggleDifficulty = this.toggleDifficulty.bind(this);
    this.state = {
      difficulty: easyText,
      color: easyColor,
      gif: easyGif,
    };
  }

  toggleDifficulty() {
    if (this.state.difficulty === easyText) {
      this.setState({
        difficulty: hardText,
        color: hardColor,
        gif: hardGif,
      });
    } else {
      this.setState({
        difficulty: easyText,
        color: easyColor,
        gif: easyGif,
      });
    }
  }

  render() {
    const { gif, difficulty, color } = this.state;

    return (
      <div className="App" style={{ backgroundColor: lighten(color) }}>
        <div className="App-header" style={{ backgroundColor: color }}>
          <img
            src={divingPic}
            className="App-logo"
            onClick={this.toggleDifficulty}
            alt="logo"
          />
          <h2>Diving is {difficulty}</h2>
        </div>

        <div style={{ paddingTop: 200 }}>
          <img src={gif} />
        </div>
      </div>
    );
  }
}

export default App;
