window.onload = function(){
    // Get the leave a message textbox using getElmentById
    const messageTextBox = document.getElementById("messageTextBox");
    // Get the send button using getElementById
    const sendButton = document.getElementById("sendButton");
    
    // Create an event listener for the send button
    function sendButtonClicked(){
        // Get the message from the textbox
        const message = messageTextBox.value;
        // Get the list of messages from the localStorage if it exists otherwise create an empty array
        let messages = JSON.parse(localStorage.getItem("messages")) || [];
        //Add the message to the list of messages
        messages.push(message);
        console.log(messages)
        console.log(JSON.stringify(messages));
        //Save the list of messages to the localStorage
        localStorage.setItem("messages", JSON.stringify(messages));
        //Clear the message textbox
        messageTextBox.value = "";
        //Show a message box saying "Message sent. Thank you!"
        alert("Message sent. Thank you!"); 
    }

    //Add a change event listener to the send button
    sendButton.addEventListener("change", sendButtonClicked);
    
    //Add a clcick event listener to the send button
    sendButton.addEventListener("click", sendButtonClicked);
}