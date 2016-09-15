import React, { Component } from 'react';
import AsciiRenderer from './AsciiRenderer.js'
import './GameView.css';


class GameView extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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
                        rows={24}
                        cols={40}
                        renderSettings={this.props.renderSettings}/>
        <h2>Controls would go here</h2>
      </div>
    );
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