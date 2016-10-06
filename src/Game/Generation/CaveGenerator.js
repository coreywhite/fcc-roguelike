import {getRandomGrid} from '../../Utilities/random.js'
import {gridMap} from '../../Utilities/grid.js'
import Cell from '../Cell.js'

export default function caveGenerator(seed, area) {
    let width = area.width;
    let height = area.height;
    let tileTypeMap = {
        '0': {type: 'wall', passable: false},
        '1': {type: 'floor', passable: true}
    };
    
    return gridMap(getRandomGrid(seed, height, width), (row, col, val) => {
        let typeKey = Math.round(val);
        return new Cell(area, row, col, tileTypeMap[typeKey].type, tileTypeMap[typeKey].passable);
    });
}