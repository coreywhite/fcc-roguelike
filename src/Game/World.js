import Area from './Area.js'
import Cell from './Cell.js'
import caveGenerator from './Generation/CaveGenerator.js'

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
        this.areas.push(new Area(this._seed, caveGenerator, null, 'Cave', 'A deep, dark, dank cavern', 100, 100, 0));
        //Generate all areas
        for(let i = 0; i < this.areas.length; i++) {
            this.areas[i].generate();
        }
    }
}

export default World;