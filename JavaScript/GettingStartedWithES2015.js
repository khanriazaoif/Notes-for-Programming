//**********Getting Started with ES2015**********//
//**********************************************//

//**********Defnining Variables with Let and Const**********//

//----------Creating Unchanging Variables With const----------//

//const should be the first choice when declaring a VAR
//const is often the best choice when declaring VAR
const pi = 3.14159;

//const does not allow your VAR to be over ridden.
//You will use constants frequently, in fact, it should be your first choice when declaring variables.
//You will use them to store numbers that shouldn't change when your program runs. For example, tax rates, dimensions of user interface components and product prices are good examples.
//And you'll use constants when you're selecting elements on a page, or when you're assigning a function to a variable.

const name = "Andrew";

function createFullName(fName, lName) {
    const name = fName + " " + lName;
    console.log(name);
}
console.log(name);
createFullName("Joel", "Kraft");

  

//----------Using Constants with Arrays and Objects----------//

//CONST doesn't prevent complex objects like ARRAYS and OBJECTS from being MODIFIED. It just prevents them from being reassigned or overwritten completely.


//----------Defining a Variable with let----------//

//Let works like var, allowing you to re-assign variables, but

//unlike var it has block level scoping.


    <script>
       const person = {
            first_name: "Andrew",
            role: "Teacher"
        }
    
        function personDescription(person) {
            let description = person.first_name;
            if(person.role) {
                description = description + " is a ";
                description = description + person.role;
            }
            console.log(description);
        }
    
        personDescription(person);
    </script>


//----------Using let with for Loops----------//

//BUTTON PRESSES FOR PROJECT 2

{/* <head>
<title>buttons - let and Const</title>
</head>
<body>
<h1>Buttons</h1>
<button>Button 0</button>
<button>Button 1</button>
<button>Button 2</button>
<button>Button 3</button>
<button>Button 4</button>
<button>Button 5</button>
<button>Button 6</button>
<button>Button 7</button>
<button>Button 8</button>
<button>Button 9</button> */}
  const buttons = document.getElementsByTagName("button");

  for(let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener("click", function() {
          alert("Button " + i + " Pressed");
      });
  }

//The variable i lives in what's called the global scope, like this. All the buttons share the same value of i. What we need is to give each of the buttons its own local copy of i. Fortunately, let allows us to do that. This means that the let variable declaration of i is localized to each cycle of the for loop. In other words, the i variable is distinct for each cycle through the loop.


//**********Using Template Literals**********//

//----------Basic and Multiple Line Strings----------//

const fruitList = 
  "<ul>" +
    "<li>Kiwi</li>" +
    "<li>Lime</li>" +
    "<li>Pineapple</li>" +
  "</ul>";

const vegetableList = `
  <ul>
    <li>Potato</li>
    <li>Onion</li>
    <li>Broccoli</li>
  </ul>
`;

document.querySelector('.fruits').innerHTML = fruitList;
document.querySelector('.vegetables').innerHTML = vegetableList;
//Line 102-107 uses a template literal by using ` ` back ticks above the TAB key. Instead of having to type "" and + constantly for the string you can just type out the list and put one ` at the beginning and one at the end.


//----------String Interpolation----------//

function like(thing) {
    return 'I like ' + thing;
  }
  
  function love(thing) {
    return `I love ${thing}`;
  }
  
  const sentence = `<p>` + like(`apples`) + `.</p>`;
  const sentenceInterpolation = `<p>${like('apples')}, but ${love('oranges')}.</p>`;
  
  document.querySelector('.interpolation').innerHTML = sentence;


  //**********Create Functions Using Arrow Syntax**********//

//----------Basic Arrow Syntax----------//

//FUNCTION DECLARATION
function sayName() {
    const message = "My name is " + name;
    console.log(message);
}
//FUNCTION EXPRESSION, you assign a function to a variable.
const sayName = function() {
    const message = "My name is " + name;
    console.log(message);
}
//ARROW FUNCTIONS with NO ARGUMENTS
const sayName = () => {
    const message = "My name is " + name;
    console.log(message);
}

//FUNCTION DECLARATION starts with function KEYWORD.
//FUNCTION EXPRESSION start with a VAR that uses the FUNCTION name for the VARIABLE.



//----------Adding Arguments To Arrow Functions----------//

//FUNCTION DECLARATION
function square(x) {
    return x * x;
}
//FUNCTION EXPRESSION
const square = function(){
    return x * x;
}
//ARROW FUNCTION with SINGLE ARGUMENT
const square = (x) => {
    return x * x;
}
//ARROW FUNCTION with MULTIPLE ARGUMENTS
const multiply = (x, y) => {
    return x * y;
}



//----------Concise Arrow Function Syntax----------//

//ARROW FUNCTION with SINGLE ARGUMENT
const square = (x) => {
    return x * x;
}
//If there is a SINGLE ARGUMENT you don't need parantheses 
    //You can NOT remove parantheses from ARROW FUNCTIONS with NO or MULTIPLE ARGUMENTS
const square = x => {
    return x * x;
}
//If you are only using one line of code, you don't need the RETURN keyword
const square = x => { x * x;}
//If there is only one line of code you don't need the curly braces
const square = x => x * x;




//ARROW FUNCTION with MULTIPLE ARGUMENTS
//FUNCTION DECLARATION
function multiply(x, y) {
    return x * y;
}
//FUNCTION EXPRESSION
const multiply =  function(x, y) {
    return x * y;
}
//ARROW FUNCTION
const multiply = (x, y) => {
    return x * y;
}
//If you are only using one line of code, you don't need the RETURN keyword
const multiply = (x, y) => { x * y; }
//If there is only one line of code you don't need the curly braces
const multiply = (x, y) => x * y;




//ARROW FUNCTION with NO ARGUMENTS
//FUNCTION DECLARATION
function sayBye() {
    console.log("Bye " + name);  
  }
//FUNCTION EXPRESSION
const sayBye = function() {
    console.log("Bye " + name);  
  }
//ARROW FUNCTION  
const sayBye = () => {
    console.log("Bye " + name);  
  }
//If you are only using one line of code, you don't need the curly braces or second line
const sayBye = () => console.log("Bye " + name);
//If there is only one line of code you don't need the curly braces
const multiply = (x, y) => x * y;  

//FUNCTIONALLY THE SAME

//Function Declaration
function divide1(a, b) {
    return a / b; 
  }
//Function Expression
const divide2 = function(a, b) {
    return a / b;
 }
//Arrow Function Expression
const divide3 = (a, b) => {
   return a / b;
 }
//Arrow Function Expression - cocise
const divide4 = (a, b) => a / b;
  
  