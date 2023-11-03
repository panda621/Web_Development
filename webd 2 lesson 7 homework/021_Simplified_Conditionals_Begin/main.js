window.onload = function () {
    //Go to line 133 to see my message.
    /**
     * TODO:
     * 
     * 1. Use getElementById to capture the 'suggestionInput' box and store it in a constant variable called suggestionInput.
     * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
     */
    // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
    const suggestionInput = document.getElementById("suggestionInput");
    
    // YOUR CODE ENDS HERE
    

    /**
     * TODO:
     * 
     * 2. Use getElementById to capture the 'suggestionButton' and store it in a constant variable called suggestionButton.
     * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
     */
    // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
    const suggestionButton = document.getElementById("suggestionButton");
    
    // YOUR CODE ENDS HERE

    /**
     * TODO:
     * 
     * 3. Create an array called messages that contains at least 10 different messages as below and store it in a constant variable called messages.
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
     */
    // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )

     const messages = [
        'You are awesome!',
        'You are a great friend!',
        'You are a smart person!',
        'You are a great person!',
        'You are a great developer!',
        'You are a great designer!',
        'You are a great teacher!',
        'You are a great student!',
        'You are a great leader!',
        'You are a great manager!',
        'You are a great mentor!',
        'You are a great coach!',
        'You are a great speaker!',
        'You are a great writer!',
        'You are a great reader!',
        'You are a great listener!',
        'You are a great helper!',
        'You are a great motivator!',
        'You are a great encourager!',
    ];
    
    // YOUR CODE ENDS HERE

    /**
     * TODO:
     * 
     * 4. Use CreateElement to create a div element and store it in a constant variable called messageDiv.
     * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
     * 
     * 5. Use CreateElement to create a p element and store it in a constant variable called messageP.
     * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
     * 
     * 6. Create a string variable called lorem that contains the following text:
     * 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus pretium quis felis et facilisis.'
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
     * 
     * 7. Append the messageP element to the messageDiv element.
     * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
     * 
     * 8. Use the insertBefore method to insert the messageDiv element after the suggestionInput element.
     * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
     */
    // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
    const messageDiv = document.createElement("div");
    const messageP = document.createElement("p");
    const lorem = "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus pretium quis felis et facilisis"
    messageDiv.appendChild(messageP)
    suggestionInput.parentNode.insertBefore(messageDiv,suggestionInput.nextSibling);
    // YOUR CODE ENDS HERE
    
    /**
     * TODO:
     * 
     * 9. Use the addEventListener to add a click event on the suggestionButton element.
     * Reference: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
     * 
     * 10. [ Inside the click event ] Write an if statement that checks if the user typed in the suggestion input box.
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
     * 
     * 11. [ Inside the click event ] [ Inside the if statement ] Use the innerHTML property to display the below message to them.
     * > Change the color of the message to blue.
     * `You are a great ${suggestionInput.value}! : )`
     * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
     * 
     * 12. [ Inside the click event ] Write an else if statement that checks if the user did not type in the suggestion input box.
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
     * 
     * 13. [ Inside the click event ] [ Inside the else if statement ] Use the innerHTML property to display the below message to them.
     * > Change the color of the message to red.
     * 'You cannot leave the suggestion input box empty.'
     * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
     * 
     * 14. [ Inside the click event ] Write an else if statement that checks if the user typed in the suggestion input box but the value is not in the messages array.
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
     * 
     * 15. [ Inside the click event ] [ Inside the else if statement ] Use the innerHTML property to display the below message to them.
     * > Change the color of the message to purple.
     * `Wait! I know the meaning of ${suggestionInput.value}! Does it mean "${lorem}"?`;
     * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
     * 
     * 16. [ Inside the click event ] Write an else if statement that checks if the user typed in the suggestion input box a value that contains a number.
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
     * 
     * 17. [ Inside the click event ] [ Inside the else if statement ] Use the innerHTML property to display the below message to them.
     * > Change the color of the message to green.
     * `${messages[Math.floor(Math.random() * messages.length)]}`;
     * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
     * 
     * 18. [ Inside the click event ] Write an else statement that checks if the user typed in the suggestion input box a value that does not contain a number.
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
     * 
     * 19. [ Inside the click event ] [ Inside the else statement ] Use the innerHTML property to display the below message to them.
     * > Change the color of the message to red.
     * 'Please type in the suggestion input box.';
     * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
     */
    suggestionButton.addEventListener('click', function() {
        
        //You haven't taught me some of this.

        // Check if the user typed in the suggestion input box
       
            // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
        if (suggestionInput.value.trim() !== ""){
            messageP.innerHTML=`You are a great ${suggestionInput.value}!`;
        }
        else if (suggestionInput.value.trim() == "") {
            messageP.style.color = "red";
            messageP.innerHTML="You cannot leave the suggestion input box empty."; 
        }
        
        else if (messages.indexOf(suggestionInput.value) === -1 ) {
            // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
            messageP.style.color = "purple";
            messageP.innerHTML = `Wait! I know the meaning of ${suggestionInput.value}! Does it mean "${lorem}"?`;
            
            // YOUR CODE ENDS HERE
        }
        else if ( suggestionInput.value.match(/\d/) ) {
            // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line
            messageP.style.color = "green";
            messageP.innerHTML = `${messages[Math.floor(Math.random() * messages.length)]}`;
        
            // YOUR CODE ENDS HERE
        }
        else if ( suggestionInput.value == "" ){
            
            // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
            messageP.value.innerHTML= "Please type in the suggestion input box";

        
            // YOUR CODE ENDS HERE
        }
        suggestionInput.value = '';
    
    });

}