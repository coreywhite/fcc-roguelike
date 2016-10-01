import React, { Component } from 'react';
import Immutable from 'immutable';
import AsciiTile from './AsciiTile.js'
import './AsciiRenderer.css';

class AsciiRenderer extends Component {
    constructor(props) {
        super(props);
        this.state = {renderData: null};
        this.updateRenderData = this.updateRenderData.bind(this);
    }
    componentWillMount() {
        this.props.controller.registerRenderer(this.updateRenderData);
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.renderData !== nextState.renderData
    //             || this.props.renderSettings.rows !== nextProps.renderSettings.rows
    //             || this.props.renderSettings.cols !== nextProps.renderSettings.cols
    //             || this.props.renderSettings.gridSize !== nextProps.renderSettings.gridSize;
    //             //TODO: || this.props.renderSettings !== nextProps.renderSettings;
    // }
    updateRenderData(renderData) {
        this.setState({renderData: renderData});
    }
    render() {
        let renderData = this.state.renderData;
        let renderSettings = this.props.renderSettings;
        let rows = renderSettings.rows;
        let cols = renderSettings.cols;
        let tileWidth = Math.ceil(renderSettings.gridSize * 2/3);
        let tileHeight = Math.ceil(renderSettings.gridSize);
        let style = {
            height: rows * tileHeight,
            width: cols * tileWidth
        };

        let tiles = [];
        if(renderData) {
            for(var i = 0; i < renderData.size; i++) {
                tiles.push(<AsciiTile   tileWidth = {tileWidth}
                                        tileHeight = {tileHeight}
                                        row = {renderData.get(i).get('row')}
                                        col = {renderData.get(i).get('col')}
                                        key = {renderData.get(i).get('row') + ", " + renderData.get(i).get('col')} 
                                        renderData = {renderData.get(i).get('renderData')} />);
            }
        }
        return (
            <div className='renderer' style={style}>
                {tiles}
            </div>
        );
    }
}

export default AsciiRenderer;