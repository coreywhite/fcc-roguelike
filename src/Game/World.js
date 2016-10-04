import Area from './Area.js'
import Cell from './Cell.js'

class World {
    constructor(seed) {
        this._seed = seed;
        this.areas = null;

        this.generate();
    }

    generate() {
        //Initialize the list of areas
        this.areas = [];
        //Add area definitions
        this.areas.push(new Area(this._seed, testGenerator, null, 'Test Area', 'Full of testing', 100, 100, 0));
        //Generate all areas
        for(let i = 0; i < this.areas.length; i++) {
            this.areas[i].generate();
        }
    }
}

const testGenerator = function(seed, area) {
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

export default World;