import Cell from './Cell.js'
import Area from './Area.js'
import RenderController from '../UIController/RenderController.js'

class Game {
    constructor(controller) {
        this.controller = controller;
        this.rows = 100;
        this.cols = 100;
        this.world = this.createWorld();
        this.entities = this.createEntities();
        this.player = this.createPlayer();
        this.viewport = controller.makeViewport(this.player.area, this.player.position, 30, 20);
    }

    createWorld() {
        let areas=[];
        let testGenerator = function(seed, area) {
            let map = [];
            for(let i = 0; i < area.height; i++) {
                let row = [];
                for(let j = 0; j < area.width; j++) {
                    row.push(new Cell(area, i, j, "wall", false));
                }
                map.push(row);
            }
            const dig = (tile) => {
                tile.type = "floor";
            }
            for(let n = -2; n <= 2; n++) {
                for(let i = 2; i < area.height - 2; i++) {
                    let tile = map[i][Math.floor(area.width/2)+n];
                    dig(tile);
                }
                for(let j = 1; j < area.width - 2; j++) {
                    let tile = map[Math.ceil(area.height/2)+n][j];
                    dig(tile);
                }
            }
            return map;
        }
        let testArea = new Area(1, testGenerator, null, 'Test Area', 'Full of testing', this.cols, this.rows, 0);
        testArea.generate();
        areas.push(testArea);
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

