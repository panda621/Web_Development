window.onload = function () {
    // Get references to UI elements
    const userInput = document.getElementById("userInput");
    const outputDiv = document.getElementById("output");

    // Function to update the UI with a message
    function updateUI(message) {
        outputDiv.textContent = message;
    }

    // Function to handle user input using a switch statement
    function handleUserInput() {
        /**
         * TODO:
         * > Create a switch statement that checks the input for different cases as below:
         *  - when the case is an empty string, 
         *  - call the updateUI() function with the message "Bot: Try Typing out Something for me!"
         * 
         * - when the case is "hello",
         * - call the updateUI() function with the message "Bot: Hello there!"
         * 
         * - when the case is "goodbye",
         * - call the updateUI() function with the message "Bot: Goodbye!"
         * 
         * - when the case is "hi",
         * - call the updateUI() function with the message "Bot: Hello!"
         * 
         * - when the case is "how are you?",
         * - call the updateUI() function with the message "Bot: I'm just a program, but I'm here to help!"
         * 
         * - when the case is "what's your name ? ",
         * - call the updateUI() function with the message "Bot: I'm a chatbot, so I don't have a name."
         * 
         * - when the case is "tell me a joke",
         * - call the updateUI() function with the message "Bot: Why don't scientists trust atoms? Because they make up everything!"
         * 
         * - when the case is "what's the weather like ? ",
         * - call the updateUI() function with the message "Bot: I'm sorry, I can't provide real-time information."
         * 
         * - when the case is "help",
         * - call the updateUI() function with the message 
         *      " Bot: I'm here to chat and answer questions. 
         *        Try typing 'hello', 'goodbye', 'hi', 'how are you?', 'what's your name?', 'tell me a joke', 'what's the weather like?', or 'bye' "
         * 
         * - when the case is "bye",
         * - call the updateUI() function with the message "Bot: Goodbye! Have a great day!"
         * 
         * - when the case is anything else,
         * - call the updateUI() function with the message "Bot: I'm not sure what you mean."
         * 
         * > Don't forget to add a default case
         * 
         * Reference (Switch case in JS) - https://www.w3schools.com/js/js_switch.asp
         */
        //// YOUR CODE STARTS HERE ////
        switch (userInput.value){
            case "":
                updateUI("Bot: Try typing out something for me!");
                break;
            case "Hello":
                updateUI("Bot: Hello there!");
                break;
            case "Goodbye":
                updateUI("Bot: Goodbye!");
                break;
            case "Hi":
                updateUI("Bot: Hello!");
                break;
            case "How are you?":
                updateUI("Bot: I'm just a program, but I'm here to help!");
                break;
            case "What's your name?":
                updateUI("Bot: I'm a chatbot, so I don't have a name.");
                break;
            case "Tell me a joke":
                updateUI("Bot: Why don't scientists trust atoms? Because they make up everything!");
                break;
            case "What's the weather like?":
                updateUI("Bot: I'm sorry, I can't provide real-time information.");
                break;
            case "Help":
                updateUI("I'm here to chat and answer questions. Try typing 'hello', 'goodbye', 'hi', 'how are you?', 'what's your name?', 'tell me a joke', 'what's the weather like?', or bye ");
                break;
            case "bye":
                updateUI("Bot: Goodbye! Have a great day!");
                break;
            default:
                updateUI(`Bot: You said ${userInput.value}. I'm not sure what you mean.`)
        }

        //// YOUR CODE ENDS HERE ////
    }

    // Attach an event listener to the input field
    userInput.addEventListener("keyup", handleUserInput);
}