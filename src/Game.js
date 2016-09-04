class Game {
    constructor(size) {
        this.rows = size;
        this.cols = size;
        this.map = this.createMap();
    }

    createMap() {
        let map = [];
        for(let i = 0; i < this.rows; i++) {
            let row = [];
            for(let j = 0; j < this.cols; j++) {
                row.push({row: i, col: j, content: '', foreColor: "white", bgColor: "black"});
            }
            map.push(row);
        }

        //testing
        for(let i = 2; i < this.rows - 2; i++) {
            map[i][Math.floor(this.cols/2)].bgColor = "white";
        }
        for(let j = 1; j < this.cols - 3; j++) {
            map[Math.ceil(this.rows/2)][j].bgColor = "white";
        }
        let startTile = map[Math.ceil(this.rows/2)][Math.floor(this.cols/2)];
        startTile.foreColor = "black";
        startTile.content = "@";
        return map;
    }


}

export default Game;
