window.onload = function(){
    class Spaceship{
    /**
     * Required classes
     * @param {string} name
     * @param {number} health
     * @param {number} maxHealth
     * @param {number} shield
     * @param {array} weapons
     */
    constructor(name, health, maxHealth, shield, weapons){
        this.name = name;
        this.health = health;
        this.maxHealth = maxHealth;
        this.shield = shield;
        this.weapons = weapons
    }
    takeDamage(damage){
        // Reduces the spaceship's health by the specified amount of damage, considering the shield strength.
        if ((this.health - damage) < 0){
            console.log("Game Over");
            this.health = 0;
        }
        else{
            console.log(`You lost "${damage}" health.`);
        }
    }
    heal(amount){
        // Increases the spaceship's health by the specified amount but not exceeding `maxHealth`.
        // If you didn't take any damage in the last 10 seconds, 
        this.health += amount;
    }
    addWeapon(weapon){
        // Adds a weapon to the spaceship's 'weapons' array.
        this.weapons.push(weapon);
    }
    fireWeapon(target){
        // Simulate firing a weapon at the target. You can choose the specifics of how this works.
        // If weapon hits the opponent's spaceship, 
        target.takeDamage(20);
    }
    }
}