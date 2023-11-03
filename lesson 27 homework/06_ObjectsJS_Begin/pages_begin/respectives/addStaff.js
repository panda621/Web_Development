// TODO: check addMember.js for reference on how to import the Staff class
import Staff from '../../js/staff.js';
// Function to handle form submission for adding a staff
document.getElementById('addStaffForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const staffID = document.getElementById('staffID').value;

    /**
     * TODO: Perform form validation using a switch statement
     *
     * Check the below conditions in the switch statement
     * 1. If the name is empty, display an alert with the message "Please enter a name"
     * 2. If the email is empty, display an alert with the message "Please enter an email"
     * 3. If the staffID is empty, display an alert with the message "Please enter a staff ID"
     * 4. If all the above conditions are satisfied, create a new Staff object and add it to the library data structure
     * 
     * Use trim method to remove the whitespace from the beginning and end of a string
     * For example, "  Hello World!  ".trim() will return "Hello World!"
     * 
     * References (trim): https://w3schools.com/jsref/jsref_trim_string.asp
     * References (switch): https://www.w3schools.com/js/js_switch.asp
     */
    switch (true) {
        // YOUR CODE STARTS HERE
        case (name.trim() === ""):
            alert("Please enter a name.");
            break;
        case (email.trim() === ""):
            alert("Please enter an email.");
            break;
        case (staffID.trim() === ""):
            alert("Please enter a staff ID.");
            break;
        // YOUR CODE ENDS HERE
        default:
            const staff = new Staff(name, email, staffID);

            // append the book to the list of books in the local storage
            if (localStorage.getItem('staff_members') === null) {
                let staff_members = [];
                staff_members.push(staff);
                localStorage.setItem('staff_members', JSON.stringify(staff_members));
            } else {
                let staff_members = JSON.parse(localStorage.getItem('staff_members'));
                staff_members.push(staff);
                localStorage.setItem('staff_members', JSON.stringify(staff_members));
            }

            alert('Staff member added successfully');
            // clear the form
            document.getElementById('addStaffForm').reset();

            break;
    }
});