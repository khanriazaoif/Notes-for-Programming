//COURSE: JAVASCRIPT LOOPS ARRAYS AND OBJECTS
//SECTION 1: SIMPLIFY REPETITIVE TASKS WITH LOOPS 

//WHAT ARE LOOPS

//Below prints out 10 random numbers between 1 and 6 to the webpage
function randomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
}
  var counter = 0;
  while ( counter < 10 ) {
    var randNum = randomNumber(6);
    document.write(randNum + ' ');
    counter += 1;
}
//Line 7 FUNCTION 'randomNumber' with the PARAMETER 'upper'
//Line 8 RETURN a random number between 1 and the 'upper' ARGUMENT entered in on Line 12
//Line 9 Close the FUNCTION started on line 7
//Line 10 GLOBAL VARIABLE COUNTER is set to 0
//Line 11 WHILE loops through the PARAMETER which is asking is the 'counter' LESS than 10. If it evaluates to TRUE then the CODE BLOCK starting on Line 12 starts.
//Line 12 LOCAL VARIABLE 'randNum' EQUALS the number returned from FUNCTION randomNumber with the ARGUMENT of 6.
//Line 13 Write to the user on the webpage the 'randNum' + EMPTY SPACE.
//Line 14 Iterate the 'counter' by 1 each time
//When Line 14 occurs it adds 1 to the 'counter' which makes the first loop change to 1. Then it goes to line 11 again and says is '1 < 10' which it is, so it loops through 10 times and then stops when '10 < 10' because that is FALSE.

// Challenge Task 1 of 1
// This is a nearly complete while loop, but something is missing. The loop should run 10 times, but it's not working at all. Can you fix it?
var counter = 1;
while (counter < 11 ) {
    document.write("<p>Now in loop #" + counter + "</p>");
    counter += 1;
}

// Challenge Task 1 of 1
// In this challenge, you will create a while loop that prints to the document 26 times. We've added a variable named count, use it to track the number of times the loop runs. Don't forget to use the document.write() method inside the loop.
var count = 0;
while (count < 26) {
    document.write('<p>' + count + '</p>');
    count += 1;
}
//Line 36 GLOBAL VARIABLE 'count' is 0
//Line 37 'while' loop checks to see the 'count' is LESS than 26. On the first run it is 0 < 26. If it evaluates to TRUE then the code block on Line 38 starts.
//Line 38 If the 'while' loop on Line 37 is TRUE then write to the webpage the 'count' and then add 1 to the 'count'. The next loop will go through and go from 0 < 26 to 1 < 26. Repeating until 26 < 26 is FALSE and the loop stops.


var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while ( guess !== randomNumber ) {
  guess = getRandomNumber( upper );
  attempts ++;
}

document.write("<p>The random number was: " + randomNumber + "</p>");
document.write("<p>It took the computer " + attempts + " attempts to get it right.</p>")
//Line 46 GLOBAL VARIABLE 'upper' IS 10000
//Line 47 GLOBAL VARIABLE 'randomNumber' IS the return of FUNCTION getRandomNumber with the PARAMETER of 'upper'. 
//Line 48 GLOBAL VARIABLE 'guess' is set to TRUE.
//Line 49 GLOBAL VARIABLE 'attempts' is set to 0
//Line 51 FUNCTION getRandomNumber with the PARAMETER 'upper' which is 10000.
//Line 52 RETURN random number between 1 and the PARAMETER 'upper' which is 10000
//Line 53 Close of FUNCTION getRandomNumber on Line 51
//Line 55 WHILE loop with ARGUMENT 'guess' (on first run is TRUE) IS NOT EQUAL TO VARIABLE 'randomNumber' which is the RETURN from getRandomNumber FUNCTION which is 10000. If this evaluation is TRUE then run the code block on Line 56.
//Line 56 VARIABLE 'guess' IS the RETURN from 'getRandomNumber' with PARAMETER 'uppper' which is equal to 10000
//Line 57 VARIABLE 'attempt' goes up by 1.
//Line 60 Print to the screen "The random number was 'randomNumer'"
//Line 61 Print to the screen "It took the computer + 'attempts' + attempts..."


// Challenge Task 1 of 1
// The code in app.js just opens a prompt, asks for a password and stores it in a variable secret. It also writes to the document. The current code only checks the password once. Remove the if statement and add a while loop, so that a prompt keeps appearing until the user types "sesame" into the prompt.
var secret = prompt("What is the secret password?");

while (secret !== "sesame") {
  secret = prompt("That's not it! Try again");
  secret ++;
}
document.write("You know the secret password. Welcome.");

//DO WHILE LOOPS

//DO WHILE LOOPS The do while loop will always execute the code block at least once. That's because the CONDITION isn't tested until after the code block.
//WHILE loop checks the CONDITION inside the (). The DO WHILE goes through a code block at least once BEFORE encourtering the while() CONDITIONAL.
do {
    
} while ()

var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

do {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?');
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
} while ( ! correctGuess )
  document.write('<h1>You guessed the number!</h1>');
  document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);
//Line 94 GLOBAL VARIABBLE 'randomNumber' IS runs the FUNCTION getRandomNumber with the argument of 10.
//Line 95 GLOBAL VARIABLE 'guess'
//Line 96 GLOBAL VARIABLE 'guessCount' IS 0.
//Line 97 GLOBAL VARIABLE 'correctGuess' initially set to FALSE
//Line 99 FUNCTION 'getRandomNumber' with the PARAMETER 'upper' which on Line 94 is identified as 10.
//Line 100 LOCAL VARIABLE 'num' gets a random numbber between 1 and 'upper' which is 10.
//Line 101 RETURN the 'num' from Line 100
//Line 102 Close the IF statemetn from Line 107
//Line 104 DO WHILE loop begins. In a DO WHILE loop the first part of the code block is run which is Line 105.
//Line 105 GLOBAL VARIABLE 'guess' IS prompt 'I am thinking of a number between 1 and 10....'
//Line 106 GLOBAL VARIABLE 'guessCount' is incremented by 1.
//Line 107 IF statment where the 'guess' prompt from Line 105 has the string converted to a number and if that is EQUAL TO 'randomNumber which is the random number from Line 100. If this line is TRUE go to line 108
//Line 108 GLOBAL VARIABLE 'correctGuess' IS TRUE
//Line 109 Closes IF statement from Line 107
//Line 110 WHILE NOT EQUAL to 'correctGuess' then go back through the loop and start over until you guess 'correctGuess' is TRUE.
//Line 111 Then write to the webpage 'You guessed the number!'
//Line 112 Then write to the webpage. "It took you "" + 'guessCount' + ....

// Challenge Task 1 of 1
// This is the code we used in the last code challenge. After learning about do...while loops, don't you think this would work better in the do...while style? 
// Re-write the code to use a do...while loop.
var guessCount;
var secret;
do {
    secret = prompt("What is the secret password?");
    guessCount += 1;
} while ( secret !== "sesame" )
document.write("You know the secret password. Welcome.");


//FOR LOOPS

for ( var counter = 0; counter < 10; counter += 1){
    document.write( counter );
}

for ( var i = 0; i < 10; i += 1){
    document.write( i );
}


//Print 10 circular DIVS to the webpage
var html = '';

for (i = 1; i <= 10; i += 1) {
    html += '<div>' + i + '</div>';
}
document.write(html);
//Line 155 GLOBAL VARIABLE 'html' is set to the string BLANK.
//Line 157 FOR LOOPs. Initialize the counter to 1. This part always runs at least once. Then the counter is checked to see if it evaulated to TRUE. If it does then the CODE BLOCK on Line 158 will run. Finally the counter is incremented by 1 each time.
//Line 158 If line 157 initializes to TRUE then this line will run. It sets the VARIABLE to a DIV ELEMENT with the counter number in the middle and closing DIV
//Line 159 Close the FOR LOOP started on line 157
//Line 160 Write to the webpage what is in the VARIABLE 'html'


// Challenge Task 1 of 1
// Create a for loop that logs the numbers 4 to 156 to the console. To log a value to the console use the console.log( ) method.


var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

while ( guessCount < 3) {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?');
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
    break;
  }  
} if ( correctGuess ) {
  document.write('<h1>You guessed the number!</h1>');
  document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);
} else {
  document.write('<h1>Sorry. You did not guess the correct number</h1>');
}
//Line 172 GLOBAL VAR 'randomNumber' IS the RETURN entry from 'getRandomNumber' FUNCTION.
//Line 173 GLOBAL VAR 'guess'
//Line 174 GLOBAL VAR 'guessCount' which has been set to 0
//Line 175 GLOBAL VAR 'correctGuess' IS FALSE

//Line 177 FUNCTION 'getRandomNumber' with the PARAMETER 'upper' which gets its ARGUMENT from line 172 which is 10.
//Line 178 LOCAL VAR 'num' gets a random number between 1 and the 'upper' which in this case is 10.
//Line 179 RETURN the random number created on line 178
//Line 180 Close FUNCTION 'getRandomNumber' on line 177

//Line 182 WHILE LOOP 'guessCount' which first time through is 0, is < 3 so you only have 3 guesses to get the correct answer between 1 and 10.
//Line 183 If the WHILE LOOP on line 182 is TRUE then enter the loop and set VAR 'guess' to the response from the prompt 'I am thinking of a number between 1 and 10...'
//Line 184 GLOBAL VAR 'guessCount' is incremented by 1.
//Line 185 IF the 'guess' which is changed from string to number IS EQUAL TO the VAR from line 172 which are the RETURN from 'getRandomNumber' FUNCTION. If it is TRUE go to line 186. If FALSE go back through the WHILE LOOP and see if the condition is still TRUE.
//Line 186 If line 185 is TRUE then change GLOBAL VAR 'correctGuess' to TRUE
//Line 187 Then BREAK out of the LOOP.
//Line 188 Close the IF CONDITIONAL from line 185
//Line 189 IF 'correctGuess' is TRUE then go to line 190. If FALSE go to line 192
//Line 190 If line 189 is TRUE then write to the webpage "You guessed the number!"
//Line 191 Print to webpage "It took you " + 'guessCount' + " tries to guess..."
//Line 192 ELSE
//Line 193 Print to webpage 'Sorry. You did not guess the correct number'
//Line 194 Close ELSE statement.

var html = '';
var rgbColor;

function randomRGB() {
 return Math.floor(Math.random() * 256 ); 
}

function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

function print(message) {
  document.write(message);
}

for (var i = 0; i < 100; i += 1) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);
//Line 219 GLOBAL VAR 'html' with an EMPTRY STRING
//Line 220 GLOBAL VAR 'rgbColor'

//Line 222 FUNCTION 'randomRGB'
//Line 223 When FUNCTION 'randomRGB' is called it will RETURN a random number between 1 and 256.
//Line 224 Close the FUNCTION 'randomRGBB' on line 222

//Line 226 FUNCTION 'randomColor'
//Line 227 to 230 When FUNCTION 'randomColor' is called it will run the code block on line 227 and create LOCAL VAR 'color' which IS 'rgb('color' + 'randomRGB' 3 times. 
//Line 231 Return the 'color' LOCAL VAR which should say 'rgb(1,3,6)' for example.
//Line 232 Close FUNCTION 'randomColor' on line 226

//Line 234 FUNCTION 'print' with the PARAMETER 'message;
//Line 235 When FUNCTION 'print' on line 234 is RUN then print to the webpage the ARGUMENT passed to the PARAMETER 'message'
//Line 236 Close the FUNCTION 'print' on line 234

//Line 238 FOR LOOP. If FOR LOOP Evaluates to TRUE then go inside the loop.
//Line 239 If FOR LOOP on line 238 is TRUE then take GLOBAL VAR 'rgbColor' IS the RETURN from FUNCTION 'randomColor'.
//Line 240 GLOBAL VAR 'html' changes the DIV background color to 'rgbColor'.
//The loop then goes back up to line 238 and keeps running until the loop evaulates to FALSE.


// Challenge Task 1 of 1
// The code below logs all of the even numbers from 2 to 24 to the JavaScript console. However, there's a lot of redundant code here. Re-write this using a loop.
for ( i = 2; i < 25; i += 2) {
    console.log(i);
  }