class Viewport {
    constructor(area, width, height, position, renderer) {
        this.area = area;
        this.width = width;
        this.height = height;
        this.position = position;
        this.viewCells = this.updateCells();
        this.renderSettings = {
            fontSize: 14,
            tileWidth: 16,
            tileHeight: 16 
        }
    }

    updateCells() {
        let minRow = Math.max(0, this.position.y);
        let maxRow = Math.min(this.area.height - 1, this.position.y + this.height - 1);
        let minCol = Math.max(0, this.position.x);
        let maxCol = Math.min(this.area.width - 1, this.position.x + this.width - 1);
        let viewCells = [];
        for(let i = minRow; i <= maxRow; i++) {
            for(let j = minCol; j <= maxCol; j++) {
                viewCells.push({
                    viewRow: i - this.position.y,
                    viewCol: j - this.position.x,
                    cell: this.area.cells[i][j]
                });
            }
        }
    }

    getRenderData() {
        let tiles = [];
        for(let i = 0; i < this.viewCells.length; i++) {
            tiles.push({
                row: this.viewCells[i].viewRow,
                col: this.viewCells[i].viewCol,
                data: this.viewCells[i].cell.getRenderData()
            });
        }
        return tiles;
    }

}

export default Viewport;