
// Javascript code
window.onload= function() {
    /**
     * querySelector() acts the same way as getElementById() when applied to capture
     * elementes by ID. The difference is that querySelector() uses syntax similar to CSS
     * selectors in capruting elements 
     */
    let yourInput = document.querySelector("#guess");
    yourInput.onchange=getUserAnswer;
    refresh=document.querySelector("#play");

    function getUserAnswer(e) {
        let compDisplay=document.getElementById("compGuess");
        let yourDisplay=document.getElementById("yourGuess");

        var options=["rock", "paper", "scissors"];
        var randomNumber=Math.floor((Math.random() * 3));
        var computerChoice=options[randomNumber];

        var userChoice = e.target.value;
        console.log(userChoice);

        /**
         * Tertiary operator
         * (condition) ? expression_to_run_IfTrue : expression_to_run_IfFalse
         * 
         * > Hide the computer's guess if the user has yet to provide their guess
         */
        compDisplay.innerHTML=(userChoice)
        ? `${computerChoice}`
        : "You have to guess first in order to see the computer's guess";
        
        yourDisplay.innerHTML=(userChoice)
        ? `${userChoice}`
        : "";

        if (computerChoice==userChoice) {
            alert("It's a tie. Rerun to play again.");
        }
        // If the Computer chooses Rock
        else if (computerChoice=="rock")  {
            if (userChoice =="paper") {
                alert("Paper covers rock. You win!");
            }
            else if (userChoice = "scissors")  {
                alert("Rock bears scissors. Computer wins!");
            }
        }
        // If the Computer chooses Scissor
        else if (computerChoice=="scissor")  {
            if (userChoice =="rock") {
                alert("Rock beats scissors. You win!");
            }
            else if (userChoice = "paper")  {
                alert("Scissors cuts paper. Computer wins!");
            }
        }
        // If the Computer chooses Paper
        else if (computerChoice=="Paper")  {
            if (userChoice =="rock") {
                alert("Paper covers rock. Computer win!");
            }
            else if (userChoice = "scissors")  {
                alert("Rock bears scissors. You wins!");
            }
        }
        return userChoice;
    
    }
}
