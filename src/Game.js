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
                row.push({row: i, col: j, content: '@', foreColor: "black", bgColor: "white"});
            }
            map.push(row);
        }
        return map;
    }
}

export default Game;
