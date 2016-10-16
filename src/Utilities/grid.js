export function gridMap(grid, func) {
    //Expects a callback function with signature func(row, col, value) returning newValue
    let newGrid = [];
    for(let i = 0; i < grid.length; i++) {
        let row = [];
        for(let j = 0; j < grid[i].length; j++) {
            row.push(func(grid[i][j], i, j));
        }
        newGrid.push(row);
    }
    return newGrid;
}

export function inBounds(grid, row, col) {
    return row >= 0 && col >= 0 && row < grid.length && col < grid[row].length;
}

export function getNeighbors(grid, row, col, filterFunc) {
    let neighbors = [];
    for(let i = row -1; i <= row + 1; i++) {
        for(let j = col - 1; j <= col + 1; j++) {
            if(inBounds(grid, i, j) && !(row === i && col === j)) {
                if(!filterFunc || filterFunc(i, j, grid[i][j])) {
                    neighbors.push(grid[i][j]);
                }
            }
        }
    }
    return neighbors;   
}

export function smoothBinary(grid, minDifference, times) {
    let smoothed = gridMap(grid, (value, row, col) => {
        //Add -1 for every neighbor with value <= 0 and 1 for every neighbor with value >= 1:
        let neighborsNet = getNeighbors(grid, row, col).reduce((prev, cur) => prev + (cur > 0 ? 1 : -1), 0);
        if(Math.abs(neighborsNet) > (minDifference || 0)) {
            return neighborsNet > 0 ? 1 : 0;
        } else {
            return value;
        }
    });
    if(times && times > 1) {
        return smoothBinary(smoothed, minDifference, times -1);
    } else {
        return smoothed;
    }
}