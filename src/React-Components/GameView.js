import React, { Component } from 'react';
import Immuntable from 'immutable';
import AsciiRenderer from './AsciiRenderer.js'
import './GameView.css';

class TestButton extends Component {
  render(){
    return(
      <div>
        <button onClick={this.props.action}>TEST</button>
      </div>
    );
  }
}

class GameView extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.testAction = this.testAction.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <div className="game">
        <h1>Roguelike Game</h1>
        <AsciiRenderer  controller={this.props.controller}
                        rows={25}
                        cols={80}
                        renderSettings={this.props.renderSettings}/>
        <h2>Controls would go here</h2>
        <TestButton action={this.testAction} />
      </div>
    );
  }

  testAction() {
    let sendCommand = this.props.controller.commandHandler;
    setInterval(sendCommand.bind(null, "right"), 1);
    // for(let i = 0; i < 30; i++) {
    //   sendCommand("right");
    //   sendCommand("up");
    // }
    // for(let i = 0; i < 30; i++) {
    //   sendCommand("right");
    //   sendCommand("down");
    // }
    // for(let i = 0; i < 30; i++) {
    //   sendCommand("down");
    //   sendCommand("left");
    // }
  }

  handleKeyPress(e) {
    let sendCommand = this.props.controller.commandHandler;
    switch(e.keyCode) {
      case 37:
        sendCommand("left");
        break;
      case 38:
        sendCommand("up");
        break;
      case 39:
        sendCommand("right");
        break;
      case 40:
        sendCommand("down");
        break;
      default:
        break;
    }
  }
}

export default GameView;