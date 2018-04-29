//COURSE: JAVASCRIPT BASICS
//SECTION 4:MAKING DECISIONS WITH CONDITIONAL STATEMENTS 

//INTRODUCING CONDITIONAL STATEMENTS

if() {

}
//Above is a conditional statement. Conditional statments begin with the IF keyword. Inside the () goes the CONDITION. This is a test to see whose answer is true or false. Next come the brackets/braces {}. That runs ONLY if the condition inside the () is true. The brackets/braces {} is what's called a CODE BLOCK that can hold one or more JavaScript statements. There are NO semicolon ; at the end of a conditional statement.

if() {

} else {

}
//Above you can put in an optional ELSE clause to run some code if the CONDITION which is inside the () is FALSE. Whatever code you put inside the curly braces/CODE BLOCK after the ELSE clause onlys run when the CONDITION is false. Once again because this is part of a conditional statement there is no semicolon ; at the end.

const answer = prompt('What programming language is the name of a gem');
    if( answer.toUpperCase() === 'RUBY') {
        document.write("<p>That's right!</p>");
    } else {
        document.write("<p>Sorry, that's wrong.</p>");
    }

//Line 20 GLOBAL VARIABLE called ANSWER that asks for a prompt from the user that the user must enter. 
//Line 21 This is the start of the conditional statement. The CONDITION ( answer.toUpperCase() === 'RUBY') takes the variable answer and takes that variable response to all upper case letters. Then it asks, is that answer that has now been converted to upper case EQUAL TO 'RUBY'.
//Line 22 If the CONDITION inside the () is true then the instructions in the CODE BLOCK will run. In the case it is true, the comment "That's right" will be displayed on the webpage.    
//Line 23 ELSE statement is now looking at IF the answer to the condition on line 20 is FALSE then line 22 will run.
//Line 24 If line 19 is FALSE this line will run, outputting "Sorry, that's wrong" on the webbpage.

//BUILD A RANDOM NUMBER GUESSING GAME

let randomNumber = Math.floor(Math.random() * 6) + 1;
const guess = prompt('I am thinking of a number between 1 and 6, what is it?');
if (parseInt(guess) === randomNumber) {
    document.write('<p>You guess the right number!</p>')
} else {
    document.write('<p>Sorry. The number was a ' + randomNumber + '</p>');
}
//Line 35 GLOBAL VARIABLE 'randomNumber' that uses a METHOD called .floor() and .random() which Math.random() Function gets a random number between 0 and 1, the * 6 makes it so the number will now look at a number between 1 and 5. The + 1 adds 1 to the output. The .floor() method takes the number that comes back like 2.394 and rounds down to the full integer, so it would return 2 etc. That random number that is returned is stored in the variable randomNumber. 
//Line 36 Declares a variabble called guess that puts a prompt on the users screen that says (I am thinking of a number...) When the user types in a number, it's stored in guess variable. 
//Line 37) Then the conditional if statement starts. It takes parseInt function which takes the string entered in for the variable guess and convering it into a number. It then checks to see if the number inputed my user is EQUAL TO the number in variable randomNumber.
//Line 38) If the answer to the CONDITIONAL on line 33 is TRUE then this line will run. It will output o the document the response "You guess the right number".
//Line 39) ELSE
//Line 40) If the answer to the CONDITIONAL on line 33 is FALSE then this line will run and the words "Sorry. The number was ..." outputs to the webpage.

//PROGRAMMING MULTIPLE OUTCOMES USING ELSE IF

if () {

} else if () {

} else if () {
    
} else if () {
    
} else if () {
    
} else {

}
//ELSE IF clauses HAVE to start with a IF and ends with ELSE.

//IMPROVING THE RANDOM NUMBER GUESSING GAME

var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} else if ( parseInt(guess) < randomNumber) {
    var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);
    if (parseInt(guessMore) === randomNumber) {
        correctGuess = true;
    }
} else if ( parseInt(guess) > randomNumber) {
    var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
    if (parseInt(guessLess) === randomNumber) {
        correctGuess ++;
    }
}
if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}

//LINE 68) Global Variable 'correctGuess' and set it to start out as 'FALSE'
//LINE 69) Global Variable 'randomNumber' and get a random number between 0 and 1.
//Line 70) Global Variable 'guess' activates a prompt on user screen that says 'I am thinking of...' 
//Line 71) Function starts with 'IF' statement and takes whatever prompt came back in line 68 and was put in variable 'guess' which returns a string with the number in it. Then 'parseInt' takes that string and converts to a number. It then asks is the 'guess' is EQUAL TO the 'randomNumber' which is the integer that came back from line 67. 
//Line 72) If line 69 evaluates to TRUE then line 70 runs and the variable 'correctGuess' EQUALS true.
//Line 73) ELSE IF if the 'guess' is LESS than 'randomNumber' then run line 72 and its NOT then go to line 76
//Line 74) Local Variable 'guessMore' EQUALS whatever the user types into prompt 'Try again. The number... is MORE than 'guess' (They should be typing in a number HIGHER than what they typed in
//Line 75) This is a nested IF which evaulates to is 'guessMore' EQUAL TO 'randomNumber' then go to line 74.
//Line 76) Global Variable 'correctGuess' evaluates to TRUE.
//Line 77) Closes the IF statement that starts on line 73
//Line 78) ELSE IF the 'guess' is GREATER THAN 'randomNumber'then go to line 79
//Line 79) Local variable 'guessLess' EQUALS whatever the user types into prompt 'Try again. The number... is LESS than 'guess' (They should be typing in a number LOWER than what they typed in)
//Line 80) IF 'guessLess' is EQUAL TO 'randomNumber' then go to line 81
//Line 81) Global Variable 'correctGuess' now evaluates to TRUE.
//Line 82) Closes the conditional statement beginning on line 80.
//Line 83) Closes the ELSE IF started on line 78.
//Line 84) If the 'correctGuess' is TRUE then go to line 85 if it's false go to line 86.
//Line 85) If 'correctGuess' is TRUE then type to user 'You guess the number!'
//Line 86) ELSE happens if line 84 is FALSE
//Line 87) If line 84 is FALSE then type to user 'Sorry. The number was 'randomNumber.
//Line 88) closes conditional statement started on line 84.

//THE CONDITIONAL CHALLENGE
//write a simple quiz application.

//1) it has to ask at least five questions.
//2) keep track of the number of questions the user answered correctly.
//3) provide a final message after the quiz,letting the user know the number of questions he or she got right.
//4) rank the player.
    //If the player answered all five correctly, give that player the gold crown.
    //Three to four is a silver crown.
    //One to two correct answers is a bronze crown.
    //And zero correct is no crown at all.

    var correctGuess = 0;
    var question1 = prompt('What is a fireball in the sky');
    var question2 = prompt('What says woof?');
    var question3 = prompt('What says meow');
    var question4 = prompt('What phone revolutionized the smartphone market');
    var question5 = prompt('What says moo');
    
    if(question1.toUpperCase() === 'SUN'){
        document.write("<p>That's right</p>");
        correctGuess ++;
    } else {
        document.write("<p>That's wrong</p>");
    } 
    
    if(question2.toUpperCase() === 'DOG'){
        document.write("<p>That's right</p>");
        correctGuess ++;
    } else {
        document.write("<p>That's wrong</p>");
    } 
    
    if(question3.toUpperCase() === 'CAT'){
        document.write("<p>That's right</p>");
        correctGuess ++;
    } else {
        document.write("<p>That's wrong</p>");
    } 
    
    if(question4.toUpperCase() === 'IPHONE'){
        document.write("<p>That's right</p>");
        correctGuess ++;
    } else {
        document.write("<p>That's wrong</p>");
    } 
    
    if(question5.toUpperCase() === 'COW'){
        document.write("<p>That's right</p>");
        correctGuess ++;
    } else {
        document.write("<p>That's wrong</p>");
    } 
    
    console.log(correctGuess);
    
    document.write('<p>You guessed ' + correctGuess + ' correctly</p>');
    
    if(correctGuess === 5) {
        document.write('<p>You got a gold star</p>');
    } else if (correctGuess >= 3) {
        document.write('<p>You got silver</p>');
    } else {
        document.write('<p>You are terrible and got bronze</p>');
    }



//SECTION 5: CREATING REUSABLE CODE WITH FUNCTIONS

//INTRODUCING FUNCTIONS

//Like a CONDITIONAL STATEMENT a FUNCTION also does not have ; at the end.
//Place FUNCTIONS at the top of your file.
//A function can only return a single value: a variable, a string, a number, a Boolean value, and so on.

function goToCoffeeShop() {
    alert ('Espresso is on the way!');
}
goToCoffeeShop();
//Line 188 This is a FUNCTION. It starts with the function keyword and then states the FUNCTION. The () is how you know it's a FUNCTION. Within braces {} is called a code block.
//Line 189 Whenever the FUNCTION has been called this code block runs.
//Line 191 is how you CALL the FUNCTION. You say FUNCTION name followed by ()

function alertRandom() {
    var randomNumber = Math.floor( Math.random() * 6 ) + 1; 
    alert(randomNumber);
};
alertRandom();

//Line 196 FUNCTION named alertRandom is created
//Line 197 Inside the FUNCTION a VARIABLE named 'randomNumber' gets the number that is returned from the Math.flor and Math.random up to the number 6
//Line 198 Outputs the 'randomNumber' on the screen.
//Line 199 Closes the FUNCTION started on line 194
//Line 200 Calls the FUNCTION 'alertRandom();'

// Challenge Task 1 of 3
// Create a function named sayHi. Don't put any code inside the function yet, just create the basic structure with an empty code block.
function sayHi(){
  
}
// Challenge Task 2 of 3
// Inside the sayHi() function add the code to make an alert appear with the word "Hi" in it. The alert command should go inside the function's code block.
function sayHi(){
    alert('Hi');
  }
// Challenge Task 3 of 3
// Call the new sayHi function you just created.
function sayHi(){
    alert('Hi');
  }
  sayHi();


//GETTING INFORMATION FROM A FUNCTION

//When you write a FUNCTION at the top of your script the computer saves it into memory. Then when the computer gets to the part where the function has been called it jumps back up inside the FUNCTION.
//FUNCTIONS give something back when they finish. This is called RETURNING a VALUE.
function goToCoffeeShop(){
    return 'Espresso is on its way.';
}
alert( goToCoffeeShop());
var coffeeShop = goToCoffeeShop();
//When the JavaScript interpreter encounters the return keyword,it leaves the function and provides the value following the keyword.The value that's returned by the function can then be used in your program,
//Line 230 FUNCTION 'goToCoffeeShip' runs because of the code in Line 233 inside the 'alert' FUNCTION.
//Line 231 RETURNs 'Espresso is...'
//Line 232 closes the FUNCTION started on Line 230.
//Line 233 an ALERT pop up appears and runs the FUNCTION 'goToCoffeeShop' and RETURNS what is the FUNCTION to the ALERT box. In this case the ALERT box would say 'Espresso is on its way.'
//Line 234 GLOBAL VARIABLE is created called 'coffeeShop' which stores the RETURNED string 'Espresso is on its way'.

function getRandomNumber() {
    var randomNumber = Math.floor( Math.random() * 6 ) + 1; 
    return randomNumber;
  }
  var dieRoll = getRandomNumber();
  console.log(dieRoll);
//Line 242 FUNCTION called getRandomNumber is created
//Line 243 LOCAL VARIABLE called 'randomNumber' gets a number between 1 and 6
//Line 244 The number between 1 and 6 is in the VARIABLE 'randomNumber' is returned
//Line 245 Closes the FUNCTION started on line 242
//Line 246 GLOBAL VARIABLE called 'dieRoll' EQUALS  the number that was produced by 'getRandomNumber FUNCTION which because of () also RUNS the FUNCTION.
//Line 247 cnosole.log the number in VARIABLE 'dieRoll'.


//RETURN STATEMENTS

//RETURN statement causes the JS interpreter to exit the FUNCTION immediately. So RETURN should be the last thing in your FUNCTION.
//In addition, the return [SOUND] statement can only return a single value. That is, you can only return one thing, a string, a number, a Boolean value, or the contents of a variable.

function isEmailEmpty() {
    var field = document.getElementById('email');
    if (field.value === '') {
        return true;
    } else {
        return false;
    }
}

var fieldTest = isEmailEmpty();
if (fieldTest === true) {
    alert('Please provide your email address.');
}

//Line 261 FUNCTION 'isEmailEmpty' is created
//Line 262 LOCAL VARIABLE 'field' takes the ELEMENT ID of 'email' and stores in the VARIABLE
//Line 263 IF statement saying if the variable 'FIELD VALUE' is EQUAL TO 'BLANK' then go to line 264, if NOT go to line 266.
//Line 264 If line 263 was TRUE then this line runs and the RETURN keyword stores the value TRUE.
//Line 265 ELSE
//Line 266 If line 263 was FALSE then this line runs and the RETURN keyword stores the value FALSE.
//Line 270 GLOBAL VARIABLE 'fieldTest' EQUALS the value RETURNED in the FUNCTION 'isEmailEmpty' on Line 261. This is also how the FUNCTION on Line 261 is invoked, or run. 
//Line 271 IF the value returned to 'fieldTest' is EQUAL TO TRUE then ALERT user ('Please provide your email address.')

//RETURN exits a FUNCTION and sends a value back to the spot in the program where the FUNCTION was called.

//Challenge Task 1 of 3
//Create a function named getYear -- don't add any code inside the function yet.
function getYear() {
  
}
//Challenge Task 2 of 3
//Inside the function's code block add this line of code

//var year = new Date().getFullYear();
//This creates a new variable and stores the current year in it. Now, add a statement that returns this variable from the function.
function getYear() {
    var year = new Date().getFullYear();
    return year;
  }
//Challenge Task 3 of 3
//Call the getYear function: store the returned value of the function in a new variable named yearToday.
function getYear() {
    var year = new Date().getFullYear();
    return year;
  }
  var yearToday = getYear();


//GIVING INFORMATION TO FUNCTIONS

//ARGUMENT is what is given to the FUNCTION inside the (). The argument is stored in a VARIABLE called a PARAMETER that you can use inside the FUNCTION. So ARGUMENTS inside the () like '(drink)' are called PARAMETERS. The PARAMETER works just like a VARIABLE.
//FUNCTIONS can return multiple ARGUMENTS while RETURN can only return one type.

function goToCoffeeShop(drink, pastry){
    alert( drink + "and " + pastry + "are on the way!");
}
goToCoffeeShop("Espresso","croissant");
//Above outputs 'Espresso and croissant are on the way!'
//Line 314 FUNCTION 'goToCoffeeShop' has two ARGUMENTS passed to it which become PARAMETERS called 'drink' and 'pastry'.
//Line 315 ALERTS the message 'drink + "and " + pastry..." The values for 'drink' and 'pastry' will come when the FUNCTION is called on line 317
//Line 316 Closes the FUNCTION started on Line 314
//Line 317 The FUNCTION 'goToCoffeeShop' is RAN with the two ARGUMENTS 'espresso' and 'croissants'
//Line 315 Now this line evaluates to 'Espresso and croissant are on the way!'

function getRandomNumber( upper ) {
    var randomNumber = Math.floor( Math.random() * upper ) + 1; 
    return randomNumber;
  }
  console.log(getRandomNumber(6));
//Line 325 FUNCTION 'getRandomNumber' gets passed an ARGUMENT which becomes a PARAMETER called 'upper'. This PARAMETER 'upper' will get its ARGUMENT from line 329 when the FUNCTION 'getRandomNumber' is RAN.
//Line 326 LOCAL VARIABLE 'randomNumber' gets a number between 1 and the ARGUMENT for 'upper' 
//Line 327 RETURN the 'randomNumber'
//Line 328 Closes the FUNCTION started on line 325
//Line 329 console.log and then RUN the FUNCTION 'getRandomNumber' and pass the ARGUMENT of 6 to the PARAMETER 'upper' in lines 325 and 326. 

function getArea(width, length, unit) {
    var area = width * length;
    return area + " " + unit;
  }
  console.log(getArea(10,20, 'sq ft'));
//Line 336 FUNCTION getArea with the PARAMETERS 'width', 'length', and 'unit' which they will get the ARGUMENTS from line 340.
//Line 337 LOCAL VARIABLE 'area' is created and EQUALS the PARAMETERS 'width' TIMES 'length'
//Line 338 RETURN the result of 'area' PLUS empty space PLUS 'length'
//Line 339 Closes the FUNCTION from Line 336
//Line 340 console.log the RESULT of the FUNCTION 'getArea' with the ARGUMENTS of '10', '20' and 'sq ft'.

// Challenge Task 1 of 2
// Create a function named returnValue that accepts a single argument (you can name it anything), then immediately returns that argument. 
function returnValue(argument){
    return argument;
}
// Challenge Task 2 of 2
// After your newly created returnValue function, create a new variable named echo. Set the value of echo to be the results from calling the returnValue function. When you call the returnValue function, make sure to pass in any string you'd like for the parameter. 
function returnValue(argument){
    return argument;
}  
var echo = returnValue('hello');

// Challenge Task 1 of 2
// Create a new function named max which accepts two numbers as arguments (you can name the arguments, whatever you would like). The function should return the larger of the two numbers.

// HINT: You'll need to use a conditional statement to test the 2 parameters to see which is the larger of the two.
function max(argument1,argument2) {
    if(argument1 > argument2){
      return argument1;
    }
      return argument2;
  }
//   Challenge Task 2 of 2
// Beneath the max function you just created, call it with two numbers and display the results in an alert dialog. Pass the result of the function to the alert method.

// For example, to display the results of the Math.random() method in an alert dialog you could type this:
function max(argument1,argument2) {
    if(argument1 > argument2){
      return argument1;
    }
      return argument2;
  }
alert(max(3,6));

//RANDOM NUMBER CHALLENGE

function randomNumber(upper,lower){
    return Math.floor(Math.random() * (upper - lower + 1)) + lower; 
}
console.log(randomNumber(5,1));
//Line 383 FUNCTION 'randomNumber' with two PARAMETERS 'upper', 'lower'
//Line 384 RETURN a random number between the 'upper' and 'lower' number arguments.
//Line 385 closes the FUNCTION from Line 383
//Line 386 console.log a random number between the two arguments 5 and 1.

function getRandomNumber( lower, upper ) {
    if(isNaN(lower) || isNaN(upper)) {
      document.write('You did not type in a random number');
    }
    return Math.floor(Math.random() * (upper - lower + 1)) + lower; 
  }
  
  
console.log( getRandomNumber( 'nine', 24 ) );
console.log( getRandomNumber( 1, 100 ) );
console.log( getRandomNumber( 200, 'five hundred' ) );
console.log( getRandomNumber( 1000, 20000 ) );
console.log( getRandomNumber( 50, 100 ) );
//Line 392 FUNCTION 'getRandomNumber' with two PARAMETERS 'lower' and 'upper'
//Line 393 IF the 'lower' number isNaN (It's not a number) OR 'upper' isNaN then run the code block on Line 394
//Line 394 If the IF statement on Line 393 is TRUE then write to the user 'You did not type...'.
//Line 395 Closes IF statement from Line 393
//Line 396 RETURN a random number between the 'upper' and 'lower' number
//Line 397 Close the entire FUNCTION starting on line 392

//Each console.log RUNS the FUNCTION 'getRandomNumber' and then inputs the ARGUMENTS that are presented for 'upper' and 'lower'


