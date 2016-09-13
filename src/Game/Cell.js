const CellRenderMap = {
    "wall" : {
        glyph: "#",
        foreColor: "gray",
        bgColor: "black"
    },
    "floor" : {
        glyph: ".",
        foreColor: "#ccc",
        bgColor: "white"
    }
}

class Cell {
    constructor(area, row, col, type, passable) {
        this.area = area;
        this.row = row;
        this.col = col;
        this.type = type;
        this.passable = passable;
    }
    getRenderData() {
        return {
            row: this.row,
            col: this.col,
            data: CellRenderMap[this.type]
        }
    }
}

export default Cell;