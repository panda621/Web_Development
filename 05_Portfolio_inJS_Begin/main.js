window.onload = function() {
    /**
     * EXAMPLE IMPLEMENTATION (Use this as a reference for the rest of the TODO tasks)):
     * 
     * > Use createElement to create a div and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use the style property to set the width to '100%'
     * Reference: https://www.w3schools.com/jsref/prop_style_width.asp
     * 
     * > Use the style property to set the height to '100%'
     * Reference: https://www.w3schools.com/jsref/prop_style_height.asp
     * 
     * > Use the style property to set the display to 'flex'
     * Reference: https://www.w3schools.com/jsref/prop_style_display.asp
     * 
     * > Use the style property to set the flexDirection to 'row'
     * Reference: https://www.w3schools.com/jsref/prop_style_flexdirection.asp
     * 
     * > Use the style property to set the justifyContent to 'space-between'
     * Reference: https://www.w3schools.com/jsref/prop_style_justifycontent.asp
     * 
     * > Use the style property to set the alignItems to 'center'
     * Reference: https://www.w3schools.com/jsref/prop_style_alignitems.asp
     * 
     * > Use the appendChild method to append the div to the body
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     */  
    const div = document.createElement('div');
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.display = 'flex';
    div.style.flexDirection = 'row';
    div.style.justifyContent = 'space-between';
    div.style.alignItems = 'center';
    document.body.appendChild(div);

    /**
     * TODO:
     * 
     * > Use createElement to create a div and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use the style property to set the width to '50%'
     * Reference: https://www.w3schools.com/jsref/prop_style_width.asp
     * 
     * > Use the style property to set the height to '100%'
     * Reference: https://www.w3schools.com/jsref/prop_style_height.asp
     * 
     * > Use the style property to set the display to 'flex'
     * Reference: https://www.w3schools.com/jsref/prop_style_display.asp
     * 
     * > Use the style property to set the flexDirection to 'column'
     * Reference: https://www.w3schools.com/jsref/prop_style_flexdirection.asp
     * 
     * > Use the style property to set the backgroundColor to 'gray'
     * Reference: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
     * 
     * > Use the style property to set the justifyContent to 'center'
     * Reference: https://www.w3schools.com/jsref/prop_style_justifycontent.asp
     * 
     * > Use the appendChild method to append the leftDiv to the main div
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     */
    const leftDiv=document.createElement("div");
    leftDiv.style.width="50%" 
    leftDiv.style.height="100%"  
    leftDiv.style.display='flex';
    leftDiv.style.flexDirection="column" 
    leftDiv.style.backgroundColor="grey"; 
    leftDiv.style.justifyContent='center';
    div.appendChild(leftDiv);

    /**
     * TODO:
     * 
     * > Use createElement to create a div and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use the style property to set the width to '50%'
     * Reference: https://www.w3schools.com/jsref/prop_style_width.asp
     * 
     * > Use the style property to set the height to '100%'
     * Reference: https://www.w3schools.com/jsref/prop_style_height.asp
     * 
     * > Use the style property to set the display to 'flex'
     * Reference: https://www.w3schools.com/jsref/prop_style_display.asp
     * 
     * > Use the style property to set the flexDirection to 'column'
     * Reference: https://www.w3schools.com/jsref/prop_style_flexdirection.asp
     * 
     * > Use the style property to set the backgroundColor to 'lightgray'
     * Reference: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
     * 
     * > Use the style property to set the justifyContent to 'center'
     * Reference: https://www.w3schools.com/jsref/prop_style_justifycontent.asp
     * 
     * > Use the appendChild method to append the rightDiv to the main div
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     *
     */
    const  rightDiv = document.createElement("div");
    rightDiv.style.width="50%"
    rightDiv.style.height="100%"  
    rightDiv.style.display='flex';
    rightDiv.style.flexDirection="column" 
    rightDiv.style.backgroundColor="lightgrey"; 
    rightDiv.style.justifyConetent='center';
    div.appendChild(rightDiv);

    /**
     * TODO:
     * 
     * > Use createElement to create a div and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use the style property to set the width to '100%'
     * Reference: https://www.w3schools.com/jsref/prop_style_width.asp
     * 
     * > Use the style property to set the height to '50%'
     * Reference: https://www.w3schools.com/jsref/prop_style_height.asp
     * 
     */
    const portfolioDiv=document.createElement('div');
    portfolioDiv.style.width='100%';
    portfolioDiv.style.height='50%';

    /**
     * TODO:
     * 
     * > Use createElement to create an img and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use the src property to set the src to 'https://cdn.pixabay.com/photo/2014/12/22/10/04/lions-577104__340.jpg'
     * Reference: https://www.w3schools.com/jsref/prop_img_src.asp
     * 
     * > Use the style property to set the width to '100%'
     * Reference: https://www.w3schools.com/jsref/prop_style_width.asp
     * 
     * > Use the style property to set the height to '100%'
     * Reference: https://www.w3schools.com/jsref/prop_style_height.asp
     * 
     * > Use the style property to set the objectFit to 'cover'
     * Reference: https://www.w3schools.com/jsref/prop_style_objectfit.asp
     * 
     * > Use the style property to set the alignItems to 'center'
     * Reference: https://www.w3schools.com/jsref/prop_style_alignitems.asp
     * 
     * > Use the style property to set the textAlign to 'center'
     * Reference: https://www.w3schools.com/jsref/prop_style_textalign.asp
     * 
     * > Use the appendChild method to append the portfolioImg to the portfolioDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the portfolioDiv to the leftDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const portfolioImg=document.createElement('img');
    portfolioImg.src='https://cdn.pixabay.com/photo/2014/12/22/10/04/lions-577104__340.jpg';
    portfolioImg.style.width='100%';
    portfolioImg.style.height='100%';
    portfolioImg.style.objectFit='cover';
    portfolioImg.style.alginItems='center';
    portfolioImg.textAlign='center';
    portfolioDiv.appendChild(portfolioImg);
    leftDiv.appendChild(portfolioDiv);

    /**
     * EXAMPLE IMPLEMENTATION: 
     * 
     * > Use createElement to create a div and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use the style property to set the width to '100%'
     * Reference: https://www.w3schools.com/jsref/prop_style_width.asp
     * 
     * > Use the style property to set the height to '50%'
     * Reference: https://www.w3schools.com/jsref/prop_style_height.asp
     */
    const contactDiv = document.createElement('div');
    contactDiv.style.width = '100%';
    contactDiv.style.height = '50%';

    /**
     * EXAMPLE IMPLEMENTATION (Use the same pattern for the rest of the elements that follow):
     * 
     * > Use createElement to create a div and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use createElement to create an h4 and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use createElement to create a p and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use createTextNode to create a text node with the text 'Name: ' and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Use createTextNode to create a text node with the text 'Aison' and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Use the setAttribute method to set the 'class' attribute to 'details' on the nameDiv
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use the appendChild method to append the nameValText to the nameVal
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the nameText to the nameH4
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the nameH4 to the nameDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the nameVal to the nameDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the nameDiv to the contactDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the contactDiv to the leftDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const nameDiv = document.createElement('div');
    const nameH4 = document.createElement('h4');
    const nameVal = document.createElement('p');
    const nameText = document.createTextNode('Name: ');
    const nameValText = document.createTextNode('Aison');
    nameDiv.setAttribute('class', 'details');
    nameVal.appendChild(nameValText);
    nameH4.appendChild(nameText);
    nameDiv.appendChild(nameH4);
    nameDiv.appendChild(nameVal);
    contactDiv.appendChild(nameDiv);
    leftDiv.appendChild(contactDiv);
    
    /**
     * TODO:
     * 
     * > Use createElement to create a div and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use createElement to create an h4 and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use createElement to create a p and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use createTextNode to create a text node with the text 'Email: ' and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Use createTextNode to create a text node with the text 'example@mail.com'
     * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Use the setAttribute method to set the 'class' attribute to 'details' on the emailDiv
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use the appendChild method to append the emailValText to the emailVal
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the emailText to the emailH4
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the emailH4 to the emailDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the emailVal to the emailDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the emailDiv to the contactDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the contactDiv to the leftDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const emailDiv=document.createElement('div');
    const emailH4=document.createElement('h4');
    const emailVal=document.createElement('p');
    const emailText=document.createTextNode('Email: ');
    const emailValText=document.createTextNode('example@email.com');
    emailDiv.setAttribute("class","details");
    emailVal.appendChild(emailValText);
    emailH4.appendChild(emailText);
    emailDiv.appendChild(emailH4);
    emailDiv.appendChild(emailVal);
    contactDiv.appendChild(emailDiv);
    leftDiv.appendChild(contactDiv);
    
    /**
     * TODO:
     * 
     * > Use createElement to create a div and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use createElement to create an h4 and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use createElement to create a p and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use createTextNode to create a text node with the text 'Phone: ' and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Use createTextNode to create a text node with the text '1234567890'
     * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Use the setAttribute method to set the 'class' attribute to 'details' on the phoneDiv
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use the appendChild method to append the phoneValText to the phoneVal
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the phoneText to the phoneH4
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the phoneH4 to the phoneDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the phoneVal to the phoneDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the phoneDiv to the contactDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the contactDiv to the leftDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const phoneDiv = document.createElement('div');
    const phoneH4 = document.createElement('h4');
    const phoneVal = document.createElement('p');
    const phoneText = document.createTextNode('Phone: ');
    const phoneValText = document.createTextNode('1234567890');
    phoneDiv.setAttribute("class","details") ;
    phoneVal.appendChild(phoneValText) ;
    phoneH4.appendChild(phoneText) ;
    phoneDiv.appendChild(phoneH4);
    phoneDiv.appendChild(phoneVal);
    contactDiv.appendChild(phoneDiv) ;
    leftDiv.appendChild(contactDiv);
    
    /**
     * TODO:
     * 
     * > Use createElement to create a div and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use createElement to create an h4 and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use createElement to create a p and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use createTextNode to create a text node with the text 'Location: ' and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Use createTextNode to create a text node with the text 'Hong Kong'
     * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Use the setAttribute method to set the 'class' attribute to 'details' on the locationDiv
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use the appendChild method to append the locationValText to the locationVal
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the locationText to the locationH4
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the locationH4 to the locationDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the locationVal to the locationDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the locationDiv to the contactDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the contactDiv to the leftDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */

    const locationDiv = document.createElement('div');
    const locationH4 = document.createElement('h4')
    const locationVal = document.createElement('p');
    const locationText = document.createTextNode('Location: ');
    const locationValText = document.createTextNode('Hong Kong');
    locationDiv.setAttribute('class', 'details');
    locationVal.appendChild(locationValText);
    locationH4.appendChild(locationText);
    locationDiv.appendChild(locationH4);
    locationDiv.appendChild(locationVal);
    contactDiv.appendChild(locationDiv);
    leftDiv.appendChild(contactDiv);
    
    /**
     * TODO:
     * 
     * > Use createElement to create a div and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use createElement to create an h4 and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use createElement to create a p and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use createTextNode to create a text node with the text 'Profession: ' and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Use createTextNode to create a text node with the text 'Web Developer'
     * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Use the setAttribute method to set the 'class' attribute to 'details' on the professionDiv
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use the appendChild method to append the professionValText to the professionVal
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the professionText to the professionH4
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the professionH4 to the professionDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the professionVal to the professionDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the professionDiv to the contactDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the contactDiv to the leftDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const professionDiv=document.createElement('div');
    const professionH4=document.createElement('h4');
    const professionVal=document.createElement('p');
    const professionText=document.createTextNode('Profession: ');
    const professionValText=document.createTextNode('Web Developer');
    professionDiv.setAttribute("class","details")  ;
    professionVal.appendChild(professionValText) ;
    professionH4.appendChild(professionText) ;
    professionDiv.appendChild(professionH4) ;
    professionDiv.appendChild(professionVal) ;
    contactDiv.appendChild(professionDiv) ;
    leftDiv.appendChild(contactDiv) ;

    /**
     * TODO:
     * 
     * > Use createElement to create a div and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use createElement to create an h4 and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use createElement to create a p and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use createTextNode to create a text node with the text 'About: ' and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Use createTextNode to create a text node with the text 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus interdum tortor sit amet commodo. Vestibulum vulputate porta pharetra. Nunc dictum scelerisque eros vitae ullamcorper. Nam convallis orci diam, id suscipit ligula sollicitudin pellentesque. Quisque pulvinar ex sed felis egestas, eget pulvinar risus tempus. Suspendisse ullamcorper mauris leo, vitae porttitor urna blandit sit amet. Mauris dui est, vulputate in'
     * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Use the setAttribute method to set the 'class' attribute to 'details' on the aboutDiv
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use the appendChild method to append the aboutValText to the aboutVal
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the aboutText to the aboutH4
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the aboutH4 to the aboutDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the aboutVal to the aboutDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * > Use the appendChild method to append the aboutDiv to the leftDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const aboutDiv=document.createElement('div');
    const aboutH4=document.createElement('h4');
    const aboutVal=document.createElement('p');
    const aboutText=document.createTextNode('About: ');
    const aboutValText=document.createTextNode(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus interdum tortor sit amet commodo. Vestibulum vulputate porta pharetra. Nunc dictum scelerisque eros vitae ullamcorper. Nam convallis orci diam, id suscipit ligula sollicitudin pellentesque. Quisque pulvinar ex sed felis egestas, eget pulvinar risus tempus. Suspendisse ullamcorper mauris leo, vitae porttitor urna blandit sit amet. Mauris dui est, vulputate in tortor sed, varius fermentum eros. Proin a elit vestibulum, vehicula tortor et, lacinia metus. Pellentesque interdum dapibus efficitur. Maecenas sit amet massa at nunc commodo sollicitudin. Vivamus a consectetur mauris. Nunc molestie, ex quis blandit mollis, sem quam pretium est, in elementum lorem lectus ut lectus. Aenean dignissim, libero sit amet imperdiet tincidunt, tellus ipsum vestibulum diam, eget lacinia tellus sapien vel metus. Nullam erat sem, ultricies porttitor laoreet a, tincidunt quis tellus. Curabitur vitae justo velit. Proin nunc velit, tincidunt vitae dui vitae, feugiat ornare enim. In sapien tortor, sodales vel elit eu, faucibus molestie nisi. Donec ut justo tempor, cursus quam non, rutrum turpis. Vestibulum ac aliquam nunc, in commodo tortor. Sed ut nisi vel lorem bibendum mollis quis ac velit. In convallis condimentum justo. Nulla a tincidunt magna. Donec vulputate leo sem, non fringilla risus interdum at."
    );
    aboutDiv.setAttribute.padding = '10px';
    aboutVal.appendChild(aboutValText);
    aboutH4.appendChild(aboutText);
    aboutDiv.appendChild(aboutH4);
    aboutDiv.appendChild(aboutVal);
    rightDiv.appendChild(aboutDiv);


    /**
     * CONGRATULATIONS YOU'VE COMPLETED THE TASK.
     */
}