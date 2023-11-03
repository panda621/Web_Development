window.onload = function(){
    // We define variables to hold our current total and the next number the user inputs
    let currentTotal =  0;
    let nextNumber = "";

    //We also keep track of the last operator the user pressed
    let lastOperator = "";

    // This is a function definition. We use functions to encapulate behavior that we want to reuse.
    function updateDisplay(value) {
        // We find the display element and set it's text to our current total
        document.getElementById("display").innerText = value;
    }
    // This is another function definition. This function handles when the user presses a number.
    function handleNumber(num) {
        //We append the new number to the nextNumber string.
        nextNumber += num;
        // We then update the display
        updateDisplay(nextNumber);
    }
    // This function handles when the user presses an operator
    function handleOperator(operator){
        //If there's a nextNumber when the user presses an operator, we handle the last operation
        if (nextNumber) {
            handleOperation();
        }
        // We then set the lastOperater to the operator the user just pressed.
        lastOperator = operator;
    }
    // This function handles an operation
    function handleOperation(){
        // We convert the nextNumber to a floating point number.
        const floatNumber = parseFloat(nextNumber);
        // We then do the operation based on the lastOperator and update the currentTotal
        switch(lastOperator) {
            case "+":
                currentTotal += floatNumber;
                break;
            case "-":
                currentTotal -= floatNumber;
                break
            case "*":
                currentTotal *= floatNumber;
                break;
            case "/":
                currentTotal /= floatNumber;
                break;
            default:
                // If there was no last operator, we just set the currentTotal to the nextNumber.
                currentTotal = floatNumber 
        }
        // We clear the nextNumber for the next operation
        nextNumber = "";
        // And update the display
        updateDisplay(currentTotal);
    }
    // We find all the buttons and set up event listeners
    const buttons = document.querySelectorAll("#calculator button");
    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            //We get the text of the button that was pressed
            const buttonText = event.target.innerText;
            //And handle it differently depending on whether it's a number, operator, or equals sign
            if ("0123456789.".includes(buttonText)) {
                handleNumber(buttonText);
            } else if ("+-*/".includes(buttonText)) {
                handleNumber(buttonText);
                handleOperator(buttonText);
            } else if ("=".includes(buttonText)) {
                handleOperation();
            }
        });
    });
    const cancel = document.getElementById("cancel");
    cancel.addEventListener("click", function(event) {
        // We clear the nextNumber and currentTotal
        nextNumber = "";
        currentTotal = 0;
        // And update the display
        updateDisplay(currentTotal);
    });
}