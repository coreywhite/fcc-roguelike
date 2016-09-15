import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game/Game.js';
import RenderController from './UIController/RenderController.js'
import GameView from './React-Components/GameView.js';
import './index.css';

const renderSettings = {
  gridSize: 16
};

let root = document.getElementById('root'); 
let controller = new RenderController(root, renderSettings);
let game = new Game(controller);
controller.render();

//game.render();
