class View {
    constructor(gridSize, cellSize) {
        this.gridSize = gridSize;
        this.cellSize = cellSize;
        this.table = document.getElementById('gameGrid');
    }

    render(grid) {
        this.table.innerHTML = '';
        for (let i = 0; i < this.gridSize; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < this.gridSize; j++) {
                let cell = document.createElement('td');
                cell.style.width = `${this.cellSize}px`;
                cell.style.height = `${this.cellSize}px`;
                cell.classList.add(grid[i][j] ? 'alive' : 'dead');
                cell.dataset.row = i;
                cell.dataset.col = j;
                row.appendChild(cell);
            }
            this.table.appendChild(row);
        }
    }
}
