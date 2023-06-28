# Conway-s_life_game
The core classes, functions, and methods necessary for this project are:

Model: This JavaScript class will hold the state of the game and provide methods to update the state according to the rules of Conway's Game of Life.

View: This JavaScript class will be responsible for displaying the state of the game on the webpage. It will have a method that takes the game state from the Model and renders it on the HTML page.

Controller: This JavaScript class will handle user input and manipulate the Model or View accordingly. It will have methods to start/stop the game, or modify the initial state of the game grid based on user input.

startStopGame: This function will be triggered when the "Start/Stop" button is clicked. It will start or pause the game depending on the current state.

stepGame: This function will be triggered when the "Step" button is clicked. It will advance the game state by one generation when the game is paused.

toggleCellState: This function will be triggered when a cell in the game grid is clicked. It will toggle the state of the corresponding cell in the Model's game state.
