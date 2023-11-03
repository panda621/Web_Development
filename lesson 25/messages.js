window.onload = function(){
    //Ask the user for a password
    var password = prompt("Please enter the password");
    //If the password is not "secret" then show an alert saying "Incorrect password" and redirect the user to index.html
    if(password != "secret"){
        alert("Incorrect password");
        //wait 3 seconds before redirecting
        setTimeout(function(){
            //redirect the user to index.html
            window.location.href = "index.html";
        },3000);
    }
    else {
        //Get the messages list from the localStorage
        const messages = JSON.parse(localStorage.getItem("messages"));
        //Get the list using getElementById
        const list = document.getElementById("messageList");
        //Loop through the messages
        for(let i = 0; i< messages.length; i++){
            //Create a new list item
            const newListItem = document.createElement("li");
            //Set the inner text of the list item to the message
            newListItem.innerText = messages[i];
            //Append the list item to the list
            list.appendChild(newListItem);
        }
    }
}