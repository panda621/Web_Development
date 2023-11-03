window.onload = function() {

    /**
     * > Create a div and store it in a constant variable called mainDiv
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setattribute to assign an id of "mainDiv" to the div you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use appendChild to append the div you created to the body
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     *  
     */
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "mainDiv");
    document.body.appendChild(mainDiv);

    /**
     * > Create a form and store it in a constant variable called regForm
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setattribute to assign an id of "regForm" to the form you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setattribute to assign a method of "post" to the form you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use appendChild to append the form you created to the div you created earlier called mainDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const regForm = document.createElement("form");
    regForm.setAttribute("id", "regForm");
    regForm.setAttribute("method", "post");
    mainDiv.appendChild(regForm);
    
    /**
     * > Create a div and store it in a constant variable called nameDiv
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setattribute to assign a class of "labelInputDiv" to the div you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use appendChild to append the div you created to the form you created earlier called regForm
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const nameDiv = document.createElement("div");
    nameDiv.setAttribute("class", "labelInputDiv");
    regForm.appendChild(nameDiv);


    /**
     * > Create a label and store it in a constant variable called nameLabel
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setattribute to assign a for of "name" to the label you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use innerHTML to set the label text to "Name: "
     * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * 
     * > Use appendChild to append the label you created to the div you created earlier called nameDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.innerHTML = "Name: ";
    nameDiv.appendChild(nameLabel);

    /**
     * > Create an input and store it in a constant variable called nameInput
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setattribute to assign a type of "text" to the input you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setattribute to assign an id of "name" to the input you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setattribute to assign a name of "name" to the input you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use appendChild to append the input you created to the div you created earlier called nameDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("name", "name");
    nameDiv.appendChild(nameInput);

    /**
     * > Create a div and store it in a constant variable called emailDiv
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setattribute to assign a class of "labelInputDiv" to the div you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use appendChild to append the div you created to the form you created earlier called regForm
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const emailDiv = document.createElement("div");
    emailDiv.setAttribute("class", "labelInputDiv");
    regForm.appendChild(emailDiv);

    /**
     * > Create a label and store it in a constant variable called emailLabel
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setattribute to assign a for of "email" to the label you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use innerHTML to set the label text to "Email: "
     * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * 
     * > Use appendChild to append the label you created to the div you created earlier called emailDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.innerHTML = "Email: ";
    emailDiv.appendChild(emailLabel);

    /**
     * > Create an input and store it in a constant variable called emailInput
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setattribute to assign a type of "email" to the input you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setattribute to assign an id of "email" to the input you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setattribute to assign a name of "email" to the input you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use appendChild to append the input you created to the div you created earlier called emailDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("name", "email");
    emailDiv.appendChild(emailInput);

    /**
     * > Create a div and store it in a constant variable called passwordDiv
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp    
     * 
     * > Use setattribute to assign a class of "labelInputDiv" to the div you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use appendChild to append the div you created to the form you created earlier called regForm
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const passwordDiv = document.createElement("div");
    passwordDiv.setAttribute("class", "labelInputDiv");
    regForm.appendChild(passwordDiv);


    /**
     * > Create a label and store it in a constant variable called passwordLabel
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setattribute to assign a for of "password" to the label you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use innerHTML to set the label text to "Password: "
     * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * 
     * > Use appendChild to append the label you created to the div you created earlier called passwordDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "password");
    passwordLabel.innerHTML = "Password: ";
    passwordDiv.appendChild(passwordLabel);
    
    /**
     * > Create an input and store it in a constant variable called passwordInput
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setattribute to assign a type of "password" to the input you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setattribute to assign an id of "password" to the input you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setattribute to assign a name of "password" to the input you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use appendChild to append the input you created to the div you created earlier called passwordDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("id", "password");
    passwordInput.setAttribute("name", "password");
    passwordDiv.appendChild(passwordInput);

    /**
     * > Create a div and store it in a constant variable called confirmPasswordDiv
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setattribute to assign a class of "labelInputDiv" to the div you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use appendChild to append the div you created to the form you created earlier called regForm
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const confirmPasswordDiv = document.createElement("div");
    confirmPasswordDiv.setAttribute("class", "labelInputDiv");
    regForm.appendChild(confirmPasswordDiv);
    
    /**
     * > Create a label and store it in a constant variable called confirmPasswordLabel
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setattribute to assign a for of "confirmPassword" to the label you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use innerHTML to set the label text to "Confirm Password: "
     * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * 
     * > Use appendChild to append the label you created to the div you created earlier called confirmPasswordDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const confirmPasswordLabel = document.createElement("label");
    confirmPasswordLabel.setAttribute("for", "confirmPassword");
    confirmPasswordLabel.innerHTML = "Confirm Password: ";
    confirmPasswordDiv.appendChild(confirmPasswordLabel);

    /**
     * > Create an input and store it in a constant variable called confirmPasswordInput
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setattribute to assign a type of "password" to the input you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setattribute to assign an id of "confirmPassword" to the input you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setattribute to assign a name of "confirmPassword" to the input you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use appendChild to append the input you created to the div you created earlier called confirmPasswordDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const confirmPasswordInput = document.createElement("input");
    confirmPasswordInput.setAttribute("type", "password");
    confirmPasswordInput.setAttribute("id", "confirmPassword");
    confirmPasswordInput.setAttribute("name", "confirmPassword");
    confirmPasswordDiv.appendChild(confirmPasswordInput);

    /**
     * > Create a button and store it in a constant variable called submitButton
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setattribute to assign a type of "submit" to the button you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setattribute to assign an id of "submitButton" to the button you created
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use innerHTML to set the button text to "Submit"
     * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * 
     * > Use appendChild to append the button you created to the form you created earlier called regForm
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "submitButton");
    submitButton.innerHTML = "Submit";
    regForm.appendChild(submitButton);


    // FORM VALIDATION
    /**
     * > Create a function to validate the form
     * 
     * @param {*} event The event object that is passed to the function when the form is 
     *                  submitted - this is used to prevent the form from submitting 
     *                  if it is invalid.
     * @returns Returns nothing. This function will validate the form and 
     *          display an error alert message if the form is invalid.
     */
    function validateForm(event) {
        // Prevent the form from submitting by default
        event.preventDefault();
        /**
         * > Use getElementById to get the name input element and create a constant variable called name to store it's value
         * Reference: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
         * 
         * > Use getElementById to get the email input element and create a constant variable called email to store it's value
         * Reference: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
         * 
         * > Use getElementById to get the password input element and create a constant variable called password to store it's value
         * Reference: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
         * 
         * > Use getElementById to get the confirm password input element and create a constant variable called confirmPassword to store it's value
         * Reference: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
         */
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        
        
        // Create a variable to store the error message
        var errorMessage = "";

        // The name input should not be empty, should be at least 3 characters long and should not contain numbers
        /**
         * TODO:
         * > Use an if statement to check if the name input is empty
         * > If the name input is empty, add the following error message to the errorMessage variable: "Name is required. "
         * Reference: https://www.w3schools.com/jsref/jsref_if.asp
         * 
         * > Use an else if statement to check if the name input is less than 3 characters long
         * > If the name input is less than 3 characters long, add the following error message to the errorMessage variable: "Name must be at least 3 characters long. "
         * Reference: https://www.w3schools.com/jsref/jsref_if.asp
         * 
         * > Use an else if statement to check if the name input contains numbers (hint: use the match method)
         * > If the name input contains numbers, add the following error message to the errorMessage variable: "Name cannot contain numbers. "
         */
        if (name == "") {
            errorMessage += "Name is required. ";
        } 
        else if (name.length < 3) {
            errorMessage += "Name must be at least 3 characters long. ";
        } 
        else if (name.match(/\d+/g)) {
            errorMessage += "Name cannot contain numbers. ";
        }

        /**
         * TODO:
         * > Use an if statement to check if the email input is empty
         * > If the email input is empty, add the following error message to the errorMessage variable: "Email is required. "
         * Reference: https://www.w3schools.com/jsref/jsref_if.asp
         * 
         * > Use an else if statement to check if the email input is valid (hint: use the match method)
         * > If the email input is not valid, add the following error message to the errorMessage variable: "Email is not valid. "
         * Reference: https://www.w3schools.com/jsref/jsref_if.asp
         * 
         */
        if (email == "") {
            errorMessage += "Email is required. ";
        } 
        else if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            errorMessage += "Email is not valid. ";
        }

        // The password input should not be empty, should be at least 8 characters long and should contain at least one number
        /**
         * TODO:
         * > Use an if statement to check if the password input is empty
         * > If the password input is empty, add the following error message to the errorMessage variable: "Password is required. "
         * Reference: https://www.w3schools.com/jsref/jsref_if.asp
         * 
         * > Use an else if statement to check if the password input is less than 8 characters long
         * > If the password input is less than 8 characters long, add the following error message to the errorMessage variable: "Password must be at least 8 characters long. "
         * Reference: https://www.w3schools.com/jsref/jsref_if.asp
         * 
         * > Use an else if statement to check if the password input contains numbers (hint: use the match method)
         * > If the password input does not contain numbers, add the following error message to the errorMessage variable: "Password must contain at least one number. "
         * Reference: https://www.w3schools.com/jsref/jsref_if.asp
         * Reference: https://www.w3schools.com/jsref/jsref_match.asp
         * Reference: https://www.w3schools.com/jsref/jsref_regexp_digit.asp
         */
        if (password == "") {
            errorMessage += "Password is required. ";
        } 
        else if (password.length < 8) {
            errorMessage += "Password must be at least 8 characters long. ";
        } 
        else if (!password.match(/\d+/g)) {
            errorMessage += "Password must contain at least one number. ";
        }

        /**
         * TODO:
         * > Use an if statement to check if the confirm password input is empty
         * > If the confirm password input is empty, add the following error message to the errorMessage variable: "Confirm password is required. "
         * Reference: https://www.w3schools.com/jsref/jsref_if.asp
         * 
         * > Use an else if statement to check if the confirm password input does not match the password input
         * > If the confirm password input does not match the password input, add the following error message to the errorMessage variable: "Passwords do not match. "
         * Reference: https://www.w3schools.com/jsref/jsref_if.asp
         */
        if (confirmPassword == "") {
            errorMessage += "Confirm password is required. ";
        } 
        else if (confirmPassword != password) {
            errorMessage += "Passwords do not match. ";
        }

        /**
         * TODO:
         * > Use an if statement to check if the errorMessage variable is not empty
         * > If the errorMessage variable is not empty, use the alert function to display the error message
         * Reference: https://www.w3schools.com/jsref/met_win_alert.asp
         * 
         * > Use an else statement to check if the errorMessage variable is empty
         * > If the errorMessage variable is empty, redirect the user to the welcome.html page
         * 
         * REDIRECTING OPTIONS: 
         * > You can use the window.location.href property to redirect the user to the welcome.html page
         * Reference: https://www.w3schools.com/jsref/prop_loc_href.asp
         * 
         * > You can also use the window.open function to open the welcome.html page in a new tab
         * Reference: https://www.w3schools.com/jsref/met_win_open.asp
         * 
         * > You can also use window.assign to redirect the user to the welcome.html page
         * Reference: https://www.w3schools.com/jsref/met_loc_assign.asp
         * 
         */
        if (errorMessage != "") {
            alert(errorMessage);
            return false;
        } 
        else {
            window.location.href = "welcome.html";
        }

    }

    // Add an event listener to the submit button to call the validateForm function when the button is clicked
    submitButton.addEventListener("click", validateForm);

}