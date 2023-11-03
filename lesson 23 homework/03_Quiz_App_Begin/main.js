window.onload = function() {
    const questions = [
        {
            question: 'What does DOM stand for?',
            options: [
                'Document Object Model', 
                'Display Object Management', 
                'Digital Ordinate Model', 
                'Direct Object Manipulator'
            ],
            correctIndex: 0,
            explanation: 'DOM stands for Document Object Model.'
        },
        {
            question: 'Which method can be used to select an element by its ID?',
            options: [
                'getElementById()', 
                'querySelector()', 
                'getElementsByName()', 
                'getElementsByClass()'
            ],
            correctIndex: 0,
            explanation: 'The method getElementById() is used to select an element by its ID.'
        },
        {
            question: 'Which method can be used to select elements by their class name?',
            options: [
                'getElementById()', 
                'querySelector()', 
                'getElementsByName()', 
                'getElementsByClassName()'
            ],
            correctIndex: 3,
            explanation: 'The method getElementsByClassName() is used to select elements by their class name.'
        },
        {
            question: 'What does the innerHTML property do?',
            options: [
                'Changes the HTML content of an element', 
                'Changes the CSS of an element', 
                'Changes the parent element', 
                'None of the above'
            ],
            correctIndex: 0,
            explanation: 'The innerHTML property changes the HTML content of an element.'
        },
        {
            question: 'What does the method querySelector() do?',
            options: [
                'Selects the first element that matches a specified CSS selector(s) in the document',
                'Selects all elements that match a specified CSS selector(s) in the document',
                'Selects the last element that matches a specified CSS selector(s) in the document',
                'None of the above'
            ],
            correctIndex: 0,
            explanation: 'The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.'
        },
        {
            question: 'Which of the following methods can be used to create a new element?',
            options: [
                'newElement()', 
                'createNewElement()', 
                'makeElement()', 
                'createElement()'
            ],
            correctIndex: 3,
            explanation: 'The createElement() method is used to create a new element.'
        },
        {
            question: 'How can you add a class to an element?',
            options: [
                'element.addClass(className)', 
                'element.classes.add(className)', 
                'element.classlist.add(className)', 
                'element.classList.add(className)'
            ],
            correctIndex: 3,
            explanation: 'The method element.classList.add(className) is used to add a class to an element.'
        },
        {
            question: 'What does the appendChild() method do?',
            options: [
                'Removes a child element',
                'Replaces a child element',
                'Adds a new child element at the end of a list',
                'None of the above'
            ],
            correctIndex: 2,
            explanation: 'The appendChild() method adds a new child element at the end of a list.'
        },
        {
            question: 'What method can be used to get or set attribute values?',
            options: [
                'attr()', 
                'attribute()', 
                'getSetAttribute()', 
                'getAttribute() and setAttribute()'
            ],
            correctIndex: 3,
            explanation: 'The methods getAttribute() and setAttribute() are used to get or set attribute values.'
        },
        {
            question: 'What does the method removeChild() do?',
            options: [
                'Removes a child element',
                'Replaces a child element',
                'Adds a new child element at the end of a list',
                'None of the above'
            ],
            correctIndex: 0,
            explanation: 'The removeChild() method removes a child element.'
        }
    ];

    /**
     * TODO:
     * 
     * > Use getElementById() to get the quiz container element with the ID 'quiz-container'
     * 
     */

    var quizContainer = document.getElementById("quiz-container");

    /**
     * TODO:
     * 
     * > Use the forEach() method to iterate through each question in the questions array
     * > For each question:
     *      > Create a new div element called questionDiv
     *      > Create a new p element called questionText
     *      > Add the question p tag to the class 'question'
     *      > set the text content of the question p tag to `${questionNumber + 1}. ${currentQuestion.question}`
     *      > Add the question text to the p element
     * 
     * > Use another foreach loop to list out the options for each question
     * > For each option:
     *      > Create a new label element called optionLabel
     *      > Add the option label to the class 'option'
     *      > Create a new div element called optionSpan
     *      > Create a new input element called optionInput
     *      > Set the type of the input element to 'radio'
     *      > Set the name of the input element to `question${questionNumber}`
     *      > Set the value of the input element to the index of the option
     *      > Create a new text node called optionDescription with the option text as the value
     *      > Append the input element to the option span
     *      > Append the option description to the option label
     *      > Append the option label to the option span
     *      > Append the option span to the question div
     * 
     * Reference (foreach): https://w3schools.com/jsref/jsref_foreach.asp
     * Reference (createElement): https://w3schools.com/jsref/met_document_createelement.asp
     * Reference (appendChild): https://w3schools.com/jsref/met_node_appendchild.asp
     */
    questions.forEach(function(currentQuestion, questionNumber){
        const questionDiv = document.createElement("div");
        const questionText = document.createElement("p");
        questionText.classList.add("question");
        questionText.textContent = `${questionNumber + 1}. ${currentQuestion.question}`;
        questionDiv.appendChild(questionText);
        // Implementation for the options foreach loop
        currentQuestion.options.forEach(function(option, index){
            const optionLabel = document.createElement("label");
            optionLabel.classList.add("option");
            const optionSpan = document.createElement("div");
            const optionInput = document.createElement("input");
            optionInput.type = "radio";
            optionInput.name = `question${questionNumber}`;
            optionInput.value = index;
            const optionDescription = document.createTextNode(option);
            optionSpan.appendChild(optionInput);
            optionLabel.appendChild(optionDescription);
            optionSpan.appendChild(optionLabel);
            questionDiv.appendChild(optionSpan);
        });
        // Added After the user submits the answers. This provides clasification for the answers
        const explanationParagraph = document.createElement('p');
        explanationParagraph.classList.add('explanation');
        explanationParagraph.textContent = currentQuestion.explanation;

        questionDiv.appendChild(explanationParagraph);

        quizContainer.appendChild(questionDiv);
    });
    
    document.getElementById('submit').addEventListener('click', () => {
        let score = 0;

        questions.forEach((currentQuestion, questionNumber) => {
            const questionDiv = quizContainer.children[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (questionDiv.querySelector(selector) || {}).value;

            const explanations = Array.from(questionDiv.getElementsByClassName('explanation'));
            explanations.forEach(explanation => explanation.classList.remove('active'));

            if (userAnswer === undefined) {
                return;
            } else if (userAnswer == currentQuestion.correctIndex) {
                score++;
                explanations[0].classList.add('correct', 'active');
            } else {
                explanations[0].classList.add('active');
            }
        });

        alert(`Score: ${score}/${questions.length}`);
    });

}