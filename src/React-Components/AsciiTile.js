import React, { Component } from 'react';
import './AsciiTile.css';


class AsciiTile extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.renderData !== nextProps.renderData;
    }
    render() {
        let defaults = {
            foreColor: 'white',
            bgColor: 'black',
            glyph: ''
        }
        
        let style = {
            top: this.props.row * this.props.tileHeight,
            left: this.props.col * this.props.tileWidth,
            height: this.props.tileHeight,
            width: this.props.tileWidth,
            fontSize: this.props.tileHeight - 1,
            color: defaults.foreColor,
            backgroundColor: defaults.bgColor
        };

        let glyph = defaults.glyph;

        if(this.props.renderData) {
            style['color'] = this.props.renderData.get('foreColor') || defaults.foreColor;
            style['backgroundColor'] = this.props.renderData.get('bgColor') || defaults.bgColor;
            glyph = this.props.renderData.get('glyph') || defaults.glyph;
        }
        
        return (
            <div className='tile' style={style}>
                {glyph}
            </div>
        );
  }
}

export default AsciiTile;