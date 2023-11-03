window.onload = function() {
    // Create an array of products with a name and price
    const products = [
        { 
            name: 'Apple', price: 0.50
        },
        { 
            name: 'Orange', price: 0.75 
        },
        { 
            name: 'Banana', price: 1.00 
        },
        { 
            name: 'Pineapple', price: 2.00 
        },
        { 
            name: 'Mango', price: 2.50 
        },
        { 
            name: 'Papaya', price: 3.00 
        },
        { 
            name: 'Strawberry', price: 3.50 
        },
        { 
            name: 'Blueberry', price: 4.00 
        },
        { 
            name: 'Raspberry', price: 4.50 
        },
        { 
            name: 'Blackberry', price: 5.00 
        },
        { 
            name: 'Watermelon', price: 5.50 
        },
        { 
            name: 'Cantaloupe', price: 6.00 
        }
    ];

    var cart = [];

    // get the left and right divs    
    const left = document.getElementById('left');
    const right = document.getElementById('right');

    // display the products in the left div with a button to add to cart
    for (var i = 0; i < products.length; i++) {
        var p = products[i];
        // create a div for each product and style the div
        /**
         * TODO
         * 1. Create a div element and store it in a variable
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 2. Set the border, border-radius, margin, padding, and background-color of the div
         * Reference: https://www.w3schools.com/jsref/prop_style_border.asp
         * Reference: https://www.w3schools.com/jsref/prop_style_borderradius.asp
         * Reference: https://www.w3schools.com/jsref/prop_style_margin.asp
         * Reference: https://www.w3schools.com/jsref/prop_style_padding.asp
         * Reference: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
         */
        const div = document.createElement("div") ;
        // Set the border to '1px solid black'
        div.style.border="1px solid black";
        // Set the border radius tot8px
        div.style.borderRadius='8px';
        // Set the margin to 10pt
        div.style.margin="10px";
        // Set the padding to 10pt
        div.style.padding="10px";
        // Set the background colortto lightgray
        div.style.backgroundColor="lightgrey";

        // create a button to add the item to the cart and style the button
        /**
         * TODO
         * 
         * 1. Create a button element and store it in a variable called button
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 2. Set the margin, padding, background-color, and innerHTML of the button
         * Reference: https://www.w3schools.com/jsref/prop_style_margin.asp
         * Reference: https://www.w3schools.com/jsref/prop_style_padding.asp
         * Reference: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
         * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
         * 
         */
        const button = document.createElement("button");
        // Set the margin to 10px
        button.style.margin='10px';
        // Set the padding to 10px
        button.style.padding='10px';
        // Set the background color to lightblue
        button.style.backgroundColor='lightblue';
        // Set the innerHTML to 'Add to Cart'
        button.innerHTML="Add to Cart";

        /**
         * TODO:
         * 1. Create an onclick event for the button that calls the addToCart function
         * Reference: https://www.w3schools.com/jsref/event_onclick.asp
         * 
         * 2. Pass the product to the addToCart function
         * Reference: https://www.w3schools.com/js/js_function_parameters.asp
         * 
        */

        let index = i
        button.onclick=() => { addToCart(index); }   

        // create the h3 and paragraph elements and style them
        const h3 = document.createElement('h3');
        const paragraph = document.createElement('p');
        h3.innerHTML = p.name;
        paragraph.innerHTML = p.price;
        

        // Append the h3, paragraph, and button to the div
        div.appendChild(h3);
        div.appendChild(paragraph);
        div.appendChild(button);
        // Append the div to the left div
        left.appendChild(div);
    }

    // Create the function add to cart that adds the product to the cart array and displays the cart in the right div
    function addToCart(item) {
        cart.push(products[item]);
        displayCart();
    }

    // Create the function displayCart that displays the cart in the right div
    function displayCart() {
        right.innerHTML = '';
        for (var i = 0; i < cart.length; i++) {
            var p = cart[i];

            const div = document.createElement('div');
            const h3 = document.createElement('h3');
            const paragraph = document.createElement('p');
            // create a button to remove the item from the cart
            const button = document.createElement('button');
            button.innerHTML = 'Remove from Cart';

            // create an onclick event for the button that calls the removeFromCart function
            /**
             * TODO:
             * 1. Create an onclick event for the button that calls the removeFromCart function
             * Reference: https://www.w3schools.com/jsref/event_onclick.asp
             * 
             * 2. Pass the index of the product to the removeFromCart function
             * Reference: https://www.w3schools.com/js/js_function_parameters.asp
             */
            let index = i;
            button.onclick = function() {
                removeFromCart(index);
            }

            h3.innerHTML = p.name;
            paragraph.innerHTML = p.price;

            div.appendChild(h3);
            div.appendChild(paragraph);
            div.appendChild(button);
            
            right.appendChild(div);
        }
    }

    // Create the function removeFromCart that removes the product from the cart array and displays the cart in the right div
    function removeFromCart(item) {
        cart.splice(item, 1);
        displayCart();
    }

}