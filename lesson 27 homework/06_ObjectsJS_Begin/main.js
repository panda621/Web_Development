import Library from './js/library.js';
import Book from './js/book.js';
import Person from './js/person.js';
import Staff from './js/staff.js';

window.addEventListener('DOMContentLoaded', () => {
    // Create instances of Library, Book, and Person
    const library = new Library('Central Library', 'New York', 1000);
    
    const book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '978-3-16-148410-0', 2000);
    const book0 = new Book("Mid-Summer Night's Dream", "William Shakespeare", "958-6-16-235440-0", 1668);
    const book1 = new Book("Paradise Lost", "John Milton", "958-6-16-148410-0", 1645);
    const book2 = new Book("Charlie and the Chocolate Factory", "Roald Dahl", "980-8-16-148938-0", 2001);
    const book3 = new Book("Dog Man", "Dav Pilkey", "912-8-16-148678-0", 2016);
     // Instantiate the new staff 
    const staff = new Staff("Grandpa Panda", "grandpapanda1224@gmail.com", "gp1224");
    // Console log the individual fields of the staff:
    // console.log(`Staff Name: ${staff.name}`);
    console.log(`Staff ID: ${staff.staffId}`);
    console.log(`Email: ${staff.email}`);
    console.log(`Name: ${staff.name}`)
    // Assign Grandpa panda some working days and some tasks using the functions created in 

    const person = new Person('John Doe', 25);

    // Inside the display method of Library class
    const libraryCard = document.createElement("div");
    libraryCard.classList.add("card", "library-card");

    // Inside the display method of Book class
    const bookCard = document.createElement("div");
    bookCard.classList.add("card", "book-card");

    // Inside the display method of Person class
    const personCard = document.createElement("div");
    personCard.classList.add("card", "person-card");


    // get the main element
    const pageElement = document.querySelector('#display');

    // Display details in the DOM
    library.display(libraryCard);

    book.display(bookCard);
    book0.display(bookCard);
    book1.display(bookCard);
    book2.display(bookCard);
    book3.display(bookCard);
    
    person.display(personCard);

    // Append the cards to the main element
    pageElement.appendChild(libraryCard);
    pageElement.appendChild(bookCard);
    pageElement.appendChild(personCard);

});