window.onload = function () {
    /**
     * TODO:
     * 
     * > Create a list of alphabet letters (written as strings) and assign
     * them to a constant variable called alphabet.
     * 
     * Reference: https://www.w3schools.com/js/js_arrays.asp
     */
    const alphabet = [
        ///////////////// YOUR CODE STARTS HERE ///////////////
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
            "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
            ///////////////// YOUR CODE ENDS HERE /////////////////
    ];

    /**
     * TODO:
     * 
     * > Create the following variables (not constants):
     * 
     * 1. categories: An array of strings that will be used to select a
     *              category for the word to be guessed by user.
     * 
     * 2. chosenCategory: Will be used to store the category that is
     *              randomly selected from the categories array.
     * 
     * 3. word: Will be used to store the word to be guessed by user.
     * 
     * 4. guess: Will be used to store the letter that the user guesses.
     * 
     * 5. geusses: Will be used to store the letters that the user guesses.
     * 
     * 6. lives: Will be used to store the number of lives that the user
     *              has left.
     * 
     * 7. counter: Will be used to store the number of correct guesses
     *              that the user has made.
     * 
     * 8. space: Will be used to store the number of spaces in the word
     *              to be guessed by user.
     * 
     * Reference: https://www.w3schools.com/js/js_variables.asp 
     */
    var categories;
    ///////////////// YOUR CODE STARTS HERE ///////////////
    var chosenCategory;
    var word;
    var guess;
    var guesses;
    var lives;
    var counter;
    var space;
    ///////////////// YOUR CODE ENDS HERE /////////////////

    /**
     * TODO:
     * 
     * > Create the following constants:
     * 
     * 1. showLives: Use getElementById() to get the element with the id of
     *              "mylives" and assign it to this constant.
     * 
     * 2. showCatagory: Use getElementById() to get the element with the id
     *              of "scatagory" and assign it to this constant.
     * 
     * 3. getHint: Use getElementById() to get the element with the id of
     *              "hint" and assign it to this constant.
     * 
     * 4. showClue: Use getElementById() to get the element with the id of
     *              "clue" and assign it to this constant.
     */
    const showLives = document.getElementById("myLives");
    const showCatagory = document.getElementById("scatagory");
    const getHint = document.getElementById("hint");
    const showClue = document.getElementById("clue");
   
    /**
     * TODO:
     * 
     * > Create a function called buttons that takes no parameters.
     * 
     * > [Inside the buttons function]: Use getElementById() to get the element with 
     *                      the id of "buttons" and assign it to a constant variable called myButtons.
     * 
     * > [Inside the buttons function]: Create a constant variable called letters and assign it to a new
     *                      unordered list element. (use createElement() to create the ul element)
     * 
     * > [Inside the buttons function]: Create a for loop that loops through the alphabet array.
     *                                  The for loop should have the following:
     *                                  1. A counter variable called i that starts at 0.
     *                                  2. A condition that checks if i is less than the length of the alphabet array.
     *                                  3. A statement that increments the counter variable by 1.
     * 
     * > [Inside the buttons function]: Inside the for loop, create a constant variable called list and
     *                     assign it to a new list item element. (use createElement() to create the li element)
     * 
     * > [Inside the buttons function]: Inside the for loop, set the id of the list item element to "letter".
     * 
     * > [Inside the buttons function]: Inside the for loop, set the innerHTML of the list item element to
     *                    the current letter in the alphabet array.
     * 
     * > [Inside the buttons function]: Inside the for loop, call the check() function.
     * 
     * > [Inside the buttons function]: Inside the for loop, append the letters unordered list element
     *                   to the myButtons element.
     * 
     * > [Inside the buttons function]: Inside the for loop, append the list item element to the letters
     *                  unordered list element.
     * 
     * Reference (getElementById): https://www.w3schools.com/jsref/met_document_getelementbyid.asp
     * Reference (createElement): https://www.w3schools.com/jsref/met_document_createelement.asp
     * Reference (for loop): https://www.w3schools.com/js/js_loop_for.asp 
     */
    var list;
    var letters;
    const buttons = function () {
        const myButtons = document.getElementById("buttons");
        letters = document.createElement("ul");
        for (document.getElementById("alpabet")) {
            letters.id = "alphabet";
            list = document.createElement("li");
            list.id = "letter";
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    };

    /**
     * TODO:
     * 
     * > Create a function called selectCat that takes no parameters.
     * 
     * > [Inside the selectCat function]: Create a conditional statement that checks if the chosenCategory
     *                      variable is equal to the first element in the categories array.
     * 
     * > [Inside the selectCat function]: If the chosenCategory variable is equal to the first element in
     *                      the categories array, set the innerHTML of the showCatagory constant variable
     *                      to "The Chosen Category Is Premier League Football Teams".
     * 
     * > [Inside the selectCat function]: Create an else if statement that checks if the chosenCategory
     *                      variable is equal to the second element in the categories array.
     * 
     * > [Inside the selectCat function]: If the chosenCategory variable is equal to the second element in
     *                      the categories array, set the innerHTML of the showCatagory constant variable
     *                      to "The Chosen Category Is Films".
     * 
     * > [Inside the selectCat function]: Create an else if statement that checks if the chosenCategory
     *                      variable is equal to the third element in the categories array.
     * 
     * > [Inside the selectCat function]: If the chosenCategory variable is equal to the third element in
     *                      the categories array, set the innerHTML of the showCatagory constant variable
     *                      to "The Chosen Category Is Cities".
     * 
     * Reference (if else): https://www.w3schools.com/js/js_if_else.asp
     * Reference (getElementById): https://www.w3schools.com/jsref/met_document_getelementbyid.asp
     * Reference (innerHTML): https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     */
    const selectCat = function () {
        if (chosenCategory === categories[0]) {
            catagoryName.innerHTML =
            "The chosen category is Premier League football teams";
        } else if (chosenCategory === categories[1]) {
                    categoryName.innerHTML =
                    "The chosen category is films.";
        } else if (chosenCategory === categories[2]) {
                    categoryName.innerHTML = 
                    "The chosen category is cities."
        };    

    /**
     * TODO:
     * 
     * > Create a function called result that takes no parameters.
     * 
     * > [Inside the result function]: Use getElementById() to get the element with the id of "hold" and
     *                     assign it to a constant variable called wordHolder.
     * 
     * > [Inside the result function]: Create a new unordered list element and assign it to a constant
     *                      variable called correct.
     * 
     * > [Inside the result function]: Create a for loop that loops through the word array.
     *                                 The for loop should have the following:
     *                                  1. A counter variable called i that starts at 0.
     *                                  2. A condition that checks if i is less than the length of the word array.
     *                                  3. A statement that increments the counter variable by 1.
     * 
     * > [Inside the result function]: Inside the for loop, create a constant variable called guess and
     *                      assign it to a new list item element. (use createElement() to create the li element)
     * 
     * > [Inside the result function]: Inside the for loop, set the class of the list item element to "guess".
     * 
     * > [Inside the result function]: Inside the for loop, create an if statement that checks if the current
     *                      letter in the word array is equal to "-".
     * 
     * > [Inside the result function]: Inside the if statement, set the innerHTML of the guess constant
     *                      variable to "-".
     * 
     * > [Inside the result function]: Inside the if statement, set the space variable to 1.
     * 
     * > [Inside the result function]: Create an else statement that sets the innerHTML of the guess constant
     *                     variable to "_".
     * 
     * > [Inside the result function]: Outside of the if/else statement, push the guess constant variable
     *                     to the geusses array.
     * 
     * > [Inside the result function]: Outside of the if/else statement, use the appendChild() method to
     *                      append the correct unordered list element to the wordHolder constant variable. 
     * > [Inside the result function]: Outside of the if/else statement, use the appendChild() method to
     *                      append the guess list item element to the correct constant variable.
     * 
     * Reference (getElementById): https://www.w3schools.com/jsref/met_document_getelementbyid.asp
     * Reference (createElement): https://www.w3schools.com/jsref/met_document_createelement.asp
     * Reference (for loop): https://www.w3schools.com/js/js_loop_for.asp
     * Reference (if else): https://www.w3schools.com/js/js_if_else.asp
     * Reference (appendChild): https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    var correct;
    result = function () {
        const wordholder = document.getElementById("hold");
        const correct = createListElement("newUnorderedListElement");
    for(array;;){
        const guess = document.createElement("li")
        classList = guess
?        if (currentLetter in Array ) "-"{}
?
        appendChild("correctUnorderedListElement", "wordHolder");
        appendChild("guessListItemElement", "correctConstantVariable")
    }
    };

    /**
     * TODO:
     * 
     * > Create a function called comments that takes no parameters.
     * 
     * > [Inside the comments function]: Set the innerHTML of the showLives constant variable to "You have " +
     *                     the lives variable + " lives".
     * 
     * > [Inside the comments function]: Create a for loop that loops through the geusses array.
     *                                The for loop should have the following:
     *                                 1. A counter variable called i that starts at 0.
     *                               2. A condition that checks if the counter variable is equal to the length of the geusses array.
     *                              3. A statement that increments the counter variable by 1. 
     * 
     * > [Inside the comments function]: Inside the for loop, create an if statement that checks if the sum of the counter
     *                     variable and the space variable (counter + space) is equal to the length of the geusses array.
     * 
     * > [Inside the comments function]: Inside the if statement, set the innerHTML of the showLives constant variable to "You Win!".
     * 
     * > [Inside the comments function]: Outside of the if statement, create an else statement that sets the innerHTML of the
     *                    showLives constant variable to "Game Over".
     * 
     * Reference (for loop): https://www.w3schools.com/js/js_loop_for.asp
     * Reference (if else): https://www.w3schools.com/js/js_if_else.asp
     * Reference (innerHTML): https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     */
    const comments = function () {
        showLives.innerHTML = "You have " + lives + " lives"; 
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
        }

        for (
            ///////////////// YOUR CODE STARTS HERE ///////////////
                if ("counter" + "space" = lengthOfGuessesArray)
                    const showLives = document.getElementById("You win!");
            ///////////////// YOUR CODE ENDS HERE /////////////////

        ) {
            ///////////////// YOUR CODE STARTS HERE ///////////////
                else( ?const showLives = document.getElementById("Game Over"))=>nothing;
    
            ///////////////// YOUR CODE ENDS HERE /////////////////
        }
    };

    // Animate man
    var animate = function () {
        var drawMe = lives;
        drawArray[drawMe]();
    };

    // Hangman
    canvas = function () {
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext("2d");
        context.beginPath();
        context.strokeStyle = "#fff";
        context.lineWidth = 2;
    };

    head = function () {
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext("2d");
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI * 2, true);
        context.stroke();
    };

    draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke();
    };

    frame1 = function () {
        draw(0, 150, 150, 150);
    };

    frame2 = function () {
        draw(10, 0, 10, 600);
    };

    frame3 = function () {
        draw(0, 5, 70, 5);
    };

    frame4 = function () {
        draw(60, 5, 60, 15);
    };

    torso = function () {
        draw(60, 36, 60, 70);
    };

    rightArm = function () {
        draw(60, 46, 100, 50);
    };

    leftArm = function () {
        draw(60, 46, 20, 50);
    };

    rightLeg = function () {
        draw(60, 70, 100, 100);
    };

    leftLeg = function () {
        draw(60, 70, 20, 100);
    };

    drawArray = [
        rightLeg,
        leftLeg,
        rightArm,
        leftArm,
        torso,
        head,
        frame4,
        frame3,
        frame2,
        frame1,
    ];

    // OnClick Function
    check = function () {
        list.onclick = function () {
            var geuss = this.innerHTML;
            this.setAttribute("class", "active");
            this.onclick = null;

            for (var i = 0; i < word.length; i++) {
                if (word[i] === geuss) {
                    geusses[i].innerHTML = geuss;
                    counter += 1;
                }
            }

            var j = word.indexOf(geuss);

            if (j === -1) {
                lives -= 1;
                comments();
                animate();
            } else {
                comments();
            }
        };
    };

    /**
     * EXAMPLE IMPLEMENTATION:
     * 
     * > Create a function called buttons that takes no parameters.
     * 
     * > [Inside the buttons function]: Create a variable called myButtons that creates a new div element.
     * 
     * > [Inside the buttons function]: Set the innerHTML of the myButtons variable to the alphabet array.
     * 
     * > [Inside the buttons function]: Append the myButtons variable to the buttons variable.
     * 
     * > [Inside the buttons function]: Create a variable called letters that gets all of the list items in the buttons variable.
     * 
     * > [Inside the buttons function]: Create a for loop that loops through the letters variable.
     *                                The for loop should have the following:
     *                                 1. A counter variable called i that starts at 0.
     *                               2. A condition that checks if the counter variable is less than the length of the letters variable.
     *                              3. A statement that increments the counter variable by 1. 
     * 
     * > [Inside the buttons function]: Inside the for loop, set the innerHTML of the letters variable to the alphabet array.
     * 
     * > [Inside the buttons function]: Call the check function.
     * 
     * Reference (for loop): https://www.w3schools.com/js/js_loop_for.asp
     * Reference (innerHTML): https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * Reference (appendChild): https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    play = function () {
        categories = [
            [ "everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united", ],
            [ "alien", "dirty-harry", "gladiator", "finding-nemo", "jaws" ],
            [ "manchester", "milan", "madrid", "amsterdam", "prague" ]
        ];

        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();

        geusses = [];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        canvas();
    };

    // Call the play function
    play();

    /**
     * EXAMPLE IMPLEMENTATION:
     * 
     * > Add an onclick event to the hint variable.
     * 
     * > [Inside the onclick event]: Create a variable called catagoryIndex that gets the index of the chosenCategory variable.
     * 
     * > [Inside the onclick event]: Create a variable called hintIndex that gets the index of the word variable.
     * 
     * > [Inside the onclick event]: Set the innerHTML of the showClue variable to the hint array.
     * 
     * Reference (indexOf): https://www.w3schools.com/jsref/jsref_indexof_array.asp
     * Reference (innerHTML): https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     */
    hint.onclick = function () {
        hints = [
            [
                "Based in Mersyside",
                "Based in Mersyside",
                "First Welsh team to reach the Premier Leauge",
                "Owned by A russian Billionaire",
                "Once managed by Phil Brown",
                "2013 FA Cup runners up",
                "Gazza's first club",
            ],
            [
                "Science-Fiction horror film",
                "1971 American action film",
                "Historical drama",
                "Anamated Fish",
                "Giant great white shark",
            ],
            [
                "Northern city in the UK",
                "Home of AC and Inter",
                "Spanish capital",
                "Netherlands capital",
                "Czech Republic capital",
            ],
        ];

        var catagoryIndex = categories.indexOf(chosenCategory);
        var hintIndex = chosenCategory.indexOf(word);
        showClue.innerHTML = "Clue: - " + hints[catagoryIndex][hintIndex];
    };

    /**
     * EXAMPLE IMPLEMENTATION:
     * 
     * > Add an onclick event to the reset variable.
     * 
     * > [Inside the onclick event]: Remove the correct variable from the DOM.
     * 
     * > [Inside the onclick event]: Remove the letters variable from the DOM.
     * 
     * > [Inside the onclick event]: Set the innerHTML of the showClue variable to an empty string.
     * 
     * > [Inside the onclick event]: Clear the canvas.
     * 
     * > [Inside the onclick event]: Call the play function.
     * 
     * Reference (removeChild): https://www.w3schools.com/jsref/met_node_removechild.asp
     * Reference (innerHTML): https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * Reference (clearRect): https://www.w3schools.com/tags/canvas_clearrect.asp
     */
    document.getElementById("reset").onclick = function () {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);

        showClue.innerHTML = "";
        context.clearRect(0, 0, 400, 400);
        play();

        };
    };
}