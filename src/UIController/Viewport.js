class Viewport {
    constructor(area, center, width, height) {
        this.area = area;
        this.width = width;
        this.height = height;
        this.topLeft = null;
        this.centerAt(center);
        this.viewCells = this.getViewCells();
        this.renderSettings = {
            fontSize: 14,
            tileWidth: 16,
            tileHeight: 16 
        }
    }

    centerAt(position) {
        this.topLeft = {
            x: position.x - Math.floor(this.width / 2),
            y: position.y - Math.floor(this.height / 2)
        }
    }

    translate(delta) {
        let bounds = this.getBounds();
        let newPosition = {x: this.topLeft.x + delta.dx, y: this.topLeft.y + delta.dy};
        if(newPosition.x >= 0 && newPosition.y >= 0 && newPosition.x + this.width < this.area.width && newPosition.y + this.height < this.area.height) {
            this.topLeft = newPosition;
            this.viewCells = this.getViewCells();
        }
    }

    getBounds() {
        let minRow = Math.max(0, this.topLeft.y);
        let maxRow = Math.min(this.area.height - 1, this.topLeft.y + this.height - 1);
        let minCol = Math.max(0, this.topLeft.x);
        let maxCol = Math.min(this.area.width - 1, this.topLeft.x + this.width - 1);
        return {
            minRow: minRow,
            maxRow: maxRow,
            minCol: minCol,
            maxCol: maxCol
        };
    }

    inBounds(position) {
        let bounds = this.getBounds();
        return position.x >= bounds.minCol
                && position.x <= bounds.maxCol
                && position.y >= bounds.minRow
                && position.y <= bounds.maxRow;
    }

    getViewCells() {
        let bounds = this.getBounds();
        let viewCells = [];
        for(let i = bounds.minRow; i <= bounds.maxRow; i++) {
            for(let j = bounds.minCol; j <= bounds.maxCol; j++) {
                viewCells.push({
                    viewRow: i - this.topLeft.y,
                    viewCol: j - this.topLeft.x,
                    cell: this.area.cells[i][j]
                });
            }
        }
        return viewCells;
    }

    getRenderData() {
        let bounds = this.getBounds();
        let tiles = [];
        for(let i = 0; i < this.viewCells.length; i++) {
            tiles.push({
                row: this.viewCells[i].viewRow,
                col: this.viewCells[i].viewCol,
                renderData: this.viewCells[i].cell.getRenderData()
            });
        }
        let center = null;
        return tiles;
    }



}

export default Viewport;