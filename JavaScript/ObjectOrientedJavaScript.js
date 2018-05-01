//**********Object-Oriented JavaScript**********//
//**********************************************//

//**********Introduction to Object-Oriented JavaScript**********//

//----------What Is an Object, and Why Do We Care?----------//

// an OBJECT's PROPERTIES are a series of KEY VALUE pairs that hold information about the OBJECT. And its functions are called METHODS. METHODS let your OBJECT do something or let something be done to it.

//OBJECTS in real life have STATES and BEHAVIORS. In OBJECTS the STATES are represented by PROPERTIES and BEHAVIORS are represented by METHODS
//EXAMPLES BELOW
//Object: House
//Properties: Square Footage, Color, Year Built

//Object: Radio
//Properties: Station, Volume
//Methods: Turn Off, Turn On, Change Stations



//----------JavaScript Objects----------//

//Most everything you encounter when programming in JavaScript is an object or can be treated like an object. For example, in your course progression, you've probably heard of or encountered the DOM or the Document Object Model. That's just an object that represents the HTML document your JavaScript interacts with.
//DOM elements are objects and have properties and methods. For example, I can get an element styles with the styles property. I can get the HTML that an element is made of with the innerHTML property. I can even get an element's parent with the parentNode property, or its children with the childNodes property.
//DOM objects have methods as well, like getElementById( ), or appendChild( )//Did you know that arrays are another example of a JavaScript object? Arrays have properties like length, and methods like push, pop, and concat.


//**********Object Basics**********//

//---------Object Literals and Components of Objects---------//

//Object literals are one way to create an object and they're really great when you're modeling only one single specific thing.
const rowdy = {
    animal: 'dog',
    age: 2,
    breed: 'boxer',
    bark: function(){
        console.log('Woof!');
    }
}
//Inside the curly braces, I added a series of KEY VALUE pairs that make up the three properties and one method inside this object literal.
//On the first line inside the curly braces, you will see the word animal, followed by a colon, followed by the string dog.
//This is a key value pair, and it is representing the animal property of this object literal.
//The key is the name of the property, and the value of the property follows after the colon.
//Property values don't have to just be strings. They can also be numbers, Booleans and even functions. In our example here, we've got three properties. Animal, age and breed. An object literal's properties and methods are always separated by commas. Each new property or method is on it's own line for readability. But technically, you don't have to do that for the syntax to be right.
//On the line after the breed property, you'll see another property called bark. But instead of a string value after the colon, there is a function declaration. This is one way to add methods object literals. The property key is the name of the method, and that's the name you'll use when you want to call it. Putting all of these properties and methods into a package and attaching it to a variable is called ENCAPSULATION.

//-----Challenge Task 1 of 2-----//

//Fill in the missing code for the object literal. To do this, inside the curly braces, create three key value pairs for properties name, color, and isTurn. The values for name and color should be any string value, and the value for isTurn should be true.
const player1 = {
    name: 'Riaz',
    color: 'Brown',
    isTurn: true
  }
//-----Challenge Task 2 of 2-----//

//Add an empty method to the object literal called play().  
const player1 = {
    name: 'Riaz',
    color: 'Brown',
    isTurn: true,
    play : function(){
    }
  }


//---------Dot Notation & Bracket Notation---------//

//fruits.js
  const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}
console.log(ernie.animal);
earnie.bark();
console.log(ernie['age']);
ernie['bark']();
var prop = 'breed';
ernie[prop];

//pets.js
const fruits = ['apple', 'pear', 'strawberry'];
fruitsLength = fruits.length;

fruits[0]; //Apple


//-----Challenge Task 1 of 2-----//

//Inside the play method, write an empty if statement that checks if it's the players turn. Use dot notation.
const player1 = {
    name: 'Ashley',
    color: 'purple',
    isTurn: true,
    play: function(){
      if(this.isTurn){
        
      }
    }
}
//-----Challenge Task 2 of 2-----//

//Inside the if statement, return a string equal to the value of the name property followed by the string " is now playing!". Use bracket notation.
const player1 = {
    name: 'Ashley',
    color: 'purple',
    isTurn: true,
    play: function(){
      if(this.isTurn){
        return player1['name'] + ' is now playing!';
      }
    }
}


//---------Changing and Adding Properties---------//

const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}

console.log(ernie.animal);
earnie.bark();
console.log(ernie['age']);

ernie['bark']();
var prop = 'breed';
ernie[prop];

ernie.age = 2;
ernie['age'] = 2;

ernie.color = 'black';

//-----Challenge Task 1 of 2-----//

//On a new line after the existing code, change the value of the 'isTurn' property for player1 to false, using dot notation.

const player1 = {
    name: 'Ashley',
    color: 'purple',
    isTurn: true,
    play: function(){
        if (this.isTurn) {
            console.log(`${this.name} is now playing!`);
         }
    }
}

const player2 = {
    name: 'Guil',
    color: 'red',
    isTurn: false,
    play: function(){
        if (this['isTurn']) {
            console.log(`${this['name']} is now playing!`);
        }
    }
}

player1.isTurn = false;

//-----Challenge Task 2 of 2-----//

//On a new line after the existing code, change the value of the 'isTurn' property for player2 to true, using bracket notation.
const player1 = {
    name: 'Ashley',
    color: 'purple',
    isTurn: true,
    play: function(){
        if (this.isTurn) {
            console.log(`${this.name} is now playing!`);
         }
    }
}

const player2 = {
    name: 'Guil',
    color: 'red',
    isTurn: false,
    play: function(){
        if (this['isTurn']) {
            console.log(`${this['name']} is now playing!`);
        }
    }
}

player1.isTurn = false;
player2.isTurn = true;



//**********Working with Classes in JavaScript**********//

//----------When Object Literals Aren’t Enough----------//

//JAVASCRIPT CLASS SYNTAX
//Imagine CLASS on top of a box
//Inside the box are PROPERTIES and METHODS
//That CKASS can then be reused with the same PROPERTIES and METHODS as the original one
//SYNTA

//----------Writing Your First Class----------//

//CONSTRUCTOR METHOD outlines what PROPERTIES the CLASS will have.

//If CLASS was a BLUEPRINT the CONSTRUCTOR METHOD is like the FACTORY
class Pet {
    constructor(){
        
    }
}


//----------Adding Properties Inside the Constructor Method----------//

//CONSTRUCTOR METHOD
class Pet {
    constructor(animal, age, breed){
        this.animal = animal;
        this.age = age;
        this.breed = breed;
    }
}

//-----Challenge Task 1 of 1-----//

// Add a parameter called gpa to the constructor method, and then create a gpa property and set it equal to the parameter.
class Student {
    constructor(gpa){
      this.gpa = gpa;
    }
  }

//----------Instantiating a Pet Object----------//

class Pet {
    constructor(animal, age, breed) {
      this.animal = animal;
      this.age = age;
      this.breed = breed;
    }
  }
  
  const ernie = new Pet('dog', 1, 'pug');

 
//-----Challenge Task 1 of 1-----//

//Create a variable called student. Set it equal to a new instance of class Student. The student object should be instantiated with a gpa of 3.9.
class Student {
    constructor(gpa){
        this.gpa = gpa;
    }
}

const student = new Student(3.9);


//----------Adding Methods To Our Class----------//

class Pet {
    constructor(animal, age, breed, sound) {
      this.animal = animal;
      this.age = age;
      this.breed = breed;
      this.sound = sound;
    }
    //speak() is a METHOD which is a FUNCTION
    //Note that when adding methods inside a class we don't use the function keyword. SEE BELOW 'speak()'
    speak() {
        console.log(this.sound);
    }
  
  }
  
const ernie = new Pet('dog', 1, 'pug', 'woof woof');

//-----Challenge Task 1 of 1-----//

//Inside the stringGPA() method, convert the value of the gpa property to a string and return it.
class Student {
    constructor(gpa){
        this.gpa = gpa;
    }
  stringGPA(){
    return this.gpa.toString();
  }
}

const student = new Student(3.9);



//**********Getters and Setters**********//

//----------Getters----------//

class Pet {
    constructor(animal, age, breed, sound) {
      this.animal = animal;
      this.age = age;
      this.breed = breed;
      this.sound = sound;
    }
  
    get activity() {
      const today = new Date();
      const hour = today.getHours();
  
      if (hour> 8 && hour <= 13) {
        return 'playing';
      } else {
        return 'sleeping';
      }
  
    }
    
    speak() {
      console.log(this.sound);
    }
    
  } 
  
  const ernie = new Pet('dog', 1, 'pug', 'yip yip');
  const vera = new Pet('dog', 8, 'border collie', 'woof woof');
  
  console.log(ernie.activity);
//Line 309 CLASS 'Pet' is created It's a CLASS for an object  