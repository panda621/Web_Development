window.onload = function() {
// Go to line 260 to see my message
    /**
     * TODO:
     * > Create a variable (not a const) called "score" and set it to 0
     * > Create a variable (not a const) called "color" and set it to "blue" 
     */
    ///////////////////////////// YOUR CODE GOES HERE ////////////////////////////////
    createElement("score").setBG(0);
    createElement("color").setColor(blue);


    ///////////////////////////// END OF YOUR CODE /////////////////////////////////

    /**
     * EXMAPLE IMPLEMENTATION:
     * > Create a function called random that accepts two inputs (min , max) and returns a random number between min and max.
     * > Use the Math.round() function to round the number to the nearest integer
     * > Use the Math.random() function to generate a random number between 0 and 1
     * > Multiply the random number by the difference of max and min and add min to the result
     * > Return the result
     * 
     * @param {*} min 
     * @param {*} max 
     * @returns a random number between min and max
     * 
     * Reference (Math.round): https:w3schools.com/jsref/jsref_round.asp
     * Reference (Math.random): https://www.w3schools.com/jsref/jsref_random.asp
     */
    function random(min,max){
        return Math.round(Math.random() * (max-min) + min);
    }

    /**
     * TODO:
     * > Create a function called setBG that accepts no inputs 
     * > Use the Math.round() function to round the number to the nearest integer
     * > Use the Math.random() function to generate a random number between 0 and 1
     * > If the number is greater than 0.5, return the url for the Frankenstein image:
     *     http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/128/Frankenstein-icon.png
     * 
     * > If the number is less than 0.5, return the url for the Scream image:
     *    http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/128/Scream-icon.png
     * 
     * @returns an image url
     * 
     * Reference (Math.round): https://www.w3schools.com/jsref/jsref_round.asp
     * Reference (Math.random): https://www.w3schools.com/jsref/jsref_random.asp
     */
//?
    function setBG(inputs !== accepts ){
    ///////////////////////////// YOUR CODE GOES HERE ////////////////////////////////
    let a = Math.round(?)
    let x = Math.random() * 1;
    if (Number>0.5){
        URLRetern("@Frankenstein");
    }
    if (Number<0.5){
        URLReturn("@The Scream");
    }
    ///////////////////////////// END OF YOUR CODE /////////////////////////////////
    }

    /**
     * EXMAPLE IMPLEMENTATION:
     * 
     * > Create a function called dropBox that accepts no inputs
     * > [Inside the dropBox function] Create a variable (not a const) called "length" and set it to a random number between 100 and the width of the game
     * > [Inside the dropBox function] Create a variable (not a const) called "velocity" and set it to a random number between 850 and 10000
     * > [Inside the dropBox function] Create a variable (not a const) called "size" and set it to a random number between 50 and 150
     * > [Inside the dropBox function] Create a variable (not a const) called "thisBox" and set it to a new div element
     * > [Inside the dropBox function] Add the class "box" to the thisBox element   
     * > [Inside the dropBox function] Set the style attribute of the thisBox element to the following string:
     *     "width:" +size+ "px; height:"+size+"px; left:" + length+  "px; transition: transform " +velocity+ "ms linear;"
     * > [Inside the dropBox function] Set the data attribute of the thisBox element to a random number between 0 and 1
     * > [Inside the dropBox function] If the data attribute is greater than 0.5, set the background image of the thisBox element to the Frankenstein image:
     *    http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/128/Frankenstein-icon.png
     * > [Inside the dropBox function] If the data attribute is less than 0.5, set the background image of the thisBox element to the Scream image:
     *   http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/128/Scream-icon.png
     * > [Inside the dropBox function] Append the thisBox element to the game element
     * > [Inside the dropBox function] Use the setTimeout function to add the "move" class to the thisBox element after a random number of milliseconds between 0 and 5000
     * > [Inside the dropBox function] Use the one() function to add an event listener to the thisBox element that listens for the "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend" event and removes the thisBox element from the game element when the event is triggered
     * 
     */
    function dropBox(){
        var length = random(100, ($(".game").width() - 100));
        var velocity = random(850, 10000);
        var size = random(50, 150);
        var thisBox = $("<div/>", {
            class: "box",
            style:  "width:" +size+ "px; height:"+size+"px; left:" + length+  "px; transition: transform " +velocity+ "ms linear;"
        });

        thisBox.data("test", Math.round(Math.random()));
        if(thisBox.data("test")){
            thisBox.css({"background": "url('http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/128/Frankenstein-icon.png')", "background-size":"contain"});
        } else {
            thisBox.css({"background": "url('http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/128/Scream-icon.png')", "background-size":"contain"});
        }
        
        
        //insert gift element
        $(".game").append(thisBox);
        
        //random start for animation
        setTimeout(function(){
            thisBox.addClass("move");
        }, random(0, 5000) );
        
        //remove this object when animation is over
        thisBox.one(
            "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function(event) {
                $(this).remove();
            }
        );
    }

    /**
     * TODO:
     * > Use a for loop to create 10 dropBox calls
     * 
     * Reference (for loop): https://www.w3schools.com/js/js_loop_for.asp
     */
    ///////////////////////////// YOUR CODE GOES HERE ////////////////////////////////
    let i = 10;
    let len = cars.length;
    let text = "dropBox calls";
    for (; i < len;){
        text += cars [i] + "<dropBox>";
        i++
    }

    
    ///////////////////////////// END OF YOUR CODE /////////////////////////////////

    /**
     * EXAMPLE IMPLEMENTATION:
     * 
     * > Create an event listener that listens for the "click" event on any ".box" element
     * > If the data attribute of the clicked element is greater than 0.5, increment the score by 1
     * > If the data attribute of the clicked element is less than 0.5, decrement the score by 1
     * > Update the score display
     * > Remove the clicked element from the game element
     * 
     * Reference (click): https://api.jquery.com/click/
     * Reference (data): https://api.jquery.com/data/
     * Reference (remove): https://api.jquery.com/remove/
     * Reference (update): https://api.jquery.com/html/
     * Reference (if/else): https://www.w3schools.com/js/js_if_else.asp
     */
    $(document).on(
        "click",
        ".box", 
        function(){
            if($(this).data("test")){
                score += 1;
            } else {
                score -= 1;
            }
            
            $(".score").html(score);
            $(this).remove();
        }
    );

    /**
     * TODO:
     * 
     * > Create a variable (not a const) called "runGame" 
     * > Assign it the value of a setInterval function (check reference link below)
     * > [Inside the set interval function] Write a for loop that runs the dropBox function 10 times
     * > [Inside the set interval function] Write a function call to the update function (check reference link below)
     * > [Inside the set interval function] Set the time to 5000 milliseconds (check reference link below)
     * 
     * Reference (setInterval): https://www.w3schools.com/jsref/met_win_setinterval.asp
     * Reference (for loop): https://www.w3schools.com/js/js_loop_for.asp
     */
    ///////////////////////////// YOUR CODE GOES HERE ////////////////////////////////
        createElement("runGame");
        ?
        let x, 10;
    let len = cars.length;
    let text = "dropBox calls";
    for (; i < len;){
        text += cars [i] + "<dropBox>";
        i++
    }

        function
        setInterval(timer, 5000 )
    ///////////////////////////// END OF YOUR CODE /////////////////////////////////

    /**
     * EXAMPLE IMPLEMENTATION:
     * 
     * > Create a function called update that does the following:
     * > [Inside the update function] Create a variable (not a const) called "gameBoxes" that uses the document.getElementsByClassName() method to select all elements with the class of "box"
     * > [Inside the update function] If the length of the gameBoxes variable is equal to 0, use the clearInterval function to stop the runGame interval, and display an alert that says "Game Over"
     * 
     * Reference (getElementsByClassName): https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
     * Reference (clearInterval): https://www.w3schools.com/jsref/met_win_clearinterval.asp
     * Reference (alert): https://www.w3schools.com/jsref/met_win_alert.asp
     * Reference (if/else): https://www.w3schools.com/js/js_if_else.asp 
     */
    function update(){
        var gameBoxes = document.getElementsByClassName("box");
        if(gameBoxes.length == 0){
            clearInterval(runGame);
            alert("Game Over");
        }
    }

    /**
     * EXAMPLE IMPLEMENTATION:
     * 
     * > Create a function called countdown that does the following:
     * > [Inside the countdown function] Create a variable (not a const) called "seconds" and set it to 60
     * > [Inside the countdown function] Create a function called "tick" that does the following:
     * > [Inside the tick function] Create a variable (not a const) called "counter" that uses the document.getElementById() method to select the element with the id of "counter"
     * > [Inside the tick function] Decrement the seconds variable by 1 (check link below for an example of how to do this)
     * > [Inside the tick function] Update the counter element's innerHTML to show the remaining seconds (check link below for an example of how to do this)
     * > [Inside the tick function] If the seconds variable is greater than 0, use the setTimeout function to run the tick function after 1000 milliseconds (1 second)
     * > [Inside the tick function] If the seconds variable is 0, alert the user that the game is over
     * > [Inside the countdown function] Run the tick function
     * 
     * Reference (getElementById): https://www.w3schools.com/jsref/met_document_getelementbyid.asp
     * Reference (decrement): https://www.w3schools.com/js/js_operators.asp
     * Reference (update html): https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * Reference (setTimeout): https://www.w3schools.com/jsref/met_win_settimeout.asp
     * Reference (if/else): https://www.w3schools.com/js/js_if_else.asp
     */
    function countdown() {
        var seconds = 60;
        function tick() {
            var counter = document.getElementById("counter");
            seconds--;
            counter.innerHTML = (seconds < 10 ? "0" : "")  + String(seconds) + "S";
            if( seconds > 0 ) {
                setTimeout(tick, 1000);
                update();
            } else {
                alert("Game over");
                clearInterval(runGame);
            }
        }
        tick();
    }

    /**
     * TODO:
     * 
     * > Call the countdown function
     */
    ///////////////////////////// YOUR CODE GOES HERE ////////////////////////////////
        countdown

    
    ///////////////////////////// END OF YOUR CODE /////////////////////////////////
// Did you teach me how to call things?
};