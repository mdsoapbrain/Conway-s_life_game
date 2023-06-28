window.onload = function() {
    const gridSize = 50;
    const cellSize = 10;
    let model = new Model(gridSize);
    let view = new View(gridSize, cellSize);
    let controller = new Controller(model, view);
};
