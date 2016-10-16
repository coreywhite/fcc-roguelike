import Cell from './Cell.js'
import {gridMap} from '../Utilities/grid.js'
import {smoothBinary} from '../Utilities/grid.js'
import gridGenerator from './Generation/GridGenerator.js'

class Area {
    constructor(worldSeed,
                cellGenerator,
                entityGenerator,
                name,
                description,
                width,
                height,
                depth)
    {
        this._seed = worldSeed; //TODO: change this to hash based on area name or something
        this._cellGenerator = cellGenerator;
        this._entityGenerator = entityGenerator;

        this.name = name;
        this.description = description;
        this.width = width;
        this.height = height;
        this.depth = depth;
        
        this.cells = null;
        this.entities = null;

        this.generate();

        this.smooth = this.smooth.bind(this);
    }

    generate() {
        if(this._cellGenerator) {
            this.cells = this._cellGenerator(this._seed, this);
        } else {
            this.cells = [];
        }

        if(this._entityGenerator) {
            this.entities = this._entityGenerator(this._seed, this);
        } else {
            this.entities = [];
        }
    }

    smooth() {
        //Temporary function (for testing) to smooth an area
        let tileTypeMap = {
            '0': {type: 'wall', passable: false},
            '1': {type: 'floor', passable: true}
        };
        let curGrid = gridMap(this.cells, cell => {return cell.passable ? 1 : 0;});
        let smoothGrid = smoothBinary(curGrid, 1, 1);
        this.cells = gridGenerator(this, smoothGrid, tileTypeMap);
    }

    addEntity(entity) {
        //TODO: trigger events upon adding an entity to the area
        this.entities.push(entity);
    }

    getEntity(row, col) {
        //TODO: completely replace this. Just a placeholder. Maybe move to a map keyed on position?
        for(let i = 0; i < this.entities.length; i++) {
            if(entities[i].position.x === col && entities[i].position.y === row) {
                return entities[i];
            }
        }
        return null;
    }
}

export default Area;

