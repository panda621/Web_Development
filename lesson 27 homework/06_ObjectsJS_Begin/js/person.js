/**
 * Person class
 * 
 * Traits:
 * 1. name
 * 2. age
 * 3. borrowedBooks
 * 
 * Methods:
 * 1. borrowBook()
 * 2. returnBook()
 * 3. listBorrowedBooks()
 * 4. display(pageElement)
 */
class Person {
    /**
     * @param {string} name
     * @param {number} age
     */

    constructor(name, age){
        // Required Inputs
        this.name = name;
        this.age = age;
        // Optional Inputs
        this.borrowedBooks = [];
    }
    
    borrowBooks(){

    }

    returnBook(){

    }

    listBorrowedBooks(){
        
    }
    /**
     * TODO: Display the person details in the DOM
     * 
     * @param {HTMLElement} pageElement - The DOM element to which the person card should be appended
     * 
     * Steps to follow:
     * 1. Use document.createElement() to create a div for the person card and assign it to a constant variable called personCard
     *    - Use classList to add the class "card" to the personCard
     * 
     * 2. Use document.createElement() to create a div for the card header and assign it to a constant variable called cardHeader
     *    - Use classList to add the class "card-header" to the cardHeader
     *    - Use textContent to set the text of the cardHeader to "Person"
     *    - Append the cardHeader to the personCard using appendChild()
     * 
     * 3. Use document.createElement() to create a div for the card body and assign it to a constant variable called cardBody
     *    - Use classList to add the class "card-body" to the cardBody
     * 
     * 4. Use document.createElement() to create a paragraph for the person name and assign it to a constant variable called personName
     *    - Use textContent to set the text of the personName to:  "Name: " + ${this.name}
     *    - Append the personName to the cardBody using appendChild()
     * 
     * 5. Use document.createElement() to create a paragraph for the person age and assign it to a constant variable called personAge
     *    - Use textContent to set the text of the personAge to:  "Age: " + ${this.age}
     *    - Append the personAge to the cardBody using appendChild()
     * 
     * 6. Use document.createElement() to create a paragraph for the number of borrowed books and assign it to a constant variable called borrowedBooks
     *    - Use textContent to set the text of the borrowedBooks to:  "Borrowed Books: " + ${this.borrowedBooks.length}
     *    - Append the borrowedBooks to the cardBody using appendChild()
     * 
     * 7. Append the cardBody to the personCard using appendChild()
     * 
     * 8. Append the personCard to the pageElement using appendChild()
     * 
     * Reference (createElement): https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
     * Reference (classList): https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
     * Reference (appendChild): https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
     * Reference (textContent): https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
     * 
    */
    display(pageElement) {
        const personCard = document.createElement("div");
        personCard.classList.add("card");
        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");
        cardHeader.textContent = "Person";
        personCard.appendChild(cardHeader);
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const personName = document.createElement("p");
        personName.textContent = `"Aison"`;
        cardBody.appendChild(personName);
        const personAge = document.createElement("p");
        personAge.textContent = `"9"`;
        cardBody.appendChild(personAge);
        const borrowedBooks = document.createElement("p");
        borrowedBooks.textContent = `"w3schools"`;
        borrowedBooks.appendChild(cardBody);
        personCard.appendChild(cardBody);
        pageElement.appendChild(personCard);
    }
}

export default Person;