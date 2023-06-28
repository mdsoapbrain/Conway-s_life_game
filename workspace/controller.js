class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.isRunning = false;
        this.intervalId = null;
        this.startStopButton = document.getElementById('startStopButton');
        this.stepButton = document.getElementById('stepButton');
        this.startStopButton.addEventListener('click', () => this.startStopGame());
        this.stepButton.addEventListener('click', () => this.stepGame());
        this.view.table.addEventListener('click', (event) => this.toggleCellState(event));
    }

    startStopGame() {
        if (this.isRunning) {
            clearInterval(this.intervalId);
            this.startStopButton.textContent = 'Start';
            this.startStopButton.classList.remove('stop');
            this.startStopButton.classList.add('start');
        } else {
            this.intervalId = setInterval(() => this.stepGame(), 1000);
            this.startStopButton.textContent = 'Stop';
            this.startStopButton.classList.remove('start');
            this.startStopButton.classList.add('stop');
        }
        this.isRunning = !this.isRunning;
    }

    stepGame() {
        this.model.updateGrid();
        this.view.render(this.model.grid);
    }

    toggleCellState(event) {
        if (event.target.tagName === 'TD') {
            let row = event.target.dataset.row;
            let col = event.target.dataset.col;
            this.model.toggleCellState(row, col);
            this.view.render(this.model.grid);
        }
    }
}
