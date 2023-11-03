window.onload = function(){
    // Setting up variables and DOM elements
    var cursorX;
    var cursorY;
    var width  = document.documentElement.clientWidth;
    // Calculate the positions of the eyes based off the page width
    var leftX = width/2 - 150;
    var rightX = width/2 +150;
    // Store the eye pupils as variables
    var leftEye = document.getElementsByClassName("left")[0];
    var rightEye = document.getElementsByClassName("right")[0];

    // Setting up numerical position of pupils
    // left eye:
    leftEye.style.left = "35px";
    leftEye.style.top = "35px";
    // Get the current left eye positions using DOM and parse int:
    leftEyeLNum = parseInt(leftEye.style.left);
    leftEyeTNum = parseInt(leftEye.style.top);
    // right eye: 
    rightEye.style.left = "35px";
    rightEye.style.top = "35px";
    rightEyeLNum = parseInt(rightEye.style.left);
    rightEyeTNum = parseInt(rightEye.style.top);

    // Tracking cursor X and Y by page X and Y
    document.onmousemove = function(e){
        cursorX = e.pageX;
        cursorY = e.pageY;
    }

    function moveEyes(){
        // left eye moving left and right
        if (cursorX < leftX && leftEyeLNum > 2)
        {
          leftEyeLNum -= 1;
          leftEye.style.left = leftEyeLNum + "px";
        } 
        else if (cursorX > leftX && leftEyeLNum < 68)
        {
          leftEyeLNum += 1;
          leftEye.style.left = leftEyeLNum + "px";
        }

        // left eye moving up and down
        if (cursorY < 160 && leftEyeTNum > 10){
            leftEyeTNum -= 1;
            leftEye.style.top = leftEyeTNum + "px";
        } else if (cursorY > 160 && leftEyeTNum < 60){
            leftEyeTNum += 1;
            leftEye.style.top = leftEyeTNum + "px";
        }

        // Right eye moving left right
        if (cursorX < rightX && rightEyeLNum > 2){
            rightEyeLNum -= 1;
            rightEye.style.left = rightEyeLNum + "px";
        } else if (cursorX > rightX && rightEyeLNum < 68){
            rightEyeLNum += 1;
            rightEye.style.left = rightEyeLNum + "px";
        }

        // Right eye moving up and down
        if(cursorY < 160 && rightEyeTNum> 10){
            rightEyeTNum -= 1;
            rightEye.style.top = rightEyeTNum + "px";
        } else if (cursorY > 160 && rightEyeTNum < 60){
            rightEyeTNum += 1;
            rightEye.style.top = rightEyeTNum + "px";
        }

        // Make the eyecolor random
        let colorList = ["blue", "pink", "red", "yellow", "green"];
        let num = Math.floor(Math.random() * 10);

        // Extension: if crossed-eyed, make eyes red
        if (leftEyeLNum >= 68 && rightEyeLNum <= 3){
            leftEye.style.backgroundColor = colorList[num];
            rightEye.style.backgroundColor = colorList[num];
        } else {
            leftEye.style.backgroundColor = "black";
            rightEye.style.backgroundColor = "black";
        }
    }

    // Every 10ms move the eyes slightly depending on cursor location
    setInterval (moveEyes, 10);

}