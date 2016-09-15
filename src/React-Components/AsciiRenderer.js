import React, { Component } from 'react';
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
    updateRenderData(renderData) {
        this.setState({renderData: renderData});
    }
    render() {
        let renderData = this.state.renderData;
        let rows = this.props.rows;
        let cols = this.props.cols;
        let renderSettings = this.props.renderSettings;
        let style = {
            height: rows * renderSettings.gridSize,
            width: cols * renderSettings.gridSize
        };
        let tiles = [];
        if(renderData) {
            for(var i = 0; i < renderData.length; i++) {
                tiles.push(<AsciiTile   gridSize={renderSettings.gridSize}
                                        row={renderData[i].row}
                                        col={renderData[i].col}
                                        key={renderData[i].row + ", " + renderData[i].col} 
                                        renderData={renderData[i].renderData} />);
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