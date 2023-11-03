window.onload = function(){
    /**
     * > Create a set of buttons to allow the user to change the car animation
     */
    const straight_drive = document.createElement("button");
    const flying_car = document.createElement("button");
    const ghost_car = document.createElement("button");
    const bumpy_road = document.createElement("button");
    straight_drive.innerText = "Straight Drive";
    flying_car.innerText = "Flying Car";
    ghost_car.innerText = "Ghost Car";
    bumpy_road.innerText = "Bumpy Road";

    // Create a div to hold the buttons
    const button_div = document.createElement("div");
    button_div.appendChild(straight_drive);
    button_div.appendChild(flying_car);
    button_div.appendChild(ghost_car);
    button_div.appendChild(bumpy_road);

    // Style the button div
    button_div.style.display = "flex"
    button_div.style.justifyContent  = "space-between"
    button_div.style.backgroundColor = "purple";
    
    // Add the button div to the body as teh first child
    // Use the insertBefore method to add the button div as the first 
    // child of the body
    document.body.insertBefore(button_div, document.body.firstChild);

    // Get the car image
    const car = document.getElementById("car");

    // When the straight drive button is clicked, change the animation
    straight_drive.onclick = function(){
        car.style.transform = "scale(0.7)";
        car.style.animationName = "drive";
        car.style.animationDuration = "5s";
        car.style.animationIterationCount = "infinite";
    }

    // When the flying button is clicked, change the animation
    flying_car.onclick = function(){
        car.style.transform = "scale(0.7)";
        car.style.animationName = "flyingCar";
        car.style.animationDuration = "5s";
        car.style.animationIterationCount = "infinite";
    }

    /**
     * TODO:
     * 
     * > Create the event listener for the ghost car button
     * > Change the animation to an animation of your choice
     * 
     * Hint: Use the flying car button as a guide
     */
    ghost_car.onclick = function(){
        car.style.transform = "scale(0.7)";
        car.style.animationName = "ghostCar";
        car.style.animationDuration = "5s";
        car.style.animationIterationCount = "infinite";
    }
    
    /**
     * TODO:
     * 
     * > Create the event listener for the bumpy road car button
     * > Change the animation to an animation of your choice
     * 
     * Hint: Use the flying car button as a guide
     */
    bumpy_road.onclick = function(){
        car.style.transform = "scale(0.7)";
        car.style.animationName = "bumpyRoad";
        car.style.animationDuration = "5s";
        car.style.animationIterationCount = "infinite";
    }
}