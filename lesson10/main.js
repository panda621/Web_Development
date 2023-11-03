function playSound(){
    //Create a list from which to pick sounds at random
    var sounds = [
        "static/sound1.mp3",
        "static/sound2.mp3",
        "static/sound3.mp3",
        "static/sound4.mp3",
    ];
    //Get the audio element from the HTML doc
    var sound = document.getElementById("AUDIO");
    /**
     * Notes:
     * > Ternary Operator
     * (condition) ? { expression if true } : { expression if false }
     * 
     * > Using the parseInt() function to convert the string to an integer
     */
    (sound)
    ? sound.src = sound[ Math.floor( Math.random() * parseInt(sounds.length))]
    :undefined;

    //Call the play function of the audio element
    sound.play();
}
//Create the addRow()function
function addRow(){
    /**
     * Notes:
     * > We are going to create a table within which to contain the shapes of choice
     * > Insert each new shape into the table as rows
     * > Create a row using the createElement() method and tag name 'tr'
     */
    var row = document.createElement("tr");
    var tableBody=document.getElementById("myTableBody");

    for(i = 0; i < 6; i++){
        var shape = document.createElement("td");
        shape.className="item" + Math.floor(Math.random()*6);
        shape.setAttribute("onclick", "playSound()");
        row.appendChild(shape);
    }
    tableBody.appendChild(row);
}

//Create the init()function
function init(){
    var item = document.getElementsByClassName("item");
    item.onclick = playSound();
}

window.onload = init();