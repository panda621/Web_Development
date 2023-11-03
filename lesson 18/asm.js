window.onload = function() {
    // Create a constant variable called todoItem and store in it the element with the id todo_item
    const todoItem = document.getElementById("todo_item");
    // Create a constant variable called todoCont and store in it the element with the id content
    const todoCont = document.getElementById("content");
    // Create a constant variable called todoCont and store in it a new ul element
    const orderedList = document.createElement("ul");

    // check if logo storage is empty

    if (localStorage.getItem("to-do") != ""){
        // Add an if statement that checks if the local storage had the todo item
        // if it does assign the value to myList
        let myList = [];
        if ( localStorage.getItem("to-do") != null){
            myList = localStorage.getItem("to-do").split(",");
        }
        
        printList (myList, orderedList);
    }

    todoCont.appendChild(orderedList);
    var todoList = []
    todoItem.onchange = function(e){
        // e => represents teh user event.
        todoList.push(e.target.value);
        let myList = localStorage.getItem("to-do").split(",");
        printList(myList, orderedList);
        console.log(typeof(localStorage.getItem("to-do")));
    }
    
    function printList(myList, container){
        while(container.fistChild) {
            container.removeChild(container.firstChild);
            container.innerHTML = "";
        }
        
        myList.forEach(item =>{
            var listItem = document.createElement("li");
            var doneButton = document.createElement("button");
            doneButton.innerText = "Completed";
            var postponeButton = document.createElement("Button");
            postponeButton.innerText = "Postpone";

            listItem.innerText = item;
            listItem.appendChild(doneButton);
            listItem.appendChild(postponeButton);
            listItem.classList.add("todo_task");
            orderedList.appendChild(listItem);
        })
    }
}