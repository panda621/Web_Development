window.onload = function() {
    // Use getElementById to get the container element form the HTML document
    const container = document.getElementById("container");
    // Create the box size to fit in the container
    const boxCounts = (container.offsetWidth/100) * (container.offsetHeight/100);
    // Use getElementById to get the wrapper element form the HTML document
    const wrapper = document.getElementById("wrapper");   

    // Math.floor => This rounds down the number
    // Math.random => Produces a random number from 0 to the number multiplied
    function randomColors(){    
        return (`#${Math.floor(Math.random()*16777215).toString(16)}`);
    }
    //add .box divs dynamically to the DOM
    // Reference: https://www.w3schools.com/js/js_loop_for.asp
    for(let i = 0; i < boxCounts; i++){
        let box =document.createElement("div");
        box.className = "box";
        wrapper.appendChild(box);
        wrapper.style.minHeight = "fit-container";
        container.style.minHeight = "fit-container";
    }
    //add EventListener to the added divs
    // Reference: https://www.w3schools.com/jsref/jsref_forEach.asp
    const boxs = document.querySelectorAll(".box");
    boxs.forEach((el) => {
        el.addEventListener("mouseover", () =>{
        //addstars(;
        el.style.backgroundColor = randomColors();
    });
    })
}