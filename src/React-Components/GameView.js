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
        <AsciiRenderer game={this.props.game} gridSize={this.props.gridSize}/>
        <h2>Controls would go here</h2>
      </div>
    );
  }
  handleKeyPress(e) {
    switch(e.keyCode) {
      case 37:
        //left
        break;
      case 38:
        //up
        break;
      case 39:
        //right
        break;
      case 40:
        //down
        break;
      default:
        break;
    }
    console.log(e.keyCode);
  }
}

export default GameView;