export function gridMap(grid, func) {
    //Expects a callback function with signature func(row, col, value) returning newValue
    let newGrid = [];
    for(let i = 0; i < grid.length; i++) {
        let row = [];
        for(let j = 0; j < grid[i].length; j++) {
            row.push(func(i, j, grid[i][j]));
        }
        newGrid.push(row);
    }
    return newGrid;
}