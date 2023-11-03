window.onload = function() {
    /**
     * > Create a variable called cardData and assign it an array of pairs of alphabet letters from A to X
     * e.g ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', ...]
     */
    const cardData = [
        'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', "E", 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', "O", "P", "P", "Q", "Q", "R", "R", "S", "S", "T", "T", "U", "U", "V", "V", "W", "W", "X", "X", "Y", "Y", "Z", "Z"];
    /**
     * TODO: 
     * > Create a function called shuffle that takes an array as a parameter
     * and returns a shuffled version of the array
     * 
     * STEPS:
     * 1. Create a variable called currentIndex and assign it the length of the array
     * 2. Create a variable called temporaryValue
     * 3. Create a variable called randomIndex
     * 4. Create a while loop that runs as long as currentIndex is not 0
     * 5. [ Inside the while loop ] Generate a random number between 0 and currentIndex using the Math.random() function
     *  - Use the Math.floor() function to round down the random number
     * 6. [ Inside the while loop ] Decrement currentIndex by 1
     * - Use the decrement operator (-=) to decrement currentIndex by 1
     * 7. [ Inside the while loop ] assign the value of array[currentIndex] to temporaryValue
     * 8. [ Inside the while loop ] assign the value of array[randomIndex] to array[currentIndex]
     * 9. [ Inside the while loop ] assign the value of temporaryValue to array[randomIndex]
     * 
     * Reference (While loop): https://www.w3schools.com/js/js_loop_while.asp
     * Reference (Math.random()): https://www.w3schools.com/js/js_random.asp
     * Reference (Math.floor()): https://www.w3schools.com/jsref/jsref_floor.asp
     * Reference (Decrement operator): https://www.w3schools.com/js/js_operators.asp   
     * 
     * @param {*} array 
     * @returns Returns a shuffled version of the array
     */
    function shuffle(array) {
        var currentIndex = array.length;
        var temporaryValue;
        var randomIndex;       

        // While loop with the condition currentIndex is not == 0
        while (currentIndex !== 0) {
            Math.floor(Math.random()  *currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    /**
     * TODO:
     * > Create a function called generateCards that takes no inputs and generates the cards on the page
     * 
     * STEPS:
     * 1. Create a variable called gameBoard and assign it the element with the id 'game-board'.
     *    - Use the getElementById method to select the element with the id 'game-board'
     * 2. Call the shuffle function and pass in cardData as a parameter. Assign the return value to a variable called shuffledData
     * 3. Use the forEach method on the shuffledData array to create a card for each element in the array
     * 4. [ Inside the forEach method ] Create a variable called card and assign it a new div element
     *    - Use the createElement method to create a new div element
     * 5. [ Inside the forEach method ] Add the 'card' class to the card element
     * 6. [ Inside the forEach method ] Add a p element to the card element and set its text content to the current element in the shuffledData array
     * 7. [ Inside the forEach method ] Add the 'unflipped' class to the p element
     * 8. [ Inside the forEach method ] Add a click event listener to the card element and set its callback to the flipCard function
     *   - Use the addEventListener method to add a click event listener to the card element
     * 9. [ Inside the forEach method ] Append the card element to the gameBoard element
     * 
     * Reference (forEach): https://www.w3schools.com/jsref/jsref_foreach.asp
     * Reference (createElement): https://www.w3schools.com/jsref/met_document_createelement.asp
     * Reference (appendChild): https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    function generateCards() {
        const gameBoard = document.getElementById('game-board');
        const shuffledData = shuffle(cardData);

        shuffledData.forEach((data) => {
            const card = document.createElement("card");
            card.classList.add('card');
            card.innerHTML=`<p>${data}</p>`;
            card.children[0].classList.add('unflipped');

            card.addEventListener("click", flipCard);

            gameBoard.appendChild(card);

        });
    }

    /**
     * TODO:
     * > Create a function called flipCard that flips the card that is clicked if it is not already flipped
     * 
     * STEPS:
     * 1. Create an if-statement that checks if the card that is clicked does not have the 'flipped' class
     * 2. [ Inside the if-statement ] Remove the 'unflipped' class from the p element inside the card that is clicked
     * to make the card visible
     * 3. [ Inside the if-statement ] Add the 'flipped' class to the card that is clicked
     * 4. [ Inside the if-statement ] Add the card that is clicked to the flippedCards array using the push method
     * 5. [ Inside the if-statement ] Create another if-statement that checks if the length of the flippedCards array is equal to 2
     * 6. [ Inside the second if-statement ] Call the checkMatch function
     * 
     * Reference (if-statement): https://www.w3schools.com/js/js_if_else.asp
     * Reference (classList): https://www.w3schools.com/jsref/prop_element_classlist.asp
     * Reference (push): https://www.w3schools.com/jsref/jsref_push.asp
     * 
     */
    function flipCard() {
        // Prevent flipping more than 2 cards simultaneously
        if (flippedCards.length < 2 && !this.classList.contains('flipped')) {

            this.children[0].classList.remove('unflipped');
            this.classList.add('flipped');
            flippedCards.push(this);

            // Check for match when 2 cards are flipped
            if (flippedCards.length === 2) {
                checkMatch();
            }
        }
    }

    /**
     * TODO:
     * > Create a function called checkMatch that checks if the two flipped cards match
     * 
     * STEPS:
     * 1. Create a variable called card1 and assign it the first element in the flippedCards array
     * 2. Create another variable called card2 and assign it the second element in the flippedCards array
     * 3. Create an if-statement that checks if the text content of card1 is equal to the text content of card2
     * 4. [ Inside the if-statement ] Remove the click event listener from card1 and card2
     * 5. [ Inside the if-statement ] Add the 'matched' class to card1 and card2 if they match
     * 6. [ Inside the if-statement ] Increment the score by 2 if the cards match
     * - Use the increment operator (+=) to increment the score by 2
     * 7. Create an else-statement that executes if the cards do not match
     * 8. [ Inside the else-statement ] Create a setTimeout function that removes the 'flipped' class from card1 and card2 
     * then adds the 'unflipped' class to the p element inside card1 and card2 after 1000 milliseconds
     * 9. [ Inside the else-statement ] Add the 'wrong' class to card1 and card2 and remove the 'flipped' class from card1 and card2
     * 10. [ Inside the else-statement ] Create a setTimeout function that removes the 'wrong' class from card1 and card2 after 600 milliseconds
     * 11. [ Inside the else-statement ] Add the 'unflipped' class to the p element inside card1 and card2
     * 12. Reset the flippedCards array to an empty array
     * 13. Call the updateScore() function
     * 14. Call the checkGameEnd() function
     * 
     * Reference (if-statement): https://www.w3schools.com/js/js_if_else.asp
     * Reference (classList): https://www.w3schools.com/jsref/prop_element_classlist.asp
     * Reference (setTimeout): https://www.w3schools.com/jsref/met_win_settimeout.asp
     * Reference (textContent): https://www.w3schools.com/jsref/prop_node_textcontent.asp
     * Reference (operator): https://www.w3schools.com/js/js_operators.asp
     */
    function checkMatch() {
        const card1 = flippedCards[0];
        const card2 = flippedCards[1];

        if (card1.textContent === card2.textContent) {
            // Match found
            card1.removeEventListener('click', flipCard);
            card2.removeEventListener('click', flipCard);
            card1.classList.add('matched');
            card2.classList.add('matched');
            score += 2;
        } else {
            // No match
            setTimeout(() => {
                card1.classList.add('wrong');
                card2.classList.add('wrong');
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');

                setTimeout(() => {
                    card1.classList.remove('wrong');
                    card2.classList.remove('wrong');
                }, 600);

                card1.children[0].classList.add('unflipped');
                card2.children[0].classList.add('unflipped');
            }, 1000);
        }

        flippedCards = [];
        updateScore();
        checkGameEnd();
    }

    // Update score display
    function updateScore() {
        const scoreDisplay = document.getElementById('score');
        scoreDisplay.textContent = score;
    }

        // Check if the game has ended
    function checkGameEnd() {
        const matchedCards = document.querySelectorAll('.matched');
        if (matchedCards.length === cardData.length) {
            setTimeout(() => {
            alert('Congratulations! You have completed the game.');
            }, 500);
        }
    }

    // Global variables
    let flippedCards = [];
    let score = 0;

    // Generate cards on page load
    generateCards();
}