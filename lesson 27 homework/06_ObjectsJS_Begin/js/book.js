/**
 * Book class
 * 
 * Properties (Traits):
 * 1. title
 * 2. author
 * 3. isbn
 * 4. year
 * 5. borrower
 * 6. dueDate
 * 
 * Methods (Behaviors):
 * 1. borrow()
 * 2. returnBook()
 * 3. isBorrowed()
 * 4. getBorrower()
 * 5. getDueDate()
 * 6. display(pageElement)
 */
class Book {
    
    // Create the constructor to initialise the object
    /**
     * @param {string} title
     * @param {string} author
     * @param {string} isbn
     * @param {string} year
     * 
     */
    constructor(title, author, isbn, year){
        // Required Inputs
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.year = year;
        
        // Optional Inputs
        this.borrower = "";
        this.dueDate = "";
    }

    /**
     * This is the function that is to be used when user want to borro a book
     * 
     * @param {Person} person
     * @param {string} dueDate
     */
    borrow(person, dueDate) {
        this.borrower = person;
        this.dueDate = dueDate;
    }

    /**
     * This function is used when a user returns the book. It 
     * simply resets the dueDate and the borrower
     */
    returnBook() {
        this.borrower = null;
        this.dueDate = null;
    }

    /**
     * 
     */
    isBorrowed() {
        return this.borrower !== null;
    }

    getBorrower() {
        return this.borrower;
    }

    getDueDate() {
        return this.dueDate;
    }

    /**
     * TODO: Display the book details in the DOM
     * 
     * @param {*} pageElement 
     * 
     * Steps to follow:
     * 1. use document.createElement() to create a div for the book card and assign it to a constant variable called bookCard
     *  - use classList to add the class "card" to the bookCard
     * 
     * 2. use document.createElement() to create a div for the card header and assign it to a constant variable called cardHeader
     * - use classList to add the class "card-header" to the cardHeader
     * - use textContent to set the text of the cardHeader to "Book"
     * - append the cardHeader to the bookCard using appendChild()
     * 
     * 3. use document.createElement() to create a div for the card body and assign it to a constant variable called cardBody
     * - use classList to add the class "card-body" to the cardBody
     * 
     * 4. use document.createElement() to create a paragraph for the book title and assign it to a constant variable called bookTitle
     * - use textContent to set the text of the bookTitle to:  "Title: " + ${this.title}
     * - append the bookTitle to the cardBody using appendChild()
     * 
     * 5. use document.createElement() to create a paragraph for the book author and assign it to a constant variable called bookAuthor
     * - use textContent to set the text of the bookAuthor to:  "Author: " + ${this.author}
     * - append the bookAuthor to the cardBody using appendChild()
     * 
     * 6. use document.createElement() to create a paragraph for the book isbn and assign it to a constant variable called bookISBN
     * - use textContent to set the text of the bookISBN to:  "ISBN: " + ${this.isbn}
     * - append the bookISBN to the cardBody using appendChild()
     * 
     * 7. use document.createElement() to create a paragraph for the book year and assign it to a constant variable called bookYear
     * - use textContent to set the text of the bookYear to:  "Year: " + ${this.year}
     * - append the bookYear to the cardBody using appendChild()
     * 
     * 8. append the cardBody to the bookCard using appendChild()
     * 
     * 9. append the bookCard to the pageElement using appendChild()
     * 
     * References (createElement): https://www.w3schools.com/jsref/met_document_createelement.asp
     * References (classList): https://www.w3schools.com/jsref/prop_element_classlist.asp
     * References (appendChild): https://www.w3schools.com/jsref/met_node_appendchild.asp
     * References (textContent): https://www.w3schools.com/jsref/prop_node_textcontent.asp
     * 
     */
    display(pageElement) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("card");
        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");
        cardHeader.textContent = `"Book"`;
        bookCard.appendChild(cardHeader);
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const bookTitle = document.createElement("p");
        bookTitle.textContent = `Title: ${this.title}`;
        cardBody.appendChild(bookTitle);
        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = `Author: ${this.author}`;
        cardBody.appendChild(bookAuthor);
        const bookISBN = document.createElement("p");
        bookISBN.textContent = `ISBN: ${this.isbn}`;
        cardBody.appendChild(bookISBN);
        const bookYear = document.createElement("p");
        bookYear.textContent = `Year: ${this.year}`;
        bookYear.appendChild(cardBody);
        bookCard.appendChild(cardBody);
        pageElement.appendChild(bookCard);
    }
}

export default Book;
