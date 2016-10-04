import Cell from './Cell.js'

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

