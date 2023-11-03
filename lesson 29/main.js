window.onload = function(){
    // Track the number of ships the player found
    var shipsFound = 0;
    var boxes = document.getElementsByClassName("column");
    var updateMessage = document.getElementById("updateMessage");

    while (ship1 == ship2 || ship2== ship3 || ship1 == ship3) {
        var ship1 = Math.floor(Math.random() * 26);
        var ship2 = Math.floor(Math.random() * 26);
        var ship3 = Math.floor(Math.random() * 26);
    }
    
    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        // each cell in the grid should have teh clock event listener
        // for us to detect how many clicks it tooks them to find the ship and also show the ships found.
        box.onclick = function(){

            var str = this.getAttribute("id");
            str = str.substring(1);
            var position = parseInt(str);
            console.log("This is below parse int")
            if (position == ship1 || position == ship2 || position == ship3){
                this.computedStyleMap.backgroundColor = "black";
                
                var image = document.createElement("img");
                image.src = "https://webstockreview.net/images/battleship-clipart-clip-art-5.png";
                console.log("This is below the image")
                
                this.appendChild(image);
                
                document.getElementById("try").style.display = "none";
                document.getElementById("success").style.display = "block";
                shipsFound++;
            } else {
                document.getElementById("try").style.display = "block";
                document.getElementById("success").style.display = "none";
                updateMessage.innerHTML = "Try again."
            }

            if (shipsFound == 3){
                document.getElementById("win").style.display = "block";
                document.getElementById("try").style.display = "none";
                document.getElementById("success").style.display = "none";
            }
        }
    }

    document.getElementById("reset").onclick = function(){
        location.reload();
    }
}