import Person from '../../js/person.js'; // Import other classes similarly

// Function to handle form submission for adding a member
document.getElementById('addMemberForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    /**
     * TODO: Perform form validation using a switch statement
     * 
     * Check the below conditions in the switch statement
     * 1. If the name is empty, display an alert with the message "Please enter a name"
     * 2. If the age is empty, display an alert with the message "Please enter an age"
     * 3. If all the above conditions are satisfied, create a new Person object and add it to the library data structure
     * 
     * Use trim method to remove the whitespace from the beginning and end of a string
     * For example, "  Hello World!  ".trim() will return "Hello World!"
     * 
     * References (trim): https://w3schools.com/jsref/jsref_trim_string.asp
     * References (switch): https://www.w3schools.com/js/js_switch.asp
     */
    // is there only one case? And how do you inplement if statements in a switch statement?
    switch (true) {
        // YOUR CODE STARTS HERE
        case (name.trim() === ""):
            alert("Please enter a name.");
            break;
        case (age.trim() === ""):
            alert("Please enter an age.");
            break;
        // YOUR CODE ENDS HERE
        default:
            const member = new Person(name, age);

            // append the member to the list of members in the local storage
            if (localStorage.getItem('members') === null) {
                let members = [];
                members.push(member);
                localStorage.setItem('members', JSON.stringify(members));
            } else {
                let members = JSON.parse(localStorage.getItem('members'));
                members.push(member);
                localStorage.setItem('members', JSON.stringify(members));
            }

            alert('Member added successfully');

            // clear the form
            document.getElementById('addMemberForm').reset();

            break;
    }

});
