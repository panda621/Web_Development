window.onload = function () {

    // Use the document.getElementById() method to get the element with the id "profile_view"
    const right_container = document.getElementById("profile_view");
    
    // Use the style.visibility property to set the visibility of the element to "hidden"
    right_container.style.visibility = "hidden";

    // use the var keyword to declare the following variables
    // image_val, name_val, email_val, phone_val, location_val, about_val;
    var image_val, name_val, email_val, phone_val, location_val, about_val
    
    //get the user input values
    //Photo
    const image = document.getElementById("photo");
    image.addEventListener("change", function() {
        const reader = new FileReader();

        //Arrow Function () => {}
        //function() {...}
        // HTML => HyperText Markup Language
        // CSS => Cascaded Style Sheets
        reader.addEventListener("load", () => {
            
            // Name Output
            const uploaded_image = reader.result;
            localStorage.setItem("me", uploaded_image)
            document.querySelector("#me").src = localStorage.getItem("me");
        }); 
        reader.readAsDataURL(this.files[0]);
    });
    // Name
    const name = document.getElementById("name");
    name.onchange = function (e) {
        name_val = e.target.value;
    }
    // Email
    const email = document.getElementById("email");
    email.onchange = function (e) {
        email_val = e.target.value;
    }                                                
    // Phone Number
    const phone = document.getElementById("phone");
    phone.onchange = function (e) {
        phone_val = e.target.value;
    }
    // Location
    const location = document.getElementById("location");
    location.onchange = function (e) {
        location_val = e.target.value;
    }
    // About
    const about = document.getElementById("about");
    about.onchange = function (e) {
        about_val = e.target.value;    
    }

    // Get the output elements
    // Image output
    const image_out = document.getElementById("me");
    // Name Output
    const name_out = document.getElementById("name_out");
    // Email Output
    const email_out = document.getElementById("email_out");
    // Phone Output
    const phone_out = document.getElementById("phone_out");
    // Location Output
    const location_out = document.getElementById("location_out");
    // About Output
    const about_out = document.getElementById("about_out");

    //Submission button
    const view_prof = document.getElementById("view_btn");
    view_prof.onclick = function(){
        // Check if the fields are empty
        // Strict equality
        // 
        if (
            name_val === "" || name_val == " " ||
            email_val === "" || email_val == " " ||
            phone_val === "" || phone_val == " " ||
            location_val === "" || location_val == " " ||
            about_val === "" || about_val == " "
        )
        {
            alert("Please make sure the form is filled out correctly. Thanks")
        } else {
            name_out.innerHTML = name_val;
            email_out.innerHTML = email_val;
            phone_out.innerHTML = phone_val;
            location_out.innerHTML = location_val;
            about_out.innerHTML = about_val;
            right_container.style.visibility = "visible";
        }

    }
}