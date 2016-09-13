import React, { Component } from 'react';
import './AsciiTile.css';


class AsciiTile extends Component {
    render() {
        let glyph = '';
        let style = {
            top: this.props.row * this.props.gridSize,
            left: this.props.col * this.props.gridSize,
            height: this.props.gridSize,
            width: this.props.gridSize,
            fontSize: this.props.gridSize - 2
        };

        if(this.props.renderData) {
            style['color'] = this.props.renderData.foreColor;
            style['backgroundColor'] = this.props.renderData.bgColor;
            glyph = this.props.renderData.glyph || glyph;
        }

        return (
            <div className='tile' style={style}>
                {glyph}
            </div>
        );
  }
}

export default AsciiTile;