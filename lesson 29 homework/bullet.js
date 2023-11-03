class Bullet{
    constructor(imageURL, xPos, yPos, speed, damage){
        this.imageURL = imageURL;
        this.xPos = xPos;
        this.yPos = yPos;
        this.speed = speed;
        this.damage = damage;
    }
    followMouse(event){
        document.getElementById("bullet").addEventListener("mousemove", function(event){this.xPos = event.clientX;this.yPos = event.clientY});
    }   
    hideOnTargetHit(){
        Bullet.style.display = "none";
    }
    clone(){
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
    changeImageSprite(){

    }
}