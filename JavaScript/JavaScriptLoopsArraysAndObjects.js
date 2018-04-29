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


//SECTION 2: TRACKING MULTIPLE ITEMS WITH ARRAYS 

//WHAT IS AN ARRAY

//An ARRAY is a flexible method of storing information. It can hold a single string, 50 numbers, or any combination of data types. Strings, numbers, booleans, and even other ARRAYS.
//ARRAYS have []
var shoppingList = [
    'carrots',
    'milk',
    'eggs'
];

// Challenge Task 1 of 2
// Create an array named data and store any 3 numbers in it.
var data = [
    3,
    4,
    5
];
// Challenge Task 2 of 2
// Leave the data array in place. Add another line of code that creates a second array named assorted. Assign one string value, a number and a Boolean value (like true or false) to the array. The complete assorted array should have 3 values total.
var data = [
    3,
    4,
    5
];
var assorted = [
    "Hello",
    3,
    false
];

//ACCESSING ITEMS IN AN ARRAY

var shopping = [ 'carrots', 'milk', 'eggs' ];
console.log(shopping[0]);
//Line 307 GLOBAL VAR 'shopping' with ARRAY with 3 items. The first item in an array is 0
//Line 308 console.log the ARRAY shopping 0 INDEX item which is carrots

//ADDING DATA TO AN ARRAY

//.length is a PROPERTY
//numbers.length the length PROPERTY is like a VAR for the ARRAY
//.push allows you to add an ITEM to the END of an ARRAY
//.unshift allows you to add an ITEM to the beginning of an ARRAY
//Empty set of [] is an ARRAY LITERAL or EMPTY ARRAY


//The bottom code has two files that are used together. The code prints on the webpage a list of 1 through 6 song names.
//In helpers.js file
function printList( list ) {
    var listHTML = '<ol>';
    for (var i = 0; i < list.length; i += 1) {
      listHTML += '<li>' + list[i] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
  }
  
  function print(html) {
    document.write(html);
  }
//Then in playlist.js file below  
var playList = [];
playList.push('I Did It My Way');
playList.push('Respect', 'Imagine');
playList.unshift('Born to Run');
playList.unshift('Louie Louie', 'Maybellene');
printList(playList);
//Line 323 FUNCTION 'printList' with PARAMETER 'list' which will be given the ARGUMENT from line 341 which has PARAMETER 'playList' which is a GLOBAL VAR 'playList'
//Line 324 LOCAL VAR 'listHTML' IS <ol> tag
//Line 325 FOR LOOP begins. Start with counter of 0 and then check if counter which is 0 is less than the .length of the 'list'. Then add one to the counter. For as long as this block of code is TRUE then go enter the FOR LOOP code block and go to line 326.
//Line 326 LOCAL VAR 'listHTML' add to the <ol> tag a <li> tag with the 'list' which is pulling from the 'playList' of songs. As the 'playList' gets longer then the 'list' grows.
//Line 327 Close the FOR LOOP from 325
//Line 328 When the FOR LOOP stops running add a </ol> tag to close the UNORDERED LIST.
//Line 329 FUNCTION 'print' with PARAMETER 'listHTML' calls the 'print' FUNCTIOn and feeds it the ARGUMENT 'listHTML'
//Line 330 Closes the FUNCTION 'printList' from line 323

//Line 332 FUNCTION 'print' with PARAMETER 'html' which is given the ARGUMENT 'listHTML' which is the list of songs.
//Line 333 Prints the contents of 'html' to the webpage.
//Line 334 Closes the FUNCTION 'print' on line 332

//Line 336 GLOBAL VAR 'playList' is created with an EMPTY ARRAY LITERAL
//Line 337 PUSHED to the end of the playlist
//Line 338 PUSHED 2 items to end of ARRAY. So line 337 goes first then Line 338
//Line 339 PUT AT THE FRONT OF THE ARRAY. So line 339 goest first then 337 and then 338
//Line 340 PUT AT THE FRONT OF THE ARRAY. So line 340 goes first then 339 then 337 then 338
//Line 342 RUN FUNCTION 'printList' which runs the code in helpers.js file which writes to the document the list of songs.

// Challenge Task 1 of 2
// The script.js file contains an array called guestList. It contains a list of names. Add two new names to the end of the list using the array push( ) method. Do not attempt to display the names - only add them to the array.
var guestList = ['Sandra', 'Omar', 'Magnus', 'Becky'];
guestList.push('Riaz', 'Hema');
// Challenge Task 2 of 2
// Now, leaving the code from the last task in place, add 3 names to the beginning of the list using the unshift( ) array method. The final array should have 9 names in it. Do not attempt to display the names - only add them to the array.
var guestList = ['Sandra', 'Omar', 'Magnus', 'Becky'];
guestList.push('Riaz', 'Hema');
guestList.unshift('Rose', 'Rowdy', 'Rogue');


//REMOVING ITEMS FROM ARRAYS

//.pop opposite of .push  .pop will POP the last ITEM off the end of the ARRAY. NOT ONLY DOES IT REMOVE THE LAST ITEM IT "RETURNS" THE LAST ITEM.
var numbers = [1,2,3,4];
var lastItem = numbers.pop();
//Line 376 ARRAY named 'numbers'
//Line 377 Remove the last number in the ARRAY which is 4 and RETURN the value.

//.shift removes the first ITEM in an ARRAY
var numbers = [1,2,3,4];
var firstItem = numbers.shift();
//Line 382 ARRAY named 'numbers'
//Line 383 Remove the first number in the ARRAY which is 1 and RETURN the value.

// Challenge Task 1 of 2
// The orderQueue array contains a list of customer orders. Create a new variable named shipping -- remove the first item from the array and place it in the shipping variable.
var orderQueue = ['1XT567437','1U7857317','1I9222528'];
var shipping = orderQueue.shift();
// Challenge Task 2 of 2
// Now create a new variable named cancelled. Remove the last item from the orderQueue array and store it in the variable cancelled. Use the array method you learned in the last video for this challenge.
var orderQueue = ['1XT567437','1U7857317','1I9222528'];
var shipping = orderQueue.shift();
var cancelled = orderQueue.pop();


//USING FOR LOOPS WITH ARRAYS

//Below code has a ARRAY called playList. It outputs in a list the 6 song names.
var playList = [
    'I Did It My Way',
    'Respect',
    'Imagine',
    'Born to Run',
    'Louie Louie',
    'Maybellene'
  ];
  
  function print(message) {
    document.write(message);
  }
  
  function printList( list ) {
    var listHTML = '<ol>';
    for ( var i = 0; i < list.length; i++ ) {
        listHTML += '<li>' + list[i] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
  }
  printList(playList);
  //Line 401 to 407 ARRAY 'playList' with multiple items
  //Line 408 End of ARRAY 'playList' from line 401

//Line 410 FUNCTION 'print' with PARAMETER 'message' that comes from line 420 which is the ARGUMENT 'listHTML' which is built up inside the FUNCTION printList.
//Line 411 When the FUNCTION 'print' is ran then output the 'message' to the DOCUMENT
//Line 412 Close the FUNCTION 'print' on line 410

//Line 414 FUNCTION 'printList' with the PARAMETER 'list' which gets the ARGUMENT from line 422 which is looking at the ARRAY playList from line 401. This FUNCTION will PRINT the LIST ITEMS in the ARRAY 'playList'
//Line 415 LOCAL VAR 'listHTML' which starts with an <ol> tag
//Line 416 and 417 FOR LOOP. Goes through the list ITEMS and attaches to the VAR 'listHTML'
//Line 418 Close the FOR LOOP on line 416
//Line 419 Once the list has been compiled in the for loop we now close the <li> with a closing </ol> tag.
//Line 420 RUN the FUNCTION 'print' which is on line 410 and give it the ARGUMENT of the ARRAY 'playList' on line 401.
//Line 421 Close the FUNCTION 'printList' on line 414
//Line 422 Call the FUNCTION 'printList' which is on line 414 and give it the ARGUMENT 'playList' which is the ARRAY of ITEMS from line 401.

// Challenge Task 1 of 1
// Use a for or while loop to iterate through the values in the temperatures array from the first item -- 100 -- to the last -- 10. Inside the loop, log the current array value to the console.
var temperatures = [100,90,99,80,70,65,30,10];
for(i = 0; i < temperatures.length; i ++){
  console.log(temperatures[i]);
}


//USEFUL ARRAY METHOD

//.join joins all the items in an array into one list.
//.concat will concatenate two arrays
//.indexOf will tell you the index number of what ITEM you are searching. If that ITEM is not there it will show an index of -1.

var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while (true) {
  search = prompt("Search for product in our store. Type 'list' to show all of the produce and 'quit' to exit");
    search = search.toLowerCase();
    if ( search === 'quit') {
      break;
    } else if ( search === 'list') {
      print(inStock.join(', '));
    } else {
      if( inStock.indexOf( search ) > -1) {
        print('Yes, we have ' + search + ' in the store.');
      } else {
        print(search + ' is not in stock.');
      }
    }
}
//Line 453 ARRAY called 'inStock' is created
//Line 454 GLOBAL VAR called search created

//Line 456 to 458 FUNCTION called print is created that writes a message to the screen.

//Line 460 Creates a WHILE LOOP and it's set to TRUE which causes an infinite loop so we will have to have a break statement at some point to break out of the loop.
//Line 461 GLOBAL VAR search with the PROMPT 'Search for product in our store...'
//Line 462 takes the PROMPT from the user and no matter what they type in changes it to lower case letters which are now lower case on line 463 'quit' and 465 'list'
//Line 463 IF 'search' IS EQUAL TO the string 'quit' then go to line 464
//Line 464 Break statement breaks you out of the loop.
//Line 465 ELSE IF someone types in 'list' go to line 466 if NOT go to line 467
//Line 466 PRINT the ARRAY inStock and lists all the ITEMS in the ARRAY
//Line 467 ELSE
//Line 468 IF the item is in the ARRAY 'inStock' (which is looking for any index of greater than -1 which -1 means the ITEM is not in the ARRAY), then go to line 469 ELSE go to line 471.
//Line 469 PRINT to the document "Yes, we have 'search' in the store"
//Line 470 ELSE
//Line 471 Print to the document "'search' is not in stock".

	
// Challenge Task 1 of 1
// Use the array method that combines all of the items in an array into a single string. In the final string, the array items should be separated by a comma AND a space. Finally, log the final string value to the console.
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

console.log(months.join(', '));


//TWO DIMENSIONAL ARRAYS

var playList = [
    ['I Did It My Way', 'Frank Sinatra'],
    ['Respect', 'Aretha Franklin'],
    ['Imagine', 'John Lennon'],
    ['Born to Run', 'Bruce Springsteen'],
    ['Louie Louie', 'The Kingsmen'],
    ['Maybellene', 'Chuck Berry']
  ];
  
  function print(message) {
    document.write(message);
  }
  
  function printSongs( songs ) {
    var listHTML = '<ol>';
    for ( var i = 0; i < songs.length; i += 1) {
      listHTML += '<li>' + songs[i][0] + ' by ' +  songs[i][1] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
  }
  
  printSongs(playList);
//Line 503 TWO DIMENSIONAL ARRAY called 'playList' created
//Line 504 to 510 are the ARRAYS inside the ARRAY 'playlist'

//Line 512 to 514 Prints the 'message' which will be the 'listHTML' from line 522

//Line 516 FUNCTION 'printSongs' that takes the PARAMETER 'songs'. When this FUNCTION is RAN on line 525 it gives the ARGUMENTS of the TWO DIMENSIONAL ARRAY playList
//Line 517 LOCAL VAR 'listHTML' is created with an <ol> tag
//Line 518 FOR LOOP goes through ARRAY one at a time.
//Line 519 VAR 'listHTML'adds 'songs'[song name][0] and by 'songs' [song name][song writer]
//Line 521 Close the VAR 'listHTML' with an </ol> tag
//Line 522 Calls the 'print' FUNCTION and passes it the 'listHTML' that was created from line 517 to 521
//Line 525 Calls the 'printSongs' FUNCTION and passes it the 'playList' TWO DIMENSIONAL ARRAY


var questions = [
    ['How many states are in the United States?', 50],
    ['How many continents are there?', 7],
    ['How many legs does an insect have?', 6]
  ];
  var correctAnswers = 0;
  var question;
  var answer;
  var response;
  
  function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
  }
  
  for (var i = 0; i < questions.length; i += 1) {
    question = questions[i][0];
    answer = questions[i][1];
    response = parseInt(prompt(question));
    if (response === answer) {
      correctAnswers += 1;
    } 
  }
  
  html = "You got " + correctAnswers + " question(s) right."
  print(html);
//Line 540 to 544 Create a TWO DIMENSIONAL ARRAY called 'questions' with a question followed by an answer
//Line 545 GLOBAL VAR 'correctAnswers' IS set to 0 at the start of this quiz.
//Line 546 GLOBAL VAR 'question'
//Line 547 GLOBAL VAR 'answer'
//Line 548 GLOBAL VAR 'response'

//Line 550 to 552 Print function to the document the PARAMETER 'message' which will be the 'html' string on line 565
//Line 555 FOR loop, iterates through each question in the 'questions' TWO DIMENSIONAL ARRAY
//Line 556 VAR question IS the TWO DIMENSIONAL ARRAY 'questions' then [i] which is whichever question/answer combo we are on with a [0] index which is the question part of the Inner ARRAY. 
//Line 557 Same as above except instead of [0] it's [1] for the answer.
//Line 558 VAR 'response' IS  the 'question' being asked with it's answer. Add to VAR 'response' the 'response' answer from line 556 and turn the string into a number.
//Line 559 IF the 'response' IS EQUAL TO 'answer' then run code on line 560
//Line 560 If line 559 is TRUE then increment 'correctAnswers' by 1.


var questions = [
    ['How many states are in the United States?', 50],
    ['How many continents are there?', 7],
    ['How many legs does an insect have?', 6]
  ];
  var correctAnswers = 0;
  var question;
  var answer;
  var response;
  var correct = [];
  var wrong = [];
  
  function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
  }
  
  function buildList(arr) {
   var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i += 1) {
      listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>';
    return listHTML;
  }
  
  for (var i = 0; i < questions.length; i += 1) {
    question = questions[i][0];
    answer = questions[i][1];
    response = parseInt(prompt(question));
    if (response === answer) {
      correctAnswers += 1;
      correct.push(question);
    } else {
      wrong.push(question);
    }
  }
  
  html = "You got " + correctAnswers + " question(s) right."
  html += '<h2>You got these questions correct:</h2>';
  html += buildList(correct);
  html += '<h2>You got these questions wrong:</h2>';
  html += buildList(wrong);
  print(html);
//Line 581 to 585 is a TWO DIMENSIONAL ARRAY with a question and then answer
//Line 586 to 589 lists some GLOBAL VAR
//Line 590 and 591 two GLOBAL VAR that create an EMPTY ARRAY LITERAL one for each one.

//Line 593 to 596 FUNCTION called 'print' with 'message' PARAMETER. This FUNCTION is called on line 625 and is passed the 'html' string. That is then output to a ID named 'output'

//Line 598 to 605 FUNCTION called 'builList' with a PARAMETER 'arr' It then creats a LOCAL VAR listHTML that creates the LIST.

//Line 607 to 618 is a FOR LOOP. 
//Line 607 FOR loop, iterates through each question in the 'questions' TWO DIMENSIONAL ARRAY
//Line 608 VAR question IS the TWO DIMENSIONAL ARRAY 'questions' then [i] which is whichever question/answer combo we are on with a [0] index which is the question part of the Inner ARRAY. 
//Line 609 Same as above except instead of [0] it's [1] for the answer.
//Line 610 VAR 'response' IS  the 'question' being asked with it's answer. Add to VAR 'response' the 'response' answer from line 609 and turn the string into a number.
//Line 611 IF the 'response' IS EQUAL TO 'answer' then run code on line 560
//Line 612 If line 559 is TRUE then increment 'correctAnswers' by 1.