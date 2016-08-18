import React, { Component } from 'react';
import Tile from './Tile.js'
import './Renderer.css';

class Renderer extends Component {
    render() {
        let game = this.props.game;
        let style = {
            height: game.rows * this.props.gridSize,
            width: game.cols * this.props.gridSize
        };
        let tiles = [];
        for(var i = 0; i < game.rows; i++) {
            for(var j = 0; j < game.cols; j++) {
                let gameTile = game.map[i][j];
                tiles.push(<Tile gridSize={this.props.gridSize} row={gameTile.row} col={gameTile.col} content={gameTile.content} foreColor={gameTile.foreColor} bgColor={gameTile.bgColor}/>);
            }
        }
        return (
            <div className='renderer' style={style}>
                {tiles}
            </div>
        );
  }
}

export default Renderer;