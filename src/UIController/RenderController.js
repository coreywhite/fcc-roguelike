import React from 'react';
import ReactDOM from 'react-dom';
import Viewport from './Viewport.js';
import GameView from '../React-Components/GameView.js';

class RenderController {
    constructor(rootNode, renderSettings) {
        this.rootNode = rootNode;
        this.renderSettings = renderSettings;
        this.viewport = null;
        this.renderCallback = null;
        this.init();
        this.commandHandler = this.commandHandler.bind(this);
    }

    init() {
        ReactDOM.render(<GameView   controller={this}
                                    renderSettings={this.renderSettings} />,
                        this.rootNode);
    }

    makeViewport(area, topLeft, width, height) {
        this.viewport = new Viewport(area, topLeft, width, height);
        console.log('Set viewport');
        return this.viewport;
    }

    registerRenderer(callback) {
        this.renderCallback = callback;
        console.log('Registered renderer');
    }

    commandHandler(command) {
        switch(command) {
        case "left":
            this.viewport.translate({dx: -1, dy: 0});
            break;
        case "right":
            this.viewport.translate({dx: 1, dy: 0});
            break;
        case "up":
            this.viewport.translate({dx: 0, dy: -1});
            break;
        case "down":
            this.viewport.translate({dx: 0, dy: 1});
            break;
        default:
            break;
        }
        this.render();
    }

    render() {
        if(this.viewport && this.renderCallback) {
            this.renderCallback(this.viewport.getRenderData());
        }
    }

}

export default RenderController;