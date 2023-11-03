window.onload = function(){
    // Ask users a question
    // prompt => Asking the user to provide an answer
    var answer = prompt("What is your name?");
    if (answer === ""){
        answer = prompt("You have to provide an answer. What is your name?");

        if (answer.indexOf("@") == -1){
            alert("Please make it an Email or Username, or else the system would not work.");
            
        }    
    }
    
} 