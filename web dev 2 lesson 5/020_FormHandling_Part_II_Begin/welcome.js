/**
 * EXAMPLE IMPLEMENTATION: 
 * 
 * > Create a dictionary of products with the fields: name, description, origin, price, and quantity
 * Referenced from: https://www.w3schools.com/js/js_objects.asp
 * 
 * > Create a function that takes a product name and returns the product object
 * Referenced from: https://www.w3schools.com/js/js_functions.asp
 *
 * > Create a function that takes a product name and returns the product price
 * Referenced from: https://www.w3schools.com/js/js_functions.asp
 * 
 * > Create a function that takes a product name and returns the product quantity
 * Referenced from: https://www.w3schools.com/js/js_functions.asp
 * 
 * > Create a function that takes a product name and returns the product origin
 * Referenced from: https://www.w3schools.com/js/js_functions.asp
 */

const products = [
    {id: 10001, name: "Apple", image: "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192__340.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo tellus. Integer vitae lectus lacus. Sed scelerisque est id lectus commodo commodo. Cras in quam et magna aliquam congue. Duis vitae justo id ante semper convallis sed at felis. Integer mauris arcu, varius nec consectetur non, faucibus sit amet odio. Donec maximus dui ac ligula dignissim, non dapibus ipsum suscipit.", origin: "China", price: 1.00, quantity: 10},
    {id: 10002, name: "Banana", image: "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192__340.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo tellus. Integer vitae lectus lacus. Sed scelerisque est id lectus commodo commodo. Cras in quam et magna aliquam congue. Duis vitae justo id ante semper convallis sed at felis. Integer mauris arcu, varius nec consectetur non, faucibus sit amet odio. Donec maximus dui ac ligula dignissim, non dapibus ipsum suscipit.", origin: "India", price: 2.00, quantity: 20},
    {id: 10003, name: "Orange", image: "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192__340.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo tellus. Integer vitae lectus lacus. Sed scelerisque est id lectus commodo commodo. Cras in quam et magna aliquam congue. Duis vitae justo id ante semper convallis sed at felis. Integer mauris arcu, varius nec consectetur non, faucibus sit amet odio. Donec maximus dui ac ligula dignissim, non dapibus ipsum suscipit.", origin: "USA", price: 3.00, quantity: 30},
    {id: 10004, name: "Grapes", image: "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192__340.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo tellus. Integer vitae lectus lacus. Sed scelerisque est id lectus commodo commodo. Cras in quam et magna aliquam congue. Duis vitae justo id ante semper convallis sed at felis. Integer mauris arcu, varius nec consectetur non, faucibus sit amet odio. Donec maximus dui ac ligula dignissim, non dapibus ipsum suscipit.", origin: "Italy", price: 4.00, quantity: 40},
    {id: 10005, name: "Pineapple", image: "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192__340.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo tellus. Integer vitae lectus lacus. Sed scelerisque est id lectus commodo commodo. Cras in quam et magna aliquam congue. Duis vitae justo id ante semper convallis sed at felis. Integer mauris arcu, varius nec consectetur non, faucibus sit amet odio. Donec maximus dui ac ligula dignissim, non dapibus ipsum suscipit.", origin: "Brazil", price: 5.00, quantity: 50},
    {id: 10006, name: "Watermelon", image: "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192__340.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo tellus. Integer vitae lectus lacus. Sed scelerisque est id lectus commodo commodo. Cras in quam et magna aliquam congue. Duis vitae justo id ante semper convallis sed at felis. Integer mauris arcu, varius nec consectetur non, faucibus sit amet odio. Donec maximus dui ac ligula dignissim, non dapibus ipsum suscipit.", origin: "Mexico", price: 6.00, quantity: 60},
    {id: 10007, name: "Mango", image: "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192__340.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo tellus. Integer vitae lectus lacus. Sed scelerisque est id lectus commodo commodo. Cras in quam et magna aliquam congue. Duis vitae justo id ante semper convallis sed at felis. Integer mauris arcu, varius nec consectetur non, faucibus sit amet odio. Donec maximus dui ac ligula dignissim, non dapibus ipsum suscipit.", origin: "Thailand", price: 7.00, quantity: 70},
    {id: 10008, name: "Peach", image: "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192__340.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo tellus. Integer vitae lectus lacus. Sed scelerisque est id lectus commodo commodo. Cras in quam et magna aliquam congue. Duis vitae justo id ante semper convallis sed at felis. Integer mauris arcu, varius nec consectetur non, faucibus sit amet odio. Donec maximus dui ac ligula dignissim, non dapibus ipsum suscipit.", origin: "Japan", price: 8.00, quantity: 80},
    {id: 10009, name: "Strawberry", image: "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192__340.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo tellus. Integer vitae lectus lacus. Sed scelerisque est id lectus commodo commodo. Cras in quam et magna aliquam congue. Duis vitae justo id ante semper convallis sed at felis. Integer mauris arcu, varius nec consectetur non, faucibus sit amet odio. Donec maximus dui ac ligula dignissim, non dapibus ipsum suscipit.", origin: "France", price: 9.00, quantity: 90},
    {id: 10010, name: "Blueberry", image: "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192__340.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo tellus. Integer vitae lectus lacus. Sed scelerisque est id lectus commodo commodo. Cras in quam et magna aliquam congue. Duis vitae justo id ante semper convallis sed at felis. Integer mauris arcu, varius nec consectetur non, faucibus sit amet odio. Donec maximus dui ac ligula dignissim, non dapibus ipsum suscipit.", origin: "Germany", price: 10.00, quantity: 100},
    {id: 10011, name: "Raspberry", image: "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192__340.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo tellus. Integer vitae lectus lacus. Sed scelerisque est id lectus commodo commodo. Cras in quam et magna aliquam congue. Duis vitae justo id ante semper convallis sed at felis. Integer mauris arcu, varius nec consectetur non, faucibus sit amet odio. Donec maximus dui ac ligula dignissim, non dapibus ipsum suscipit.", origin: "Spain", price: 11.00, quantity: 110},
    {id: 10012, name: "Kiwi", image: "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192__340.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo tellus. Integer vitae lectus lacus. Sed scelerisque est id lectus commodo commodo. Cras in quam et magna aliquam congue. Duis vitae justo id ante semper convallis sed at felis. Integer mauris arcu, varius nec consectetur non, faucibus sit amet odio. Donec maximus dui ac ligula dignissim, non dapibus ipsum suscipit.", origin: "Canada", price: 12.00, quantity: 120},
    {id: 10013, name: "Lemon", image: "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192__340.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo tellus. Integer vitae lectus lacus. Sed scelerisque est id lectus commodo commodo. Cras in quam et magna aliquam congue. Duis vitae justo id ante semper convallis sed at felis. Integer mauris arcu, varius nec consectetur non, faucibus sit amet odio. Donec maximus dui ac ligula dignissim, non dapibus ipsum suscipit.", origin: "Australia", price: 13.00, quantity: 130},
    {id: 10014, name: "Pomegranate", image: "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192__340.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo tellus. Integer vitae lectus lacus. Sed scelerisque est id lectus commodo commodo. Cras in quam et magna aliquam congue. Duis vitae justo id ante semper convallis sed at felis. Integer mauris arcu, varius nec consectetur non, faucibus sit amet odio. Donec maximus dui ac ligula dignissim, non dapibus ipsum suscipit.", origin: "Russia", price: 14.00, quantity: 140},
    {id: 10015, name: "Papaya", image: "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192__340.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo tellus. Integer vitae lectus lacus. Sed scelerisque est id lectus commodo commodo. Cras in quam et magna aliquam congue. Duis vitae justo id ante semper convallis sed at felis. Integer mauris arcu, varius nec consectetur non, faucibus sit amet odio. Donec maximus dui ac ligula dignissim, non dapibus ipsum suscipit.", origin: "South Africa", price: 15.00, quantity: 150},
    {id: 10016, name: "Pear", image: "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192__340.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo tellus. Integer vitae lectus lacus. Sed scelerisque est id lectus commodo commodo. Cras in quam et magna aliquam congue. Duis vitae justo id ante semper convallis sed at felis. Integer mauris arcu, varius nec consectetur non, faucibus sit amet odio. Donec maximus dui ac ligula dignissim, non dapibus ipsum suscipit.", origin: "Egypt", price: 16.00, quantity: 160},

];

// Create a function that takes a product name and returns the product object
function getProduct(name) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name == name) {
            return products[i];
        }
    }
}

// Create a function that takes a product name and returns the product price
function getProductPrice(name) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name == name) {
            return products[i].price;
        }
    }
}

// Create a function that takes a product name and returns the product quantity
function getProductQuantity(name) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name == name) {
            return products[i].quantity;
        }
    }
}

// Create a function that takes a product name and returns the product origin
function getProductOrigin(name) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name == name) {
            return products[i].origin;
        }
    }
}

/**
 * > Display the product name, description, origin, price, and quantity in the HTML after loading the page
 */
window.onload = function() {
    const shoppingSection = document.createElement("div");
    shoppingSection.setAttribute("id", "shoppingSection");
    document.body.appendChild(shoppingSection);

    const displayDiv = document.createElement("div");
    displayDiv.setAttribute("id", "displayDiv");
    shoppingSection.appendChild(displayDiv);

    const cartDisplayDiv = document.createElement("div");
    cartDisplayDiv.setAttribute("id", "cartDisplayDiv");
    const cartHeading = document.createElement("h2");
    const cartHeadingText = document.createTextNode("Items in Cart");
    cartHeading.appendChild(cartHeadingText);
    cartDisplayDiv.appendChild(cartHeading);
    shoppingSection.appendChild(cartDisplayDiv);
    /**
     * EXAMPLE IMPLEMENTATION: (This part has been completed for you)
     * 
     * > Use the createElement() method to create a new div and store it in a constant variable called productDiv
     * Referenced from: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use the createElement() method to create a new h2 and store it in a constant variable called productName
     * Referenced from: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use the createTextNode() method to create a new text node with the name of the product and store it in a constant variable called productNameText
     * Referenced from: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Use the appendChild() method to append the text node with the product name to the h2 element
     * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the createElement() method to create an image tag and store it in a constant variable called productImage
     * Referenced from: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use the setAttribute() method to set the src attribute of the image tag to the image of the product
     * > Use the setAttribute() method to set the alt attribute of the image tag to the name of the product
     * Referenced from: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use the createElement() method to create a new p and store it in a constant variable called productDesc
     * Referenced from: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use the createTextNode() method to create a new text node with the description of the product and store it in a constant variable called productDescText
     * Referenced from: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Use the appendChild() method to append the text node with the product description to the p element
     * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the createElement() method to create a new p and store it in a constant variable called productOrigin
     * Referenced from: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use the createTextNode() method to create a new text node with the origin of the product and store it in a constant variable called productOriginText
     * Referenced from: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Use the appendChild() method to append the text node with the product origin to the p element
     * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the createElement() method to create a new p and store it in a constant variable called productPrice
     * Referenced from: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use the createTextNode() method to create a new text node with the price of the product and store it in a constant variable called productPriceText
     * Referenced from: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Use the appendChild() method to append the text node with the product price to the p element
     * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the createElement() method to create a new p and store it in a constant variable called productQuantity
     * Referenced from: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use the createTextNode() method to create a new text node with the quantity of the product and store it in a constant variable called productQuantityText
     * Referenced from: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Use the appendChild() method to append the text node with the product quantity to the p element
     * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the createElement() method to create a new button and store it in a constant variable called productButton
     * Referenced from: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use the createTextNode() method to create a new text node with the text "Add to Cart" and store it in a constant variable called productButtonText
     * Referenced from: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Use the appendChild() method to append the product name h2 element to the productDiv element
     * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild() method to append the product description p element to the productDiv element
     *  Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild() method to append the product origin p element to the productDiv element
     * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild() method to append the product price p element to the productDiv element
     * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild() method to append the product quantity p element to the productDiv element
     * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild() method to append the productDiv element to the body element
     * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    // Create a for loop that iterates through the products array and performs the above steps for each product
    for (var i=0; i < products.length; i++)
    {
        const productDiv = document.createElement("div");
        productDiv.setAttribute("class", "product");

        const productName = document.createElement("h2");
        const productNameText = document.createTextNode(products[i].name);
        productName.appendChild(productNameText);

        const productImg = document.createElement("img");
        productImg.setAttribute("src", products[i].image);
        productImg.setAttribute("alt", products[i].name);

        const productDesc = document.createElement("p");
        const productDescText = document.createTextNode(products[i].description);
        productDesc.appendChild(productDescText);

        const productOrigin = document.createElement("p");
        productOrigin.innerHTML = `<strong>Origin: </strong>`;
        const productOriginText = document.createTextNode(`${products[i].origin}`);
        productOrigin.appendChild(productOriginText);
        
        const productPrice = document.createElement("p");
        productPrice.innerHTML = `<strong>Price: $</strong>`;
        const productPriceText = document.createTextNode(`${products[i].price}`);
        productPrice.appendChild(productPriceText);
        
        const productQuantity = document.createElement("p");
        productQuantity.innerHTML = `<strong>Quantity: </strong>`;
        const productQuantityText = document.createTextNode(`${products[i].quantity}`);
        productQuantity.appendChild(productQuantityText);

        const productButton = document.createElement("button");
        const productButtonText = document.createTextNode("Add to Cart");
        productButton.appendChild(productButtonText);

        /**
         * TODO:
         *  
         * > Use the addEventListener() method to add an event listener to the productButton element
         * Referenced from: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the preventDefault() method to prevent the default action of the event
         * Referenced from: https://www.w3schools.com/jsref/met_event_preventdefault.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the createElement() method to create a new div and store it in a constant variable called cartItem
         * Referenced from: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the classList property to add the cartItem div to the class "cart_item"
         * Referenced from: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the createElement() method to create a new div and store it in a constant variable called cartItemName
         * Referenced from: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the createTextNode() method to create a new text node with the name of the product and store it in a constant variable called cartItemName
         * Referenced from: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the classList property to add the cartItemName div to the class "cart_item_name"
         * Referenced from: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the appendChild() method to append the cartItemName div element to the cartItem div element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the appendChild() method to append the text node cartItemNameText with the product name to the cartItemName element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the createElement() method to create a new div and store it in a constant variable called cartItemPrice
         * Referenced from: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the createTextNode() method to create a new text node with the price of the product and store it in a constant variable called cartItemPriceText
         * Referenced from: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the classList property to add the cartItemPrice div to the class "cart_item_price"
         * Referenced from: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the appendChild() method to append the text node with the product price to the cartItemPrice div element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the createElement() method to create a new div and store it in a constant variable called cartItemQuantity
         * Referenced from: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the createTextNode() method to create a new text node with the quantity of the product and store it in a constant variable called cartItemQuantityText
         * Referenced from: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the appendChild() method to append the text node with the product quantity to the cartItemQuantity div element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the classList property to add the cartItemQuantity div to the class "cart_item_quantity"
         * Referenced from: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the appendChild() method to append the cartItemName div element to the cartItem div element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the appendChild() method to append the cartItemPrice div element to the cartItem div element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the appendChild() method to append the cartItemQuantity div element to the cartItem div element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the appendChild() method to append the cartItem div element to the cartDisplayDiv element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the createElement() method to create a new div and store it in a constant variable called cartTotal
         * Referenced from: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the createTextNode() method to create a new text node with the total price of the cart and store it in a constant variable called cartTotalText
         * Referenced from: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the classList property to add the cartTotal div to the class "cart_total"
         * Referenced from: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the appendChild() method to append the text node cartTotalText to the cartTotal div element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the appendChild() method to append the cartTotal div element to the cartItem div element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the createElement() method to create a new button and store it in a constant variable called cartButton
         * Referenced from: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the classList property to add the cartButton div to the class "cart_button"
         * Referenced from: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the createTextNode() method to create a new text node with the text "Checkout" and store it in a constant variable called cartButtonText
         * Referenced from: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the appendChild() method to append the text node with the text "Checkout" to the cartButton button element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the appendChild() method to append the cartButton element to the cartItem div element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the addEventListener() method to add an event listener to the cartButton div element
         * Referenced from: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the preventDefault() method to prevent the default action of the event
         * Referenced from: https://www.w3schools.com/jsref/met_event_preventdefault.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the createElement() method to create a new div and store it in a constant variable called checkout
         * Referenced from: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the classList property to add the checkout div to the class "checkout"
         * Referenced from: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the createTextNode() method to create a new text node with the text "Thank you for your purchase!" and store it in a constant variable called checkoutText
         * Referenced from: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * > [ Goes Inside the Event Listener Function ] Use the appendChild() method to append the text node with the text "Thank you for your purchase!" to the checkout div element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         */
        productButton.addEventListener("click", function(event) {
            // =========================== YOUR CODE BELOW THIS LINE =========================== //
            // Questions form line 220 to 307
            // Please ascertain to read the instructions carefully
            event.preventDefault();
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart_item");

            // Const => used in creating constant variables
            // Var => used in creating varying variables
            // keyword

            // Cart Item Name
            const cartItemName = document.createElement("h2"); // Element
            const cartItemNameText = document.createTextNode(productName.textContent); // text
            cartItemName.classList.add("cart_item_name"); // classname
            cartItemName.appendChild(cartItemNameText);

            // Cart Item Price
            const cartItemPrice = document.createElement("h2"); // Element
            const cartItemPriceText = document.createTextNode(productPrice.textContent); // text
            cartItemPrice.classList.add("cart_item_price"); // classname
            cartItemPrice.appendChild(cartItemPriceText);

            // Cart Item Quantity
            const cartItemQuantity = document.createElement("h2"); // Element
            const cartItemQuantityText = document.createTextNode(productQuantity.textContent); // text
            cartItemQuantity.classList.add("cart_item_price"); // classname
            cartItemQuantity.appendChild(cartItemQuantityText);

            cartItem.appendChild(cartItemName);
            cartItem.appendChild(cartItemPrice);
            cartItem.appendChild(cartItemQuantity);
            cartDisplayDiv.appendChild(cartItem);

                        /**
             * > Create the totals section price of the cart
             */
            const cartTotal = document.createElement("div");
            // const cartTotalText = document.createTextNode("Total: $" + (parseFloat(productPrice.textContent.substring(1)) * parseInt(productQuantity.textContent)).toFixed(2));
            const cartTotalText = document.createTextNode("Total: $" + (parseInt(productPrice.textContent.match(/(\d+)/)) * parseInt(productQuantity.textContent.match(/(\d+)/))).toFixed(2));
            cartTotal.classList.add("cart_total");
            cartTotal.appendChild(cartTotalText);
            cartItem.appendChild(cartTotal);
        
            const cartButton = document.createElement("button");
            cartButton.classList.add("cart_button");
            const cartButtonText = document.createTextNode("Checkout");
            cartButton.appendChild(cartButtonText);
            cartItem.appendChild(cartButton);

        
            // =========================== YOUR CODE ABOVE THIS LINE =========================== //
            
            cartButton.addEventListener("click", function(event) {
                event.preventDefault();
                const checkout = document.createElement("div");
                checkout.classList.add("checkout");
                alert("Thank you for your purchase!");

                /**
                 * > Use removeChild to remove the item that was clicked on from the cart
                 * Referenced from: https://www.w3schools.com/jsref/met_node_removechild.asp
                 * 
                 */
                cartDisplayDiv.removeChild(cartItem);

            });
            
        });

        /**
         * TODO:
         * > Use the appendChild() method to append the productImg div element to the productDiv element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > Use the appendChild() method to append the productName div element to the productDiv element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > Use the appendChild() method to append the productDesc div element to the productDiv element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > Use the appendChild() method to append the productOrigin div element to the productDiv element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > Use the appendChild() method to append the productPrice div element to the productDiv element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > Use the appendChild() method to append the productQuantity div element to the productDiv element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > Use the appendChild() method to append the productButton div element to the productDiv element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * > Use the appendChild() method to append the productDiv element to the displayDiv element
         * Referenced from: https://www.w3schools.com/jsref/met_node_appendchild.asp
         */
        productDiv.appendChild(productImg);
        productDiv.appendChild(productName);
        productDiv.appendChild(productDesc);
        productDiv.appendChild( document.createElement("hr") );
        productDiv.appendChild(productOrigin);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productQuantity);
        productDiv.appendChild( document.createElement("hr") );
        productDiv.appendChild(productButton);
        
        displayDiv.appendChild(productDiv);
        
    }
    
}
