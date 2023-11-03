window.onload = function() {
    /**
     * TODO:
     * 
     * > Get the first name value from the local storage
     * > Get the last name value from the local storage
     * > Get the phone number value from the local storage
     * > Get the address value from the local storage
     * > Get the city value from the local storage
     * > Get the state value from the local storage
     * > Get the zip code value from the local storage
     * > Get the country value from the local storage
     * > Get the email value from the local storage
     * > Get the password value from the local storage
     * 
     * Reference (localStorage): https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
     * Hint: Use the getItem method
     * 
     */
    // YOUR CODE STARTS HERE (Feel free to add more lines below this line)

    // YOUR CODE ENDS HERE

    /**
     * 
     * TODO:
     * 
     * > Get the first name input element from the DOM
     * > Check if the first name value from the local storage is not null
     * > Set the first name input value to the first name value from the local storage
     * 
     * > Get the last name input element from the DOM
     * > Check if the last name value from the local storage is not null
     * > Set the last name input value to the last name value from the local storage
     * 
     * > Get the phone number input element from the DOM
     * > Check if the phone number value from the local storage is not null
     * > Set the phone number input value to the phone number value from the local storage
     * 
     * > Get the address input element from the DOM
     * > Check if the address value from the local storage is not null
     * > Set the address input value to the address value from the local storage
     * 
     * > Get the city input element from the DOM
     * > Check if the city value from the local storage is not null
     * > Set the city input value to the city value from the local storage
     * 
     * > Get the state input element from the DOM
     * > Check if the state value from the local storage is not null
     * > Set the state input value to the state value from the local storage
     * 
     * > Get the zip code input element from the DOM
     * > Check if the zip code value from the local storage is not null
     * > Set the zip code input value to the zip code value from the local storage
     * 
     * > Get the country input element from the DOM
     * > Check if the country value from the local storage is not null
     * > Set the country input value to the country value from the local storage
     * 
     * > Get the email input element from the DOM
     * > Check if the email value from the local storage is not null
     * > Set the email input value to the email value from the local storage
     * 
     * > Get the password input element from the DOM
     * > Check if the password value from the local storage is not null
     * > Set the password input value to the password value from the local storage
     * 
     * Reference (getElementById): https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
     * Reference (input.value): https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/value
     * Hint: Use the value property of the input element to update the value to the value from the local storage
     */
    // YOUR CODE STARTS HERE (Feel free to add more lines below this line)

    // YOUR CODE ENDS HERE


    /**
     * 
     * TODO:
     * 
     * > Get the form element from the DOM
     * > Add a submit event listener to the form
     * > [inside the addEventListener function] Prevent the default behavior of the form
     * > [inside the addEventListener function] Check if any of the values are different from what is in the local storage
     * > [inside the addEventListener function] If any are different, set the values in the local storage to the new values
     * > [inside the addEventListener function] Display a message to the user
     * 
     * Reference (addEventListener): https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
     * Reference (preventDefault): https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
     * Reference (alert): https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
     * Hint: Use the setItem method to set the values in the local storage
     * Hint: Use the value property of the input element to get the value from the input element
     * Hint: Use the getItem method to get the value from the local storage
     * Hint: Use the alert method to display a message to the user
     * Hint: Use the === operator to check if the values are the same
     * Hint: Use the !== operator to check if the values are different
     *  
     */
    // Get the form element from the DOM
    var form = document.getElementById('profileForm');
    // Add a submit event listener to the form
    form.addEventListener('submit', function(event) {
        // use event.preventDefault() to prevent the default behavior of the form
        event.preventDefault();
        // check if any of the values are different from what is in the local storage. use trim() to remove whitespace
        if (
            // ====================================== YOUR CODE STARTS HERE (Feel free to add more lines below this line) ======================================
        )
        {
            // If any are different, set the values in the local storage to the new values
                

                
            //====================================== YOUR CODE ENDS HERE ======================================
            // Display a message to the user
            alert('Profile updated successfully!');
        }
        else {
            alert('No changes were made to the profile.');
        }

    });


}