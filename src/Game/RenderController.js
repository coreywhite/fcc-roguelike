import React from 'react';
import ReactDOM from 'react-dom';
import Viewport from './Viewport.js';

class RenderController {
    constructor(container, renderData, renderSettings) {
        this.container = container;
        this.renderData = renderData;
        this.renderSettings = renderSettings;
    }

    render() {
        ReactDOM.render(
            <GameView game={game} gridSize={GRID_SIZE} />,
            document.getElementById('root')
        );
    }

}

export default Renderer;