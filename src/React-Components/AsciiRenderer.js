import React, { Component } from 'react';
import AsciiTile from './AsciiTile.js'
import './AsciiRenderer.css';

class AsciiRenderer extends Component {
    componentWillMount() {
        
    }
    render() {
        let game = this.props.game;
        let style = {
            height: game.rows * this.props.gridSize,
            width: game.cols * this.props.gridSize
        };
        let gameTiles = game.getRenderData();
        console.log(gameTiles);
        let tiles = [];
        for(var i = 0; i < gameTiles.length; i++) {
            tiles.push(<AsciiTile gridSize={this.props.gridSize} row={gameTiles[i].row} col={gameTiles[i].col} renderData={gameTiles[i].data} />);
        }
        console.log(tiles);
        return (
            <div className='renderer' style={style}>
                {tiles}
            </div>
        );
  }
}

export default AsciiRenderer;