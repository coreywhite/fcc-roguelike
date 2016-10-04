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
}

export default Area;

