import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game.js';
import GameView from './GameView.js';
import './index.css';

const GRID_SIZE = 32; 
let game = new Game(10);

ReactDOM.render(
  <GameView game={game} gridSize={GRID_SIZE} />,
  document.getElementById('root')
);
