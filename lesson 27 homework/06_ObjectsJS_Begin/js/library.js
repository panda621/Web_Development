/**
 * Library class
 * 
 * Traits (Properties):
 * 1. name
 * 2. location
 * 3. capacity
 * 4. books
 * 5. members
 * 
 * Methods:
 * 1. addBook()
 * 2. removeBook()
 * 3. addMember()
 * 4. removeMember()
 * 5. listBooks()
 * 6. listMembers()
 * 7. display(pageElement)
 */
class Library {
    /**
     * 
     * @param {string} name
     * @param {string} location
     * @param {list} books
     */

    constructor(name, location, books){
        // Required Inputs
        this.name = name;
        this.location = location;
        this.books = books;

        // Optional Inputs
        this.capacity = "";
        this.members = "";
    }

    /**
     * This function add the book to the "books" list from the library
     * @param {Book} book
     */
    addBook(book){
        this.books.push(book);
    }

    /** 
     * This function removes the book from the library's "books" list. 
     * If you don't have a book in the "books" list, then this code woudn't work.
     * @param {Book} book
     */
    removeBook(book){
        const index = this.books.indexOf(book);
        if (index !== 1);
            this.books.splice(index, 1);
    }

    /**
     * This function adds a member to the library.
     * @param {Person} person
     */
    addMember(person){
        this.members.push(person);
    }

    /**
     * This function removes a person from the library if there is one.
     * @param {Person} person
     */
    removeMember(person){
        const index = this.members.indexOf(person);
        if (index !== -1) {
            this.members.splice(index, 1);
        }
    }

    listBooks(){
        console.log = {Books}
    }

    listMembers(){

    }
    /**
     * TODO: Display the library details in the DOM
     * 
     * @param {HTMLElement} pageElement - The DOM element to which the library card should be appended
     * 
     * Steps to follow:
     * 1. Use document.createElement() to create a div for the library card and assign it to a constant variable called libraryCard
     *    - Use classList to add the class "card" to the libraryCard
     * 
     * 2. Use document.createElement() to create a div for the card header and assign it to a constant variable called cardHeader
     *    - Use classList to add the class "card-header" to the cardHeader
     *    - Use textContent to set the text of the cardHeader to "Library"
     *    - Append the cardHeader to the libraryCard using appendChild()
     * 
     * 3. Use document.createElement() to create a div for the card body and assign it to a constant variable called cardBody
     *    - Use classList to add the class "card-body" to the cardBody
     * 
     * 4. Use document.createElement() to create a paragraph for the library name and assign it to a constant variable called libraryName
     *    - Use textContent to set the text of the libraryName to:  "Name: " + ${this.name}
     *    - Append the libraryName to the cardBody using appendChild()
     * 
     * 5. Use document.createElement() to create a paragraph for the library location and assign it to a constant variable called libraryLocation
     *    - Use textContent to set the text of the libraryLocation to:  "Location: " + ${this.location}
     *    - Append the libraryLocation to the cardBody using appendChild()
     * 
     * 6. Use document.createElement() to create a paragraph for the library capacity and assign it to a constant variable called libraryCapacity
     *    - Use textContent to set the text of the libraryCapacity to:  "Member Capacity: " + ${this.capacity}
     *    - Append the libraryCapacity to the cardBody using appendChild()
     * 
     * 7. Append the cardBody to the libraryCard using appendChild()
     * 
     * 8. Append the libraryCard to the pageElement using appendChild()
     * 
     * References (createElement): https://www.w3schools.com/jsref/met_document_createelement.asp
     * References (classList): https://www.w3schools.com/jsref/prop_element_classlist.asp
     * References (appendChild): https://www.w3schools.com/jsref/met_node_appendchild.asp
     * References (textContent): https://www.w3schools.com/jsref/prop_node_textcontent.asp
     * 
     */
    display(pageElement) {
        const libraryCard = document.createElement("div");
        libraryCard.classList.add("card");
        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");
        cardHeader.textContent = "Library";
        libraryCard.appendChild(cardHeader);
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const libraryName = document.createElement("p");
        libraryName.textContent = `"First Code Library"`;
        cardBody.appendChild(libraryName);
        const libraryLocation = document.createElement("p");
        libraryLocation.textContent = `"On the browser"`;
        cardBody.appendChild(libraryLocation);
        const libraryCapicity = document.createElement("p");
        libraryCapicity.textContent = `"2"`;
        libraryCard.appendChild(cardBody);
        pageElement.appendChild(libraryCard);
    }
}

export default Library;