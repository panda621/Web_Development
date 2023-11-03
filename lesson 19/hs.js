// Use getElementById() to get the body element and store it in a constant variable called body.
// Use getElementById() to get the reshoot element and store it in a constant variable called reshoot.
// Use getElementById() to get the ball element and store it in a constant variable called ball.
// Use getElementById() to get the shooter element and store it in a constant variable called shooter.
const body = document.getElementById("body");
const reshoot = document.getElementById("reshoot");
const ball = document.getElementById("ball");
const shooter = document.getElementById("shooter");

// Create a variable called cupsOut and set it to an empty array.
var cupsOut = [];

// Use addEventListener() to add a click event listener to the reshoot element.
document.addEventListener("click", shootY);

// Create a function called shootY() that takes no parameters.
function shootY(){
    // Use removeEventListener() to remove the click event listener from the reshoot element.
    document.removeEventListener("click", shootY); 

    // Use getComputedStyle() to get the value of the top property of the ball element and store it in a variable called top.
    var top = window.getComputedStyle(ball).getPropertyValue("top");
    // use classList.add() to add the shootX class to the ball element.
    // use classList.remove() to remove the shootY class from the ball element.
    ball.classList.remove("shootY");
    ball.classList.add("shootX");
    ball.style.top = top;

    // use setAttribute() to set the onclick attribute of the html element to an empty string.
    document.getElementById("html").setAttribute("onclick","shootX('top')");
    // var shootYstr = "shootX('";
    // var shootYstr1 = top.toString();
    // var shootYstr2 = "')";
    // var onclick = shootYstr.concat(shootYstr1, shootYstr2);
    document.getElementById("html").setAttribute("onclick", `shootX('${top.toString()}')`);    
}

// Create a function called shootX() that takes one parameter called valueY.
function shootX(valueY){
    // use setAttribute() to set the onclick attribute of the html element to an empty string.
    document.getElementById("html").setAttribute("onclick","");
    var top = parseFloat(valueY);
    var topABS = Math.abs(parseFloat(valueY));
    // Use getComputedStyle() to get the value of the left property of the ball element and store it in a variable called left.
    var left = window.getComputedStyle(ball).getPropertyValue("left");
    leftABS = parseFloat(left);
    ball.classList.remove("shootX");
    var newtop = top-325;
    var newtopStr = newtop.toString();
    var px = "px";
    var final = newtopStr.concat(px);
    let root = document.documentElement;
    root.style.setProperty('--top', (top)+ "px");
    root.style.setProperty('--top325', (top-325)+ "px");
    ball.classList.add("marginTop");
    ball.style.top = final;
    ball.style.left = left;
    // configure the cup positions using if statements
    if(140 < topABS && topABS<175 && -125 < leftABS && leftABS<-60){
        removeCup("1");
    }
    if(140 < topABS && topABS<175 && -40 < leftABS && leftABS<40){
        removeCup("2");
    }
    if(140 < topABS && topABS < 175 && 60 < leftABS && leftABS<125){
        removeCup("3");
    }
    if(85 < topABS && topABS < 140 && -90 < leftABS && leftABS<-25){
        removeCup("4");
    }
    if(85 < topABS && topABS < 140 && 15 < leftABS && leftABS<80){
        removeCup("5");
    }
    if(25 < topABS && topABS < 80 && -45 < leftABS && leftABS<45){
        removeCup("6");
    }
    setTimeout(function(){
        if(cupsOut.length == 6){
            var time = timer();
            document.getElementById("time").innerHTML = time + " seconds";
            document.getElementById("time").style.display="block";
            document.getElementById("restart").style.display="block";
        }else{
            reshoot.style.display = "block";
        }
    }, 1500);
}

function removeCup(cup){
    var cupStr = "cup";
    var element = cupStr.concat(cup);
    let alreadyExists = cupsOut.includes(cup);
    if(alreadyExists == false){  
        cupsOut.push(cup);
    }
    setTimeout(function(){
        document.getElementById(element).classList.add("fadeAway");
    },1000);
}

function reshoot1(){
    reshoot.style.display = "none";
    ball.classList.add("shootY");
    ball.style.top = "0px";
    ball.style.left = "0px";
    ball.classList.remove("marginTop");
    setTimeout(function(){
        document.addEventListener("click", shootY); 
    },1000);
}
var startDate = new Date();
var startTime = startDate.getTime();
function timer(){
    var dateNow = new Date ();
    var timeNow = dateNow.getTime();
    var timeDiff = timeNow - startTime;
    var secondsElapsed = Math.floor(timeDiff/1000);
    return (secondsElapsed); 
}