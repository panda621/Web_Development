window.onload = function() {
    /**
     * 
     * TODO:
     * 
     * > Use getElementById to get the email input element form the HTML Document and assign it to a variable called emailInput
     * > Use getElementById to get the error element form the HTML Document and assign it to a variable called email_error
     * > Set the color of the error element to red
     * > Create a checker variable to check if the email is valid   
     * > Use addEventListener to add an input event listener to the email input element
     * > Get the error element from the DOM
     * > Create a checker variable to check if the email is valid
     * > Add an event listener to the email input element
     * 
     * Reference (addEventListener): https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
     * Reference (getElementById): https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
     * Reference (style): https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
     * 
     * 
    */
    // YOUR CODE STARTS HERE
     'input', function() {
        /**
         * TODO:
         * 
         * > Check if the email field is left blank
         * > If the email field is left blank, use the style property to show the error element
         * > If the email field is left blank, set the innerHTML of the error element to 'Email is required'
         * 
         * Reference (style): https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
         * Reference (innerHTML): https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
         */
        if ( ) {
            
        }
        /**
         * TODO:
         * 
         * > Check if the email field does not contain an @ character
         * > If the email field does not contain an @ character, use the style property to show the error element
         * > If the email field does not contain an @ character, set the innerHTML of the error element to 'Email must contain an @ character'
         * 
         * Reference (style): https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
         * Reference (innerHTML): https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
         * Reference (indexOf): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
         */
        else if ( .indexOf('@') === -1) {
            
        }
        /**
         * TODO:
         * 
         * > Check if the email field does not contain a . character
         * > If the email field does not contain a . character, use the style property to show the error element
         * > If the email field does not contain a . character, set the innerHTML of the error element to 'Email must contain a . character'
         * 
         * Reference (style): https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
         * Reference (innerHTML): https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
         * Reference (indexOf): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
         */
        else if (  .indexOf('.') === -1) {
            
        }
        /**
         * TODO:
         * 
         * > Use else to assert the the email field is valid
         * > Now that we know the email field is valid, use the style property to hide the error element
         * > Now that we know the email field is valid, set the checker variable to true
         * 
         * Reference (style): https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
         * Reference (else): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
         */
        e {
            
        }
    });
    // YOUR CODE ENDS HERE

    /**
     * TODO:
     * 
     * > Use getElementById to get the password input element form the HTML Document and assign it to a variable called passwordInput
     * > Use getElementById to get the error element form the HTML Document and assign it to a variable called pass_error
     * > Set the color of the error element to red
     * > Create a checker variable to check if the password is valid
     * > Use addEventListener to add an input event listener to the password input element
     * 
     * Reference (addEventListener): https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
     * Reference (getElementById): https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
     * Reference (style): https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
     */
    // YOUR CODE STARTS HERE
    

    passwordInput.addEventListener('input', function() {
        /**
         * TODO:
         * 
         * > Check if the password field is left blank
         * > If the password field is left blank, use the style property to show the error element
         * > If the password field is left blank, set the innerHTML of the error element to 'Password is required'
         * 
         * Reference (style): https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
         * Reference (innerHTML): https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
         */
        if (

        }
        /**
         * TODO:
         * 
         * > Check if the password is less than 8 characters
         * > If the password is less than 8 characters, use the style property to show the error element
         * > If the password is less than 8 characters, set the innerHTML of the error element to 'Password must be at least 8 characters'
         * 
         * Reference (style): https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
         * Reference (innerHTML): https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
         * Reference (length): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
         */
        els 

        }
        /**
         * TODO:
         * 
         * > Check if the password lacks a number. use match() to check for numbers
         * > If the password lacks a number, use the style property to show the error element
         * > If the password lacks a number, set the innerHTML of the error element to 'Password must contain a number'
         * 
         * Reference (style): https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
         * Reference (innerHTML): https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
         * Reference (match): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
         */
        el  
        
        }
        /**
         * TODO:
         * 
         * > Check if the password lacks a capital letter. use match() to check for capital letters
         * > If the password lacks a capital letter, use the style property to show the error element
         * > If the password lacks a capital letter, set the innerHTML of the error element to 'Password must contain a capital letter'
         * 
         * Reference (style): https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
         * Reference (innerHTML): https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
         * Reference (match): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
         */
        else if (passwordInput.value.match(/[A-Z]/) === null) {
            
        }
        /**
         * TODO:
         * 
         * > Check if the password lacks a special character. use match() to check for special characters
         * > If the password lacks a special character, use the style property to show the error element
         * > If the password lacks a special character, set the innerHTML of the error element to 'Password must contain a special character'
         * 
         * Reference (style): https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
         * Reference (innerHTML): https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
         * Reference (match): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
         */
        else if (passwordInput.value.match(/[^a-zA-Z0-9]/) === null) {
           
        }
        /**
         * TODO:
         * 
         * > Use else to assert that the password is valid
         * > Now that we know the password is valid, we can set the checker variable to true
         * > Use the style property to hide the error element
         * 
         * Reference (style): https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
         */
        else {
        
        }
    });
    // YOUR CODE ENDS HERE

    /**
     * TODO:
     * 
     * > Use the getElementById method to get the form element and assign it to a variable called form
     * > Use the addEventListener method to listen for the submit event on the form element
     * > [Inside the addEventListener function] Use the preventDefault method to prevent the form from submitting
     * > [Inside the addEventListener function] Use an if statement to check if both checker variables are true
     * > [Inside the addEventListener function] If both checker variables are true, add the email and password to the local storage
     * > [Inside the addEventListener function] If both checker variables are true, redirect the user to the profile page
     * > [Inside the addEventListener function] Use an else statement to show an alert message if the form is not filled out correctly
     * 
     * Reference (getElementById): https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
     * Reference (addEventListener): https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
     * Reference (preventDefault): https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
     * Reference (setItem): https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
     * Reference (location): https://developer.mozilla.org/en-US/docs/Web/API/Window/location
     * Reference (href): https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/href
     * 
     * NOTE: You will need to use the window object to access the location property
     */
    // YOUR CODE STARTS HERE
    var form = .('form');
    form.addEventListener('submit', function(event) {
        // prevent the default behavior of the form

        // if both checker variables are true add the email and password to the local storage
        if (emailChecker && passChecker) {
            // add the email and password to the local storage

            // redirect the user to the profile page
            
        }
        // else prevent the form from submitting and show an alert message
        else {
            alert('Please fill out the form correctly');
        }

    });

    // YOUR CODE ENDS HERE
};