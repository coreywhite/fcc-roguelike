import React, { Component } from 'react';
import Renderer from './Renderer'
import './GameView.css';


class GameView extends Component {
  render() {
    return (
      <div className="game">
        <h1>Roguelike Game</h1>
        <Renderer game={this.props.game} gridSize={this.props.gridSize}/>
        <h2>Controls would go here</h2>
      </div>
    );
  }
}

export default GameView;
