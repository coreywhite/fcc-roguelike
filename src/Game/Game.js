import Cell from './Cell.js'
import Area from './Area.js'
import World from './World.js'
import RenderController from '../UIController/RenderController.js'

class Game {
    constructor(controller) {
        this.controller = controller;
        this.world = new World(1);

        this.world.generate();
        //this.entities = this.createEntities();
        this.player = this.createPlayer();
        this.controller.registerAction("smooth", this.player.area.smooth);
        this.viewport = controller.makeViewport(this.player.area, this.player.position, 30, 20);
    }

    // createEntities() {
    //     let entities = [];
    //     entities.push({
    //         area: this.world.areas[0],
    //         row: 14,
    //         col: 14,
    //         getRenderData() {
    //             return {
    //                 glyph: 'M',
    //                 color: 'green'
    //             };
    //         }
    //     })
    //     return entities;
    // }
    
    createPlayer() {
        let area = this.world.areas[0];
        let cell = area.cells[Math.ceil(area.height/2)][Math.floor(area.width/2)];
        let player = {
            name: 'Player',
            area: area,
            position: cell.getPosition(),
            renderData: {
                glyph: "@",
                foreColor: "yellow",
                bgColor: "blue"
            }
        };
        area.addEntity(player);
        return player;
    }


}

export default Game;

