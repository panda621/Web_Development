window.onload = function() {
    /**
     * EXAMPLE IMPLEMENTATION:
     * > Capture the question1 input box
     *     Hint: use the getElementById method to capture the input box;
     *    Reference: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
     * 
     * > Do the same for the rest of the questions ( question2 - question10 )
     */
    const question1 = document.getElementById("question1");
    const question2 = document.getElementById("question2");
    const question3 = document.getElementById("question3");
    const question4 = document.getElementById("question4");
    const question5 = document.getElementById("question5");
    const question6 = document.getElementById("question6");
    const question7 = document.getElementById("question7");
    const question8 = document.getElementById("question8");
    const question9 = document.getElementById("question9");
    const question10 = document.getElementById("question10");

    /**
     * EXAMPLE IMPLEMENTATION:
     * > Capture the question1 feedback box
     *    Hint: use the getElementById method to capture the feedback box;
     *   Reference: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
     * 
     * > Do the same for the rest of the questions ( question2 - question10 )
     */
    const q1_feeback = document.getElementById("q1_feedback");
    const q2_feeback = document.getElementById("q2_feedback");
    const q3_feeback = document.getElementById("q3_feedback");
    const q4_feeback = document.getElementById("q4_feedback");
    const q5_feeback = document.getElementById("q5_feedback");
    const q6_feeback = document.getElementById("q6_feedback");
    const q7_feeback = document.getElementById("q7_feedback");
    const q8_feeback = document.getElementById("q8_feedback");
    const q9_feeback = document.getElementById("q9_feedback");
    const q10_feeback = document.getElementById("q10_feedback");

    /**
     * EXAMPLE IMPLEMENTATION:
     * > Create an array of choices for question1
     *   Hint: use the const keyword to create a constant variable
     *  Reference: https://www.w3schools.com/js/js_let.asp
     * 
     * > Do the same for the rest of the questions ( question2 - question10 ) 
     */
    const q1_choices = ["Condor Galaxy", "Andromeda Galaxy", "Milky Way Galaxy", "Whirlpool Galaxy"];
    const q2_choices = ["Jupiter", "Saturn", "Neptune", "Uranus"];
    const q3_choices = ["Ganymede", "Titan", "Callisto", "Io"];
    const q4_choices = ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean" ];
    const q5_choices = ["Russia", "Canada", "China", "United States"];
    const q6_choices = ["Asia", "Africa", "North America", "South America"];
    const q7_choices = ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"];
    const q8_choices = ["Mount Everest", "Mount Kilimanjaro", "Mount Elbrus", "Mount Aconcagua"];
    const q9_choices = ["Sahara Desert", "Gobi Desert", "Arabian Desert", "Atacama Desert"];
    const q10_choices = ["Greenland", "New Guinea", "Borneo", "Madagascar"];

    /**
     * TODO:
     * > Attach the onblur event to the question1 input box
     *      OPTIONS:
     *      a. You could use dot notation to attach the event
     *      Hint: question1.onblur = function() { ... }
     *      Reference: https://www.w3schools.com/jsref/event_onblur.asp
     *           
     *      b. You could use the addEventListener method to attach the event
     *      Hint: question1.addEventListener("blur", function() { ... });
     *      Reference: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
     * 
     * > Create an if statement to check if the question1 input box is empty
     *      Hint: if ( question1.value ... ) { ... }
     *      Reference: https://www.w3schools.com/jsref/prop_text_value.asp
     * 
     * > If the question1 input box is empty, then display an alert message to the user
     *      Hint: alert("Please enter a value for question 1");
     *      Reference: https://www.w3schools.com/jsref/met_win_alert.asp
     *  
     */
    question1.onblur = function() {
        if ( question1.value == "" ) {
            alert("Please enter a value for question 1");
        } 
    }

    /**
     * TODO:
     * > Repeat the above steps for the rest of the questions ( question2 - question10 )
     */
    question2.onblur = function() {
        if ( question2.value == "" ) {
            alert("Please enter a value for question 2");
        } 
    }
    question3.onblur = function() {
        if ( question3.value == "" ) {
            alert("Please enter a value for question 3");
        } 
    }
    question4.onblur = function() {
        if ( question4.value == "" ) {
            alert("Please enter a value for question 4");
        } 
    }
    question5.onblur = function() {
        if ( question5.value == "" ) {
            alert("Please enter a value for question 5");
        } 
    }
    question6.onblur = function() {
        if ( question6.value == "" ) {
            alert("Please enter a value for question 6");
        } 
    }
    question7.onblur = function() {
        if ( question7.value == "" ) {
            alert("Please enter a value for question 7");
        } 
    }
    question8.onblur = function() {
        if ( question8.value == "" ) {
            alert("Please enter a value for question 8");
        } 
    }
    question9.onblur = function() {
        if ( question9.value == "" ) {
            alert("Please enter a value for question 9");
        } 
    }
    question10.onblur = function() {
        if ( question10.value == "" ) {
            alert("Please enter a value for question 10");
        } 
    }

    /**
     * TODO:
     * > Attach the onchange event to the question1 select box
     *      OPTIONS:
     *      a. You could use dot notation to attach the event
     *      Hint: question1.onchange = function() { ... }
     *      Reference: https://www.w3schools.com/jsref/event_onchange.asp
     * 
     *      b. You could use the addEventListener method to attach the event
     *      Hint: question1.addEventListener("change", function() { ... });
     *      Reference: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
     * 
     * > Clear the previous feedback
     *      Hint: Use the innerHTML property to set the value of the element to an empty string
     *      Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * 
     * > Create a new paragraph element to contain the feedback information
     *      Hint: use createElement("_tag_") method to create a new element
     *      Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Create an if statement to check if the question1.value is the first choice in the array of question1 choices
     *      Hint: use a comparison operator ( == ) to check if the question1.value is equal to the first choice in the array
     *      Reference: https://www.w3schools.com/js/js_comparisons.asp
     * 
     * > If the question1.value is the first choice in the array of question1 choices, then display the feedback information
     *      Hint: use the innerHTML property to set the value of the element to the feedback information
     *      Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * 
     * > Repeat the above steps for the rest of the questions ( question2 - question10 )
     */
    question1.onchange = function() {
        // Remove the previous feedback
        q1_feeback.innerHTML = "";
        
        const info = document.createElement("p");
        info.style.color = "red";

        // if the question1.value is the first choice
        if ( question1.value == q1_choices[0] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Condor Galaxy is the name of a galaxy in the constellation of Centaurus. It is a spiral galaxy with a diameter of 100,000 light-years. It is located at a distance of 30 million light-years from Earth. It is also known as NGC 884.";
        } 
        // else if the question1.value is the second choice
        else if ( question1.value == q1_choices[1] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Andromeda Galaxy is the name of a galaxy in the constellation of Andromeda. It is a spiral galaxy with a diameter of 100,000 light-years. It is located at a distance of 2.5 million light-years from Earth. It is also known as NGC 224.";
        } 
        // else if the question1.value is the third choice
        else if ( question1.value == q1_choices[2] ) {
            info.style.color = "green";
            info.innerHTML = "Correct!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Milky Way Galacy is the name of our galaxy in the constellation of Sagittarius. It is a spiral galaxy with a diameter of 100,000 light-years. It is located at a distance of 30,000 light-years from Earth.";
        } 
        // else if the question1.value is the fourth choice
        else if ( question1.value == q1_choices[3] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Whirlpool Galaxy is the name of a galaxy in the constellation of Canes Venatici. It is a spiral galaxy with a diameter of 100,000 light-years. It is located at a distance of 30 million light-years from Earth. It is also known as NGC 4565";
        } 
        // else if the question1.value is not in the list of choices
        // then display "Incorrect!"
        else if ( q1_choices.indexOf(question1.value) == -1 ) {
            info.innerHTML = "No such option has been provided please enter the full name of the options listed out for you below the question. Have another go!";
        }
        q1_feeback.appendChild(info);
    }

    /**
     * TODO:
     * > Attach the onchange event to the question2 select box
     * OPTIONS:
     * a. You could use dot notation to attach the event
     * Hint: question2.onchange = function() { ... }
     * Reference: https://www.w3schools.com/jsref/event_onchange.asp
     * 
     * b. You could use the addEventListener method to attach the event
     * Hint: question2.addEventListener("change", function() { ... });
     * Reference: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
     * 
     * > Clear the previous feedback
     * Hint: Use the innerHTML property to set the value of the element to an empty string
     * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * 
     * > Create a new paragraph element to contain the feedback information
     * Hint: use createElement("_tag_") method to create a new element
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Create an if statement to check if the question2.value is the first choice in the array of question2 choices
     * Hint: use a comparison operator ( == ) to check if the question2.value is equal to the first choice in the array
     * Reference: https://www.w3schools.com/js/js_comparisons.asp
     * 
     * > If the question2.value is the first choice in the array of question2 choices, then display the feedback information
     * Hint: use the innerHTML property to set the value of the element to the feedback information
     * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * 
     * > Repeat the above steps for the rest of the questions ( question3 - question10 )
     */
    question2.onchange = function() {
        // remove the previous feedback
        q2_feeback.innerHTML = "";

        const info = document.createElement("p");
        info.style.color = "red";

        // if the question2.value is the first choice
        if ( question2.value == q2_choices[0] ) {
            info.style.color = "green";
            info.innerHTML = "Correct!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Jupiter is the largest planet in the solar system. It is a gas giant with a mass of 1,898,130,00 kg. It is 11 times the mass of Earth and 2.5 times the mass of all the other planets in the solar system combined. Jupiter is 2.5 times more massive than the next largest planet, Saturn. Jupiter is a gas giant with a mass of 1,898,130,00 kg. It is 11 times the mass of Earth and 2.5 times the mass of all the other planets in the solar system combined. Jupiter is 2.5 times more massive than the next largest planet, Saturn.";
        } 
        // else if the question2.value is the second choice
        else if ( question2.value == q2_choices[1] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Saturn is the sixth planet from the Sun and the second largest planet in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It has only one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive. Saturn is named after the Roman god of agriculture; its astronomical symbol (♄) represents the god's sickle.";
        } 
        // else if the question2.value is the third choice
        else if ( question2.value == q2_choices[2] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 AU (4.5 billion km; 2.8 billion mi). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident.";
        } 
        // else if the question2.value is the fourth choice
        else if ( question2.value == q2_choices[3] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. It is named after the Greek god of the sky Uranus, the great-grandfather of Ares, grandfather of Zeus, and great-great-grandfather of Hercules. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more 'ices' such as water, ammonia, and methane, along with traces of other hydrocarbons. It has the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F). Uranus's interior is mainly composed of ices and rock. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn.";
        } 
        // else if the question2.value is not in the list of choices
        // then display "Incorrect!"
        else if ( q2_choices.indexOf(question2.value) == -1 ) {
            info.innerHTML = "No such option has been provided please enter the full name of the options listed out for you below the question. Have another go!";
        }
        q2_feeback.appendChild(info);
    }

    question3.onchange = function() {
        // remove the previous feedback
        q3_feeback.innerHTML = "";

        const info = document.createElement("p");
        info.style.color = "red";

        // if the question3.value is the first choice
        if ( question3.value == q3_choices[0] ) {
            info.style.color = "green";
            info.innerHTML = "Correct!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Ganymede is the largest moon of Jupiter and the sixth largest moon in the Solar System. It is the only moon known to have a subsurface ocean of liquid water.";
        } 
        // else if the question3.value is the second choice
        else if ( question3.value == q3_choices[1] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Titan is the largest moon of Saturn and the second largest moon in the Solar System. It is the only moon known to have a dense atmosphere.";
        } 
        // else if the question3.value is the third choice
        else if ( question3.value == q3_choices[2] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Callisto is the fourth largest moon of Jupiter and the seventh largest moon in the Solar System. It is the only moon known to have a subsurface ocean of liquid water";
        } 
        // else if the question3.value is the fourth choice
        else if ( question3.value == q3_choices[3] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Io is the third largest moon of Jupiter and the fifth largest moon in the Solar System. It is the only moon known to have a subsurface ocean of liquid water";
        } 
        // else if the question3.value is not in the list of choices
        // then display "Incorrect!"
        else if ( q3_choices.indexOf(question3.value) == -1 ) {
            info.innerHTML = "No such option has been provided please enter the full name of the options listed out for you below the question. Have another go!";
        }
        q3_feeback.appendChild(info);
    }

    question4.onchange = function() {
        // remove the previous feedback
        q4_feeback.innerHTML = "";

        const info = document.createElement("p");
        info.style.color = "red";

        // if the question4.value is the first choice
        if ( question4.value == q4_choices[0] ) {
            info.style.color = "green";
            info.innerHTML = "Correct!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> The Pacific Ocean covers approximately 30% of the Earth's surface and is the largest and deepest of the Earth's oceanic divisions. It extends from the Arctic Ocean in the north to the Southern Ocean (or, depending on definition, to Antarctica) in the south and is bounded by the continents of Asia and Australia in the west and the Americas in the east. The Pacific Ocean contains the deepest known point on the Earth, at the Challenger Deep in the Mariana Trench, which is 10,994 m (35,797 ft) deep. The Pacific Ocean occupies more than half of the Earth's surface area, and its deepest point is the Mariana Trench, which is 10,994 meters (36,070 ft) deep. The Pacific Ocean is the largest of the Earth's oceanic divisions. It covers about 30% of Earth's surface area and contains 46% of the Earth's water. The Pacific Ocean is bounded by the continents of Asia and Australia in the west and the Americas in the east. The Pacific Ocean is the largest and deepest of Earth's oceanic divisions, covering approximately 30% of the Earth's surface area and 46% of its water. It extends from the Arctic Ocean in the north to the Southern Ocean in the south and from the Pacific Ocean in the east to the Atlantic Ocean in the west. The Pacific Ocean contains the deepest known point on Earth, the Mariana Trench, which is 10,994 meters (35,797 ft) deep. The Pacific Ocean occupies more than half of the Earth's surface area, and its deepest point is the Mariana Trench, which is 10,994 meters (36,070 ft) deep. The Pacific Ocean is the largest of the Earth's oceanic divisions. It covers about 30% of Earth's surface area and contains 46% of the Earth's water. The Pacific Ocean is bounded by the continents of Asia and Australia in the west and the Americas in the east. The Pacific Ocean is the largest and deepest of Earth's oceanic divisions, covering approximately 30% of the Earth's surface area and 46% of its water. It extends from the Arctic Ocean in the north to the Southern Ocean in the south and from the Pacific Ocean in the east to the Atlantic Ocean in the west. The Pacific Ocean contains the deepest known point on Earth, the Mariana Trench, which is 10,994";
        } 
        // else if the question4.value is the second choice
        else if ( question4.value == q4_choices[1] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> The Atlantic Ocean covers approximately 20% of the Earth's surface and is the second largest of the Earth's oceanic divisions. It extends from the Arctic Ocean in the north to the Southern Ocean (or, depending on definition, to Antarctica) in the south and is bounded by the continents of Europe and Africa in the west and the Americas in the east. The Atlantic Ocean occupies more than a fifth of the Earth's surface area, and its deepest point is the Puerto Rico Trench, which is 8,201 m (26,837 ft) deep. The Atlantic Ocean is the second largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 29% of the Earth's water. The Atlantic Ocean is bounded by the continents of Europe and Africa in the west and the Americas in the east. The Atlantic Ocean is the second largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 29% of the Earth's water. The Atlantic Ocean is bounded by the continents of Europe and Africa in the west and the Americas in the east. The Atlantic Ocean is the second largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 29% of the Earth's water. The Atlantic Ocean is bounded by the continents of Europe and Africa in the west and the Americas in the east. The Atlantic Ocean is the second largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 29% of the Earth's water. The Atlantic Ocean is bounded by the continents of Europe and Africa in the west and the Americas in the east. The Atlantic Ocean is the second largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 29% of the Earth's water. The Atlantic Ocean is bounded by the continents of Europe and Africa in the west and the Americas in the east. The Atlantic Ocean is the second largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 29% of the Earth's water. The Atlantic Ocean is bounded by the continents of Europe and Africa in the west and the Americas in the east. The Atlantic Ocean is the second largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 29% of the Earth's water"
        } 
        // else if the question4.value is the third choice
        else if ( question4.value == q4_choices[2] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> The Indian Ocean covers approximately 20% of the Earth's surface and is the third largest of the Earth's oceanic divisions. It extends from the Arctic Ocean in the north to the Southern Ocean (or, depending on definition, to Antarctica) in the south and is bounded by the continents of Asia and Australia in the west and the Americas in the east. The Indian Ocean occupies more than a fifth of the Earth's surface area, and its deepest point is the Diamantina Trench, which is 8,047 m (26,369 ft) deep. The Indian Ocean is the third largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 21% of the Earth's water. The Indian Ocean is bounded by the continents of Asia and Australia in the west and the Americas in the east. The Indian Ocean is the third largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 21% of the Earth's water. The Indian Ocean is bounded by the continents of Asia and Australia in the west and the Americas in the east. The Indian Ocean is the third largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 21% of the Earth's water. The Indian Ocean is bounded by the continents of Asia and Australia in the west and the Americas in the east. The Indian Ocean is the third largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 21% of the Earth's water. The Indian Ocean is bounded by the continents of Asia and Australia in the west and the Americas in the east. The Indian Ocean is the third largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 21% of the Earth's water. The Indian Ocean is bounded by the continents of Asia and Australia in the west and the Americas in the east. The Indian Ocean is the third largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 21% of the Earth's water. The Indian Ocean is bounded by the continents of Asia and Australia in the west and the Americas in the east. The Indian Ocean is the third largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 21% of the";
        } 
        // else if the question4.value is the fourth choice
        else if ( question4.value == q4_choices[3] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> The Arctic Ocean covers approximately 20% of the Earth's surface and is the fourth largest of the Earth's oceanic divisions. It extends from the Arctic Ocean in the north to the Southern Ocean (or, depending on definition, to Antarctica) in the south and is bounded by the continents of Europe and Africa in the west and the Americas in the east. The Arctic Ocean occupies more than a fifth of the Earth's surface area, and its deepest point is the Puerto Rico Trench, which is 8,201 m (26,837 ft) deep. The Arctic Ocean is the fourth largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 29% of the Earth's water. The Arctic Ocean is bounded by the continents of Europe and Africa in the west and the Americas in the east. The Arctic Ocean is the fourth largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 29% of the Earth's water. The Arctic Ocean is bounded by the continents of Europe and Africa in the west and the Americas in the east. The Arctic Ocean is the fourth largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 29% of the Earth's water. The Arctic Ocean is bounded by the continents of Europe and Africa in the west and the Americas in the east. The Arctic Ocean is the fourth largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 29% of the Earth's water. The Arctic Ocean is bounded by the continents of Europe and Africa in the west and the Americas in the east. The Arctic Ocean is the fourth largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 29% of the Earth's water. The Arctic Ocean is bounded by the continents of Europe and Africa in the west and the Americas in the east. The Arctic Ocean is the fourth largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 29% of the Earth's water. The Arctic Ocean is bounded by the continents of Europe and Africa in the west and the Americas in the east. The Arctic Ocean is the fourth largest of the Earth's oceanic divisions. It covers about 20% of Earth's surface area and contains 29% of the Earth's water.";
        } 
        // else if the question4.value is not in the list of choices
        // then display "Incorrect!"
        else if ( q4_choices.indexOf(question4.value) == -1 ) {
            info.innerHTML = "No such option has been provided please enter the full name of the options listed out for you below the question. Have another go!";
        }
        q4_feeback.appendChild(info);
    }

    question5.onchange = function() {
        // remove the previous feedback
        q5_feeback.innerHTML = "";

        const info = document.createElement("p");
        info.style.color = "red";

        // if the question5.value is the first choice
        if ( question5.value == q5_choices[0] ) {
            info.style.color = "green";
            info.innerHTML = "Correct!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Russia is the largest country in the world by area, covering more than one-eighth of the Earth's inhabited land area, spanning Eastern Europe and Northern Asia. ";
        } 
        // else if the question5.value is the second choice
        else if ( question5.value == q5_choices[1] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Canada is the second largest country in the world by total area, spanning 9,984,670 km2 (3,855,100 sq mi) and 6.8% of the Earth's total surface area. ";
        } 
        // else if the question5.value is the third choice
        else if ( question5.value == q5_choices[2] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> China is the third largest country in the world by total area, spanning 9,596,961 km2 (3,705,407 sq mi) and 6.6% of the Earth's total surface area. ";
        } 
        // else if the question5.value is the fourth choice
        else if ( question5.value == q5_choices[3] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> United States is the fourth largest country in the world by total area, spanning 9,826,675 km2 (3,794,081 sq mi) and 6.7% of the Earth's total surface area.";
        } 
        // else if the question5.value is not in the list of choices
        // then display "Incorrect!"
        else if ( q5_choices.indexOf(question5.value) == -1 ) {
            info.innerHTML = "No such option has been provided please enter the full name of the options listed out for you below the question. Have another go!";
        }
        q5_feeback.appendChild(info);
    }

    question6.onchange = function() {
        // remove the previous feedback
        q6_feeback.innerHTML = "";

        const info = document.createElement("p");
        info.style.color = "red";

        // if the question6.value is the first choice
        if ( question6.value == q6_choices[0] ) {
            info.style.color = "green";
            info.innerHTML = "Correct!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Asia is the largest continent by area, covering 44,579,000 square kilometres (17,212,000 sq mi), 30% of Earth's total land area and 8.7% of the Earth's total surface area. Asia is also the largest of the seven continents in terms of population, with around 4.5 billion people, 60% of the world's population."
        } 
        // else if the question6.value is the second choice
        else if ( question6.value == q6_choices[1] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Africa is the second largest continent, with 30,221,532 square kilometres (11,668,541 sq mi) of land, 6% of the Earth's total surface area and 20.4% of the total land area. At about 1.1 billion people as of 2013, it accounts for about 15% of the world's human population.";
        } 
        // else if the question6.value is the third choice
        else if ( question6.value == q6_choices[2] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> North America is the third largest continent, with an area of about 24,709,000 square kilometres (9,540,000 sq mi). North America is also the fourth most populous continent, with an estimated 573 million people as of 2017. ";
        } 
        // else if the question6.value is the fourth choice
        else if ( question6.value == q6_choices[3] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> South America is the fourth largest continent, with an area of about 17,840,000 square kilometres (6,890,000 sq mi). South America is also the fifth most populous continent, with an estimated 422 million people as of 2017.";
        } 
        // else if the question6.value is not in the list of choices
        // then display "Incorrect!"
        else if ( q6_choices.indexOf(question6.value) == -1 ) {
            info.innerHTML = "No such option has been provided please enter the full name of the options listed out for you below the question. Have another go!";
        }
        q6_feeback.appendChild(info);
    }

    question7.onchange = function() {
        // remove the previous feedback
        q7_feeback.innerHTML = "";

        const info = document.createElement("p");
        info.style.color = "red";

        // if the question7.value is the first choice
        if ( question7.value == q7_choices[0] ) {
            info.style.color = "green";
            info.innerHTML = "Correct!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> The Amazon River is the largest river in the world by discharge and the second largest by volume. It is the largest tributary of the Atlantic Ocean. The Amazon River is the longest river in the world, with a length of 6,992 km (4,345 mi).";
        } 
        // else if the question7.value is the second choice
        else if ( question7.value == q7_choices[1] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> The Nile River is the longest river in the world, and the only one to flow northward into the Mediterranean Sea. The Nile is 6,853 km (4,258 mi) long, and the average discharge is 54,000 m3/s (1,900,000 cu ft/s).";
        } 
        // else if the question7.value is the third choice
        else if ( question7.value == q7_choices[2] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> The Yangtze River is the longest river in Asia and the third-longest in the world. The river is 6,380 km (3,980 mi) long, and the average discharge is 47,500 m3/s (1,680,000 cu ft/s).";
        } 
        // else if the question7.value is the fourth choice
        else if ( question7.value == q7_choices[3] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> The Mississippi River is the chief river of the largest drainage system on the North American continent. The river is 6,275 km (3,913 mi) long, and the average discharge is 58,000 m3/s (2,050,000 cu ft/s).";

        } 
        // else if the question7.value is not in the list of choices
        // then display "Incorrect!"
        else if ( q7_choices.indexOf(question7.value) == -1 ) {
            info.innerHTML = "No such option has been provided please enter the full name of the options listed out for you below the question. Have another go!";
        }
        q7_feeback.appendChild(info);
    }

    question8.onchange = function() {
        // remove the previous feedback
        q8_feeback.innerHTML = "";

        const info = document.createElement("p");
        info.style.color = "red";

        // if the question8.value is the first choice
        if ( question8.value == q8_choices[0] ) {
            info.style.color = "green";
            info.innerHTML = "Correct!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Mount Everest is the highest mountain in the world, with a peak elevation of 8,848 m (29,029 ft). It is located in the Mahalangur section of the Himalayas, on the border between Nepal and China.";
        } 
        // else if the question8.value is the second choice
        else if ( question8.value == q8_choices[1] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Mount Kilimanjaro is the highest mountain in Africa, with a peak elevation of 5,895 m (19,341 ft). It is located in Tanzania, near the Kenya border.";
        } 
        // else if the question8.value is the third choice
        else if ( question8.value == q8_choices[2] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Mount Elbrus is the highest mountain in Europe, with a peak elevation of 5,642 m (18,510 ft). It is located in the Caucasus Mountains, on the border between Russia and Georgia.";
        } 
        // else if the question8.value is the fourth choice
        else if ( question8.value == q8_choices[3] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Mount Aconcagua is the highest mountain outside Asia, with a peak elevation of 6,962 m (22,838 ft). It is located in the Andes Mountains, on the border between Argentina and Chile.";
        } 
        // else if the question8.value is not in the list of choices
        // then display "Incorrect!"
        else if ( q8_choices.indexOf(question8.value) == -1 ) {
            info.innerHTML = "No such option has been provided please enter the full name of the options listed out for you below the question. Have another go!";
        }
        q8_feeback.appendChild(info);
    }

    question9.onchange = function() {
        // remove the previous feedback
        q9_feeback.innerHTML = "";

        const info = document.createElement("p");
        info.style.color = "red";

        // if the question9.value is the first choice
        if ( question9.value == q9_choices[0] ) {
            info.style.color = "green";
            info.innerHTML = "Correct!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> The Sahara Desert is the largest desert in the world, with an area of 9,200,000 km2 (3,600,000 sq mi). It is located in North Africa, between the Atlantic Ocean and the Red Sea.";
        } 
        // else if the question9.value is the second choice
        else if ( question9.value == q9_choices[1] ) {
            info.innerHTML = "Incorrect!";
            info.innerHTML += "=> The Gobi Desert is the fifth-largest desert in the world, with an area of 1,500,000 km2 (580,000 sq mi). It is located in Asia, between the Altai Mountains and the Himalayas.";
        } 
        // else if the question9.value is the third choice
        else if ( question9.value == q9_choices[2] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "The Arabian Desert is the third-largest desert in the world, with an area of 2,330,000 km2 (900,000 sq mi). It is located in Asia, between the Red Sea and the Persian Gulf. ";

        } 
        // else if the question9.value is the fourth choice
        else if ( question9.value == q9_choices[3] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> The Atacama Desert is the driest desert in the world, with an average annual rainfall of 2 mm (0.08 in). It is located in South America, between the Andes Mountains and the Pacific Ocean.";
        } 
        // else if the question9.value is not in the list of choices
        // then display "Incorrect!"
        else if ( q9_choices.indexOf(question9.value) == -1 ) {
            info.innerHTML = "No such option has been provided please enter the full name of the options listed out for you below the question. Have another go!";
        }
        q9_feeback.appendChild(info);
    }

    question10.onchange = function() {
        // remove the previous feedback
        q10_feeback.innerHTML = "";

        const info = document.createElement("p");
        info.style.color = "red";

        // if the question10.value is the first choice
        if ( question10.value == q10_choices[0] ) {
            info.style.color = "green";
            info.innerHTML = "Correct!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Greenland is the largest island in the world, with an area of 2,166,086 km2 (836,330 sq mi). It is located in the North Atlantic Ocean, between the Arctic Ocean and the Atlantic Ocean.";
        } 
        // else if the question10.value is the second choice
        else if ( question10.value == q10_choices[1] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> New Guinea is the second-largest island in the world, with an area of 785,753 km2 (303,381 sq mi). It is located in the Pacific Ocean, to the east of Australia";
        } 
        // else if the question10.value is the third choice
        else if ( question10.value == q10_choices[2] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Borneo is the third-largest island in the world, with an area of 743,330 km2 (287,000 sq mi). It is located in the Pacific Ocean, to the east of Malaysia and Indonesia.";
        } 
        // else if the question10.value is the fourth choice
        else if ( question10.value == q10_choices[3] ) {
            info.innerHTML = "Incorrect!";
            /**
             * TODO:
             * > Add the feedback clarifying information to the paragraph element
             *      Hint: use the += operator to append the clarifying information to the innerHTML property
             *      Reference: https://www.w3schools.com/jsref/jsref_operators.asp
             */
            info.innerHTML += "=> Madagascar is the fourth-largest island in the world, with an area of 587,041 km2 (226,658 sq mi). It is located in the Indian Ocean, off the eastern coast of Africa.";
        } 
        // else if the question10.value is not in the list of choices
        // then display "Incorrect!"
        else if ( q10_choices.indexOf(question10.value) == -1 ) {
            info.innerHTML = "No such option has been provided please enter the full name of the options listed out for you below the question. Have another go!";
        }
        q10_feeback.appendChild(info);
    }

}