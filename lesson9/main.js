// windows.onload=function(){
    // Create a function that moves the box forward
    function forwardBox(){
        // Create the step variable to hold the distance in 'px' by which 
        // the box will move
        var step = 0;
        intervalId = setInterval(function(){

            // Conditional statement
            if(step>350){
                // Remove the interval using clearInterval when the 
                // box reaches the max position
                clearInterval(intervalId);
            } else {
                //Increment the value of the step variable by 1 
                step++; //this is the same as saying step=step+1
                // Use the DOM properties style.left to move the box
                box.style.left=step+"px";            
            }
            
        });
    }
    
    // Create a function to reset the position of the box
    function resetBox(){
        // Reset the position of the box by assigning a 
        // lower value to style.left
        box.style.left="1px";
    }

    // Create a function to stop the box if it is moving
    function stopBox(){
        clearInterval(intervalId)
    }
    
    // Create a function to initialize the variables when the screen 
    // is loaded
    function init(){
        var runButton = document.getElementById("run");
        var resetButton = document.getElementById("reset");
        var box = document.querySelector("#box");
        var stopButton = document.getElementById("stop");
        var intervalId = 0;
    }
    // Link the window.onload event to the init function to 
    // load the variables
    window.onload = init();
// }