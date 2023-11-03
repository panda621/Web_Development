// window.onload = function() {
    let canvas = document.getElementById("mazeCanvas");
    let ctx = canvas.getContext("2d");

    const cellSize = 20; // define the size of each cell
    const gridWidth = canvas.width / cellSize; // number of cells wide
    const gridHeight = canvas.height / cellSize; // number of cells high

    let maze = [];

    // An individual cell in the maze
    function Cell(x, y) {
        this.x = x;
        this.y = y;
        this.visited = false;
        this.walls = { top: true, right: true, bottom: true, left: true };
    }

    // Generate the initial grid
    function generateGrid() {
        for(let i = 0; i < gridWidth; i++) {
            maze[i] = [];
            for(let j = 0; j < gridHeight; j++) {
                maze[i][j] = new Cell(i, j);
            }
        }
    }

    // Check for unvisited neighbouring cells
    function checkNeighbours(x, y) {
        let neighbours = [];
        if(x > 0 && !maze[x-1][y].visited) neighbours.push(maze[x-1][y]);
        if(y > 0 && !maze[x][y-1].visited) neighbours.push(maze[x][y-1]);
        if(x < gridWidth - 1 && !maze[x+1][y].visited) neighbours.push(maze[x+1][y]);
        if(y < gridHeight - 1 && !maze[x][y+1].visited) neighbours.push(maze[x][y+1]);
        
        if(neighbours.length > 0) {
            let randomIndex = Math.floor(Math.random() * neighbours.length); // Using the Math object here
            return neighbours[randomIndex];
        } else {
            return undefined;
        }
    }

    // Carve the maze from the initial grid using Depth-First Search
    function carveMaze() {
        let stack = [];
        let currentCell = maze[0][0];
        currentCell.visited = true;
        stack.push(currentCell);

        while(stack.length > 0) {
            let nextCell = checkNeighbours(currentCell.x, currentCell.y);

            if(nextCell) {
                if(nextCell.x > currentCell.x) {
                    currentCell.walls.right = false;
                    nextCell.walls.left = false;
                } else if(nextCell.x < currentCell.x) {
                    currentCell.walls.left = false;
                    nextCell.walls.right = false;
                } else if(nextCell.y > currentCell.y) {
                    currentCell.walls.bottom = false;
                    nextCell.walls.top = false;
                } else if(nextCell.y < currentCell.y) {
                    currentCell.walls.top = false;
                    nextCell.walls.bottom = false;
                }

                stack.push(currentCell);
                currentCell = nextCell;
                currentCell.visited = true;
            } else if(stack.length > 0) {
                currentCell = stack.pop();
            }
        }
    }

    // Draw the maze on the canvas
    function drawMaze() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for(let i = 0; i < gridWidth; i++) {
            for(let j = 0; j < gridHeight; j++) {
                let cell = maze[i][j];
                if(cell.walls.top)    ctx.fillRect(cell.x * cellSize, cell.y * cellSize, cellSize, 1);
                if(cell.walls.right)  ctx.fillRect((cell.x + 1) * cellSize - 1, cell.y * cellSize, 1, cellSize);
                if(cell.walls.bottom) ctx.fillRect(cell.x * cellSize, (cell.y + 1) * cellSize - 1, cellSize, 1);
                if(cell.walls.left)   ctx.fillRect(cell.x * cellSize, cell.y * cellSize, 1, cellSize);
            }
        }
    }

    // Generate a new maze
    function generateMaze() {
        maze = [];
        generateGrid();
        carveMaze();
        drawMaze();
    }

    generateMaze();

