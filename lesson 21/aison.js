window.onload = function(){
    const values = [0,1,2,3,4,5,6, 7,8,9, 'a', 'b', 'c', 'd', 'e','f']
    const boxes = document.getElementsByClassName("square");
    console.log(typeof(boxes))
    console.log(boxes[0])
    // boxes[0].style.backgroundColor = `${colorValue.toString()}`;
    
    for (var i=0; i < boxes.length-1; i++){
        let colorValue = `
        #${values[Math.floor(Math.random()*values.length)]}${values[Math.floor(Math.random()*values.length)]}${values[Math.floor(Math.random()*values.length)]}${values[Math.floor(Math.random()*values.length)]}${values[Math.floor(Math.random()*values.length)]}${values[Math.floor(Math.random()*values.length)]}`;
        boxes[i].onmouseover = function(){
            console.log(colorValue);
            document.body.style.backgroundColor = `${colorValue.toString()}`;
            boxes[i].backgroundColor = `${colorValue}`;
        }

    }

}