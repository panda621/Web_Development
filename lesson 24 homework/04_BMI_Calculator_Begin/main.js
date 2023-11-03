// Define a function to calculate BMI. This function takes two parameters: weight and height.
function calculateBMI() {
    // TODO:
    // Get the weight and height values from the inputs using the getElementById() method.
    // Reference (getElementById): https://www.w3schools.com/jsref/met_document_getelementbyid.as

    let weight = document.getElementById("weight");
    let height = document.getElementById("height");

    // TODO:
    // TO calculate the BMI, divide the weight by the square of the height (height * height).
    // Perform the BMI calculation. Create a local variable called bmi to store the result.
    // Return the result to two decimal places.
    // Referemce (toFixed): https://www.w3schools.com/jsref/jsref_tofixed.asp
    let calculateBMI = (weight.value) / (height.value * height.value);
    calculateBMI = calculateBMI.toFixed(2);

    // TODO:
    // Display the result on the webpage.
    // Reference (innerText): https://www.w3schools.com/jsref/prop_node_innertext.asp
    let display = document.getElementById("result");
    display.innerText = calculateBMI;
}