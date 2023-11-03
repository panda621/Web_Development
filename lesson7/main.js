window.onload=function(){
    // These comments will be stored below the monkey video
    monkeyComments = [];
    // These comments will be stored below the robin video
    robinComments = [];
    // These comments will be stored below the dinosaur video
    dinosaurComments = [];
    // These comments will be stored below the cat's video
    kittyComments=[];
    // These comments will be store below the ppuppy video
    pupComments=[];    

    // Creating variables for the monkey post section
    
    const commentor_one= document.getElementById("commentor_one_name");
    const monkeyCommentSection=document.getElementById("monkey_comments");
    const monkeySubmit=document.getElementById("monkey_submit");
    const monkeyInput=document.getElementById("monkey_input");
    monkeyInput.setAttribute("placeholder", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
    
    const commentor_two= document.getElementById("commentor_two_name");
    const robinCommentSection=document.getElementById("robin_comments");
    const robinSubmit=document.getElementById("robin_submit");
    const robinInput=document.getElementById("robin_input");
    robinInput.setAttribute("placeholder", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
    
    const commentor_three= document.getElementById("commentor_three_name");
    const dinosaurCommentSection=document.getElementById("dinosaur_comments");
    const dinosaurSubmit=document.getElementById("dinosaur_submit");
    const dinosaurInput=document.getElementById("dinosaur_input");
    dinosaurInput.setAttribute("placeholder", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
    
    const commentor_four= document.getElementById("commentor_four_name");
    const kittyCommentSection=document.getElementById("kitty_comments");
    const kittySubmit=document.getElementById("kitty_submit");
    const kittyInput=document.getElementById("kitty_input");
    kittyInput.setAttribute("placeholder", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
    
    const commentor_five= document.getElementById("commentor_five_name");
    const puppyCommentSection=document.getElementById("puppy_comments");
    const puppySubmit=document.getElementById("puppy_submit");
    const puppyInput=document.getElementById("puppy_input");
    puppyInput.setAttribute("placeholder", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
    
    // Creating variables for the monkey post section

    monkeyInput.onchange=function(){
        let sentence=document.createElement("p");
        sentence.innerText=monkeyInput.value;

        monkeyCommentSection.appendChild(sentence);
        monkeyInput.value="";
    }
    // Capture the input from the robin post section
    robinInput.onchange=function(){
        // 
        let sentence=document.createElement("p");
        sentence.innerText=robinInput.value;

        robinCommentSection.appendChild(sentence);
        robinInput.value="";
    }
    // Capture the input from the dinosaur post section
    dinosaurInput.onchange=function(){
        // 
        let sentence=document.createElement("p");
        sentence.innerText=dinosaurInput.value;
        dinosaurCommentSection.appendChild(sentence);
        dinosaurInput.value="";
    }
    // Capture the input from the kitty post section
    kittyInput.onchange=function(){
        // 
        let sentence=document.createElement("p");
        sentence.innerText=kittyInput.value;

        kittyCommentSection.appendChild(sentence);
        kittyInput.value="";
    }
    // Capture the input from the robin post section
    puppyInput.onchange=function(){
        // 
        let sentence=document.createElement("p");
        sentence.innerText=puppyInput.value;
        puppyCommentSection.appendChild(sentence);
        puppyInput.value="";
    }
}