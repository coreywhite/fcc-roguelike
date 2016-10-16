import {gridMap} from '../../Utilities/grid.js'
import Cell from '../Cell.js'

export default function gridGenerator(area, grid, tileTypeMap) {
    return gridMap(grid, (val, row, col) => {
        let typeKey = grid[row][col];
        return new Cell(area, row, col, tileTypeMap[typeKey].type, tileTypeMap[typeKey].passable);
    });
}