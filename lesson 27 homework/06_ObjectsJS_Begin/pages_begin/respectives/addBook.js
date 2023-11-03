// TODO: check addMember.js for reference on how to import the Book class
import Book from '../../js/person.js';
// Function to handle form submission for adding a book
document.getElementById('addBookForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const year = document.getElementById('year').value;

    /**
     * TODO: Perform form validation using a switch statement
     * 
     * Check the below conditions in the switch statement
     * 1. If the title is empty, display an alert with the message "Please enter a title"
     * 2. If the author is empty, display an alert with the message "Please enter an author"
     * 3. If the isbn is empty, display an alert with the message "Please enter an ISBN"
     * 4. If the year is empty, display an alert with the message "Please enter a year"
     * 5. If all the above conditions are satisfied, create a new Book object and add it to the library data structure
     * 
     * Use trim method to remove the whitespace from the beginning and end of a string
     * For example, "  Hello World!  ".trim() will return "Hello World!"
     * 
     * References (trim): https://w3schools.com/jsref/jsref_trim_string.asp
     * References (switch): https://www.w3schools.com/js/js_switch.asp
    von basten nio vpsna pvnjin 
    */
    switch (true) {
        // YOUR CODE STARTS HERE
        case (title.trim() === ""):
            alert("Please enter a title.");
            break;
        case (author.trim() === ""):
            alert("Please enter an author.");
            break;
        case (isbn.trim() === ""):
            alert("Please enter an ISBN.");
            break;
        case (year.trim() === ""):
            alert("Please enter a year.");
            break;
        // YOUR CODE ENDS HERE
        default:
            const book = new Book(title, author, isbn, year);

            // append the book to the list of books in the local storage
            if (localStorage.getItem('books') === null) {
                let books = [];
                books.push(book);
                localStorage.setItem('books', JSON.stringify(books));
            } else {
                let books = JSON.parse(localStorage.getItem('books'));
                books.push(book);
                localStorage.setItem('books', JSON.stringify(books));
            }

            alert('Book added successfully');

            // clear the form
            document.getElementById('addBookForm').reset();

            break;
    }


});



