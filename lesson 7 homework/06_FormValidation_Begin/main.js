window.onload = function() {
    /* 
    TODO:
        > Select the name input field form the HTML document using the ID
        > Select the name error element from the HTML document using the ID
        > Select the location input field form the HTML document using the ID
        > Select the location error element from the HTML document using the ID
        > Select the profession input field form the HTML document using the ID
        > Select the profession error element from the HTML document using the ID
        > Select the email input field form the HTML document using the ID
        > Select the email error element from the HTML document using the ID
        > Select the phone input field form the HTML document using the ID
        > Select the phone error element from the HTML document using the ID
        > Select the password input field form the HTML document using the ID
        > Select the password error element from the HTML document using the ID
        > Select the confirm password input field form the HTML document using the ID
        > Select the confirm password error element from the HTML document using the ID
    */
    const nameInput=document.getElementById("name");
    const nameError=document.getElementById("name_error");
    const locationInput=document.getElementById("location");
    const locationError=document.getElementById("location_error");
    const professionInput=document.getElementById("profession");
    const professionError=document.getElementById("profession_error");
    const emailInput=document.getElementById("email");
    const emailError=document.getElementById("email_error");
    const phoneInput=document.getElementById("phone");
    const phoneError=document.getElementById("phone_error");
    const passwordInput=document.getElementById("password");
    const passwordError=document.getElementById("password_error");
    const confirmPasswordInput=document.getElementById("confirm-password");
    const confirmPasswordError=document.getElementById("confirm-password_error");
    
    /* 
    COMPLETED:
        > Add an event listener to the name input field
        > Add an event listener to the location input field
        > Add an event listener to the profession input field
        > Add an event listener to the email input field
        > Add an event listener to the phone input field
        > Add an event listener to the password input field
        > Add an event listener to the confirm password input field
    */
    nameInput.addEventListener('blur', validateName);
    locationInput.addEventListener('blur', validateLocation);
    professionInput.addEventListener('blur', validateProfession);
    emailInput.addEventListener('blur', validateEmail);
    phoneInput.addEventListener('blur', validatePhone);
    passwordInput.addEventListener('blur', validatePassword);
    confirmPasswordInput.addEventListener('blur', validateConfirmPassword);

    // Define the validateName function
    function validateName() {
        // Check if the name input field is empty
        if (nameInput.value === '') {
            /**
             * EXAMPLE IMPLEMENTATION: 
             * > use the display property to set the display to block
             * Reference: https://www.w3schools.com/jsref/prop_style_display.asp
             * 
             * > use the visibility property to set the visibility to visible
             * Reference: https://www.w3schools.com/jsref/prop_style_visibility.asp
             * 
             * > use the textContent property to set the textContent to 'Name is required'
             * Reference: https://www.w3schools.com/jsref/prop_node_textcontent.asp
             * 
             * > use the style property to set the color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_color.asp
             * 
             * > use the style property to set the border color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_bordercolor.asp
             */
            nameError.display = 'block';
            nameError.visibility = 'visible';
            nameError.textContent = 'Name is required';
            nameError.style.color = 'red';
            nameInput.style.borderColor = 'red';
        } 
        // Cheeck if name input contains a number
        else if (nameInput.value.match(/\d+/g)) {
            /**
             * TODO:
             * > use the display property to set the display to block
             * Reference: https://www.w3schools.com/jsref/prop_style_display.asp
             * 
             * > use the visibility property to set the visibility to visible
             * Reference: https://www.w3schools.com/jsref/prop_style_visibility.asp
             * 
             * > use the textContent property to set the textContent to 'Name cannot contain a number'
             * Reference: https://www.w3schools.com/jsref/prop_node_textcontent.asp
             * 
             * > use the style property to set the color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_color.asp
             * 
             * > use the style property to set the border color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_bordercolor.asp
             * I can't create names so I just name them as it says.
             */
            nameError.style.display="block";
            nameError.style.visibillity="visible";
            nameError.textContent='Name cannot contain a number';
            nameError.style.color="red";
            nameInput.style.borderColor="red";
        } 
        // Check if name input contains a special character
        else if (nameInput.value.match(/[^a-zA-Z ]/g)) {
            /**
             * TODO:
             * > use the display property to set the display to block
             * Reference: https://www.w3schools.com/jsref/prop_style_display.asp
             * 
             * > use the visibility property to set the visibility to visible
             * Reference: https://www.w3schools.com/jsref/prop_style_visibility.asp
             * 
             * > use the textContent property to set the textContent to 'Name cannot contain a special character'
             * Reference: https://www.w3schools.com/jsref/prop_node_textcontent.asp
             * 
             * > use the style property to set the color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_color.asp
             * 
             * > use the style property to set the border color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_bordercolor.asp
             * 
             */
            nameError.style.display="block";
            nameError.style.visibillity="visible";
            nameError.textContent='Name cannot contain a number';
            nameError.style.color="red";
            nameInput.style.borderColor="red";   
        }
        // Else, the name input is valid
        else {
            nameError.textContent = '';
            nameInput.style.borderColor = 'green';
        }
    }
    
    // Define the validateLocation function
    function validateLocation() {
        // Check if the location input field is empty
        if (locationInput.value === '') {
            /**
             * TODO:
             * > use the visibility property to set the visibility to visible
             * Reference: https://www.w3schools.com/jsref/prop_style_visibility.asp
             * 
             * > use the textContent property to set the textContent to 'Location is required'
             * Reference: https://www.w3schools.com/jsref/prop_node_textcontent.asp
             * 
             * > use the style property to set the color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_color.asp
             * 
             * > use the style property to set the border color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_bordercolor.asp
             */
            locationError.style.visibility="visible";
            locationError.textContent="Location is required";
            locationError.style.color="red";
            locationInput.style.borderColor="red";
        } 
        // Check if location input contains a number
        else if (locationInput.value.match(/\d+/g)) {
            /**
             * TODO:
             * > use the visibility property to set the visibility to visible
             * Reference: https://www.w3schools.com/jsref/prop_style_visibility.asp
             * 
             * > use the textContent property to set the textContent to 'Location cannot contain a number'
             * Reference: https://www.w3schools.com/jsref/prop_node_textcontent.asp
             * 
             * > use the style property to set the color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_color.asp
             * 
             * > use the style property to set the border color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_bordercolor.asp
             * 
             */
            locationError.style.visibillity="visible";
            locationError.style.textContent="Location cannot contain a number";
            locationError.style.color="red";
            locationInput.style.borderColor="red";
        }
        // Check if location input contains a special character
        else if (locationInput.value.match(/[^a-zA-Z ]/g)) {
            /**
             * TODO:
             * > use the visibility property to set the visibility to visible
             * Reference: https://www.w3schools.com/jsref/prop_style_visibility.asp
             * 
             * > use the textContent property to set the textContent to 'Location cannot contain a special character'
             * Reference: https://www.w3schools.com/jsref/prop_node_textcontent.asp
             * 
             * > use the style property to set the color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_color.asp
             * 
             * > use the style property to set the border color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_bordercolor.asp 
             */
            locationError.style.visibility="visible";
            locationError.style.textContent="Location cannot contain a special chatacter";
            locationError.style.color="red";
            locationInput.style.borderColor="red";
        }
        // Else, the location input is valid
        else {
            locationError.textContent = '';
            locationInput.style.borderColor = 'green';
        }
    }
    
    // Define the validateProfession function
    function validateProfession() {
        // Check if the profession input field is empty
        if (professionInput.value === '') {
            /**
             * TODO:
             * > use the visibility property to set the visibility to visible
             * Reference: https://www.w3schools.com/jsref/prop_style_visibility.asp
             * 
             * > use the textContent property to set the textContent to 'Profession is required'
             * Reference: https://www.w3schools.com/jsref/prop_node_textcontent.asp
             * 
             * > use the style property to set the color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_color.asp
             * 
             * > use the style property to set the border color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_bordercolor.asp
             */
            professionError.style.visibility="visible";
            professionError.style.textContent="Profession is required";
            professionError.color="red";
            professionInput.style.borderColor="red" ;
        } 
        // Check if profession input contains a number
        else if (professionInput.value.match(/\d+/g)) {
            /**
             * TODO:
             * > use the visibility property to set the visibility to visible
             * Reference: https://www.w3schools.com/jsref/prop_style_visibility.asp
             * 
             * > use the textContent property to set the textContent to 'Profession cannot contain a number'
             * Reference: https://www.w3schools.com/jsref/prop_node_textcontent.asp
             * 
             * > use the style property to set the color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_color.asp
             * 
             * > use the style property to set the border color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_bordercolor.asp
             */
            professionError.style.visibility="visible";
            professionError.style.textContent="Profession cannot contain a number";
            professionError.style.color="red";
            professionInput.style.borderColor="red";
        }
        // Check if profession input contains a special character
        else if (professionInput.value.match(/[^a-zA-Z ]/g)) {
            /**
             * TODO:
             * > use the visibility property to set the visibility to visible
             * Reference: https://www.w3schools.com/jsref/prop_style_visibility.asp
             * 
             * > use the textContent property to set the textContent to 'Profession cannot contain a special character'
             * Reference: https://www.w3schools.com/jsref/prop_node_textcontent.asp
             * 
             * > use the style property to set the color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_color.asp
             * 
             * > use the style property to set the border color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_bordercolor.asp
             */
            professionError.style.visibility="visible";
            professionError.style.textContent="Profession cannot contain a special character";
            professionError.style.color="red";
            professionInput.style.borderColor="red";
        }
        // Else, the profession input is valid
        else {
            professionError.textContent = '';
            professionInput.style.borderColor = 'green';
        }
    }

    // Define the validateEmail function
    function validateEmail() {
        // Check if the email input field is empty
        if (emailInput.value === '') {
            /**
             * TODO:
             * > use the visibility property to set the visibility to visible
             * Reference: https://www.w3schools.com/jsref/prop_style_visibility.asp
             * 
             * > use the textContent property to set the textContent to 'Email is required'
             * Reference: https://www.w3schools.com/jsref/prop_node_textcontent.asp
             * 
             * > use the style property to set the color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_color.asp
             * 
             * > use the style property to set the border color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_bordercolor.asp
             */
            emailError.style.visibility='visible';
            emailError.style.textContent='Email is required';
            emailError.style.color='red';
            emailInput.style.borderColor='red';
        } 
        // Else, accept any email as valid
        else {
            emailError.textContent = '';
            emailInput.style.borderColor = 'green';
        }
    }

    // Define the validatePhone function
    function validatePhone() {
        if (phoneInput.value === '') {
            /**
             * TODO:
             * > use the visibility property to set the visibility to visible
             * Reference: https://www.w3schools.com/jsref/prop_style_visibility.asp
             * 
             * > use the textContent property to set the textContent to 'Phone is required'
             * Reference: https://www.w3schools.com/jsref/prop_node_textcontent.asp
             * 
             * > use the style property to set the color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_color.asp
             * 
             * > use the style property to set the border color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_bordercolor.asp
             */
            phoneError.style.visibility="visible";
            phoneError.style.textContent="Phone is required";
            phoneError.style.color="red";
            phoneInput.style.borderColor="red";
        } else {
            phoneError.textContent = '';
            phoneInput.style.borderColor = 'green';
        }
    }

    // Define the validatePassword function
    function validatePassword() {
        if (passwordInput.value === '') {
            /**
             * TODO:
             * > use the visibility property to set the visibility to visible
             * Reference: https://www.w3schools.com/jsref/prop_style_visibility.asp
             * 
             * > use the textContent property to set the textContent to 'Password is required'
             * Reference: https://www.w3schools.com/jsref/prop_node_textcontent.asp
             * 
             * > use the style property to set the color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_color.asp
             * 
             * > use the style property to set the border color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_bordercolor.asp
             */
            passwordError.style.visibility="visible";
            passwordError.style.textContent="Password is required";
            passwordError.style.color="red";
            passwordInput.style.borderColor="red";
        } else {
            passwordError.textContent = '';
            passwordInput.style.borderColor = 'green';
        }
    }
    
    // Define the validateConfirmPassword function
    function validateConfirmPassword() {
        if (confirmPasswordInput.value === '') {
            /**
             * TODO:
             * > use the visibility property to set the visibility to visible
             * Reference: https://www.w3schools.com/jsref/prop_style_visibility.asp
             * 
             * > use the textContent property to set the textContent to 'Confirm password is required'
             * Reference: https://www.w3schools.com/jsref/prop_node_textcontent.asp
             * 
             * > use the style property to set the color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_color.asp
             * 
             * > use the style property to set the border color to red
             * Reference: https://www.w3schools.com/jsref/prop_style_bordercolor.asp
             */
            passwordError.style.visibility="visible";
            passwordError.style.textContent="Confirm password is required";
            passwordError.style.color="red";
            passwordInput.style.borderColor="red";
        } else {
            confirmPasswordError.textContent = '';
            confirmPasswordInput.style.borderColor = 'green';
        }
    }

    // Get the submit button from the DOM
    const submitButton = document.getElementById('submit');
    // Add an event listener to the submit button
    submitButton.onclick = function(event) {
        // Prevent the form from being submitted
        event.preventDefault();
        // Call the validateName function
        validateName();
        // Call the validateLocation function
        validateLocation();
        // Call the validateProfession function
        validateProfession();
        // Call the validateEmail function
        validateEmail();
        // Call the validatePhone function
        validatePhone();
        // Call the validatePassword function
        validatePassword();
        // Call the validateConfirmPassword function
        validateConfirmPassword();

        // Check confirm password input to be equal to password input
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.visibility = 'visible';
            confirmPasswordError.textContent = 'Passwords do not match';
            confirmPasswordError.style.color = 'red';
            confirmPasswordInput.style.borderColor = 'red';
        } else {
            confirmPasswordError.textContent = '';
            confirmPasswordInput.style.borderColor = 'green';
        }
        
    };


}