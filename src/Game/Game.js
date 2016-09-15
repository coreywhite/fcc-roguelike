import Cell from './Cell.js'
import RenderController from '../UIController/RenderController.js'

class Game {
    constructor(controller) {
        this.controller = controller;
        this.rows = 100;
        this.cols = 100;
        this.world = this.createWorld();
        this.entities = this.createEntities();
        this.player = this.createPlayer();
        this.viewport = controller.makeViewport(this.player.area, this.player.position, 40, 24);
    }

    createWorld() {
        let areas=[], map = [];
        for(let i = 0; i < this.rows; i++) {
            let row = [];
            for(let j = 0; j < this.cols; j++) {
                row.push(new Cell(this, i, j, "wall", false));
            }
            map.push(row);
        }

        //testing
        const dig = (tile) => {
            tile.type = "floor";
        }
        for(let n = -1; n <= 1; n++) {
            for(let i = 2; i < this.rows - 2; i++) {
                let tile = map[i][Math.floor(this.cols/2)+n];
                dig(tile);
            }
            for(let j = 1; j < this.cols - 3; j++) {
                let tile = map[Math.ceil(this.rows/2)+n][j];
                dig(tile);
            }
        }
        // let startTile = map[Math.ceil(this.rows/2)][Math.floor(this.cols/2)];
        // startTile.foreColor = "black";
        // startTile.content = "@";
        areas.push({height: this.rows, width: this.cols, cells: map});
        let world = {
            areas: areas
        }
        return world;
    }

    createEntities() {
        let entities = [];
        entities.push({
            area: this.world.areas[0],
            row: 14,
            col: 14,
            getRenderData() {
                return {
                    glyph: 'M',
                    color: 'green'
                };
            }
        })
        return entities;
    }
    
    createPlayer() {
        let area = this.world.areas[0];
        let cell = area.cells[Math.ceil(this.rows/2)][Math.floor(this.cols/2)];
        return {
            name: 'Player',
            area: area,
            position: cell.getPosition()
        };
    }

    getRenderData() {
        let tiles = [];
        let area = this.world.areas[0];
        for(let i = 0; i < area.height; i++) {
            for(let j = 0; j < area.width; j++) {
                let tile = area.cells[i][j].getRenderData();
                tiles.push(tile);
            }
        }
        return tiles;
    }


}

export default Game;

