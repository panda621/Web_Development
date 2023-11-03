window.onload = function() {
    /**
     * TODO:
     * Create an HTML element with the text "Hello DOM!" and append it to the
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     */
    const parent = ;

    /**
     * TODO:
     * Create a div element with the text "Hello DOM!"
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * Append the div element to the parent element
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const new1 =  ;
    new1.innerHTML =  ;
    parent. ;

    /**
     * TODO:
     * > Create a p element
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Set the innerHTML of the p element to be the following text below:
     * "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * 
     * > Append the p element to the parent element
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const para =  ;
    para. ;
    parent. ;

    para.id = 'texto';
    para.style.color = 'orange';
    const parent2 = document.getElementById('practice2');
    parent2.innerHTML = "<ul></ul>";
    const ul_parent2 = parent2.getElementsByTagName('ul')[0];

    for (var i = 0; i < 10; i++) {
        var child = document.createElement('li');
        child.innerHTML = "Element No." + (i+1); 
        ul_parent2.appendChild(child);
    }

    const li5 = ul_parent2.childNodes[4];
    li5.style.color = 'green';


    document.querySelector("ul").style.color = "green";
}