// Paths 
let images=Array(
    "static/StarWars.jpg",
    "static/EmpireStrikes.jpg",
    "static/ReturnOfJedi.jpg"
);

window.onload = function(){

    let text = document.getElementById("right");
    let picture = document.getElementById("pic");
    let current = document.getElementById("item0");
    let index = 0;

    // Activate the scroll functionality
    text.onscroll = function(){
        current.removeAttribute("class");
        if (text.scrollTop >= 0 && text.scrollTop < 300){
            index = 0;
        }
        if (text.scrollTop > 300 && text.scrollTop < 600){
            index = 1;
        }
        if(text.scrollTop > 600 && text.scrollTop < 900){
            index=2;
        }
        picture.setAttribute("src", images[index]);
        current = document.getElementById("item" + index);
        current.setAttribute("class", "active");
    }
}
// CLOSE here
