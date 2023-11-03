window.onload = function(){
    // The global object"player is representing the character in the game which is fetched from the Html file using it's id
    let player = document.getElementById("player");
    // Get the div called gameArea from the HTML file and give it:
    // > width and height of 500px and 500px respectively
    // > a border of 1px solid black
    // > a background color of lightgrey
    let gameArea = document.getElementById("gameArea");
    gameArea.style.width = "500px";
    gameArea.style.height = "500px";
    gameArea.style.border = "1px solid black";
    gameArea.style.backgroundColor = "lightgrey";
    //This  object stores the player's current position. It is a global object because it needs to be accessed and updated from different parts of the code.
    let playerPos = {}
    x_pos = Math.floor(Math.random() * 500);
    y_pos = Math.floor(Math.random() * 500);
    playerPos.x = x_pos;
    playerPos.y = y_pos;
    //This function is used to change the player's position. It uses parameters dx and dy to determine the direction and distance to move the player.
    function movePlayer(dx, dy) {
        //Restrict the player's movement to the game area.
        if (
            playerPos.x + dx > 0 && playerPos.x + dx < 450 && playerPos.y + dy > 0 && playerPos.y + dy < 450) {
            playerPos.x += dx;
            playerPos.y += dy;

            // The style of the player is updated to reflect the new position. This intergrates JavaScript with CSS to move the player around the game area.
            player.style.left = playerPos.x + "px";
            player.style.top = playerPos.y + "px";
        }
        else {
            return;
        }
    }
    document.addEventListener("keydown", function(event) {
        //An event listener is added to the document to listen for when a key is pressed. This is an example of an aysnchrous event in JavaScript.
        switch (event.key) {
            case "ArrowUp":
                movePlayer(0, -10);
                break;
            case "ArrowDown":
                movePlayer(0, 10);
                break;
            case "ArrowLeft":
                movePlayer(-10, 0);
                break;
            case "ArrowRight":
                movePlayer(10, 0);
                break;
        }
    }
    //When an arrow key is pressed, the player is moved in the corresponding direction. This is an example of how JavaScript can be used to handle user input in a game.
    );
}