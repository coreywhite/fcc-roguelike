import React, { Component } from 'react';
import './Tile.css';


class Tile extends Component {
    render() {
        let style = {
            top: this.props.row * this.props.gridSize,
            left: this.props.col * this.props.gridSize,
            color: this.props.foreColor,
            backgroundColor: this.props.bgColor,
            height: this.props.gridSize,
            width: this.props.gridSize,
            fontSize: this.props.gridSize - 2
        };

        let content = this.props.content || '';

        return (
            <div className='tile' style={style}>
                {content}
            </div>
        );
  }
}

export default Tile;