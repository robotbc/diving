import React, { Component } from 'react';
import { lighten } from './utils';
import './App.css';

const divingPic = 'https://goo.gl/HYUf8S';

const easyGif = 'https://goo.gl/4O7B4p';
const hardGif = 'https://media.giphy.com/media/1O0ni8jsnDrO/giphy.gif';

const easyText = 'easy';
const hardText = 'hard';

const easyColor = '#1abc9c';
const hardColor = '#e74c3c';

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

const pipeUrl =
  'http://brownie.blog.br/wp-content/uploads/2016/08/cano-mario.png'

const powUrl =
  'http://www.clipartkid.com/images/364/mini-comic-sound-effect-decals-boom-zam-ka-pow-LEYAGq-clipart.jpg'

const backgroundUrl = 
  'https://cdn.rawgit.com/bhauman/flappy-bird-demo/master/resources/public/imgs/background.png'

const gameOverUrl =
  'http://www.ruwhim.com/wp-content/uploads/2014/02/flappybird_fulmer.jpg'
var pipe1 = new Image({
  url: pipeUrl ,
  width: 70, 
  height: 150, 
  x:738,
  y:-100
  })
var pipe2 = new Image({
  url: pipeUrl ,
  width: 70, 
  height: 150, 
  x:738,
  y:380
}) 
const bird = new Image({
  url: "http://i.imgur.com/VnRkpf1.png",
  width: 60,
  height: 40,
})

const jump = 
  () => bird.y += 85;

const reset = () => {
  setBackdropURL(backgroundUrl)
  return (bird.y = 50)
}

ready(() => {
  reset()

  ready(() => {
  forever(() => {
  pipe1.x += -7
  pipe2.x += -7
  })
})  
  
  forever(() => {
    
  })
  forever(() => {
    if (bird.y <= minY) {
      return setBackdropURL(gameOverUrl)
       return  (pipe1.x = maxX)
       return (pipe2.x = maxX)
    } else if (bird.y >= maxY) {
      setBackdropURL(powUrl)
    } else {
      setBackdropURL(backgroundUrl)
    }
    
    return bird.y += -12
  })
})

onKeyDown(key => {
  switch (key) {
    case 'ESCAPE':
      return reset();
      
    case 'SPACE':
      return jump();
      
    default:
      return
  }
})

onMouseDown(jump)
