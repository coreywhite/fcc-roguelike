import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game/Game.js';
import GameView from './React-Components/GameView.js';
import './index.css';

const GRID_SIZE = 16; 
let game = new Game(30, 30);
let renderer = new Renderer(document.getElementById('root'));

ReactDOM.render(
  <GameView game={game} gridSize={GRID_SIZE} />,
  document.getElementById('root')
);
