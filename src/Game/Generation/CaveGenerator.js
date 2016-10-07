import {getRandomGrid} from '../../Utilities/random.js'
import {gridMap} from '../../Utilities/grid.js'
import Cell from '../Cell.js'

export default function caveGenerator(seed, area) {
    let width = area.width;
    let height = area.height;
    let multiplier = 4 / (height * width);
    let tileTypeMap = {
        '0': {type: 'wall', passable: false},
        '1': {type: 'floor', passable: true}
    };
    
    return gridMap(getRandomGrid(seed, height, width), (row, col, val) => {
        let rowsFromEdge = Math.min(Math.abs(height - 1 - row), row);
        let colsFromEdge = Math.min(Math.abs(width - 1 - col), col);
        let threshold = multiplier * rowsFromEdge * colsFromEdge
        let typeKey = (val > threshold) ? 0 : 1;
        //console.log(row, col, rowsFromEdge, colsFromEdge, threshold)
        return new Cell(area, row, col, tileTypeMap[typeKey].type, tileTypeMap[typeKey].passable);
    });
}