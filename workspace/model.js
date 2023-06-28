class Model {
    constructor(gridSize) {
        this.gridSize = gridSize;
        this.grid = this.createGrid(gridSize);
    }

    createGrid(gridSize) {
        let grid = [];
        for (let i = 0; i < gridSize; i++) {
            let row = [];
            for (let j = 0; j < gridSize; j++) {
                row.push(false);
            }
            grid.push(row);
        }
        return grid;
    }

    updateGrid() {
        let newGrid = this.createGrid(this.gridSize);
        for (let i = 0; i < this.gridSize; i++) {
            for (let j = 0; j < this.gridSize; j++) {
                let liveNeighbors = this.countLiveNeighbors(i, j);
                if (this.grid[i][j] && (liveNeighbors === 2 || liveNeighbors === 3)) {
                    newGrid[i][j] = true;
                } else if (!this.grid[i][j] && liveNeighbors === 3) {
                    newGrid[i][j] = true;
                }
            }
        }
        this.grid = newGrid;
    }

    countLiveNeighbors(x, y) {
        let count = 0;
        for (let i = Math.max(0, x - 1); i <= Math.min(this.gridSize - 1, x + 1); i++) {
            for (let j = Math.max(0, y - 1); j <= Math.min(this.gridSize - 1, y + 1); j++) {
                if ((i !== x || j !== y) && this.grid[i][j]) {
                    count++;
                }
            }
        }
        return count;
    }

    toggleCellState(x, y) {
        this.grid[x][y] = !this.grid[x][y];
    }
}
