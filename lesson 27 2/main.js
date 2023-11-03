/** 
Objects (Pandas)
 -------
> Traits (Data Member)
- WhiteCoat
- BlackNose
- blackEye
- legs
- name

> Behavior (Behavioural Member)
- eatBamboo
- walk
- fight
- speak

> Advantages of using Objects
- easier to manage the program flow
- creates templates for teh objects and encourages reuse

*/
class Panda {
    
    // constructor - the funcion that initialises the object
    /**
     * This constructor will take some prameters. We've two types of parameters
     * that go in the constructor:
     * 1. Required Parameters
     * 2. Optional Parameters
     * 
     * Required Parameters
     * @params {string} name
     * @params {string} legs
     * @params {string} origin
     * @params {string} eyeColor
     * @params {string} age
     * 
     * Optional Parameters
     * @params {string} acquiredBambooSticks
     * @params {string} territoryConquered
     * @params {string} friends
     * 
     */
    constructor(name, legs, origin, eyeColor, age){
        // required initialised to provided values
        this.name = name
        this.legs = legs
        this.origin = origin
        this.eyeColor = eyeColor
        this.age = age
        // optionals initialised to 0
        this.acquiredBambooSticks = 0
        this.territoryConquered = 0
        this.friends = 0
    }
    
}


/** 
Objects (Dog)
 -------
> Traits (Data Member)
-four legs
-brown, black, or white fur
-names
-pets
-most common pet

> Behavior (Behavioural Member) (verbs)
-play
-excercize
-caretaked
*/
class Dog {
    //constuctor - the function that initialises the object
    /** This cunstructor will take some parameters. We've two types of parameters
     * that go in the constructor:
     * 1. Required Parameters
     * 2. Optional Parameters
     * 
     * Required Parameters
     * @params {string} name
     * @params {string} legs
     * @params {string} eyeColor
     * @params {string} origin
     * @params {string} age
     * 
     * Optional Parameters
     * @params {string} acquiredDogFoodAndBones
     * @params {string} territoryConquered
     * @params {string} friends
     */
    constructor(name, legs, origin, eyeColor, age){
        // required initialised to provided values
        this.name = name
        this.legs = legs
        this.origin = origin
        this.eyeColor = eyeColor
        this.age = age
        //Optional
        this.acquiredBambooSticks = 0
        this.territoryConquered = 0
        this.friends = 0
    }
}
