//JAVASCRIPT NOTES

//COURSE: JAVASCRIPT BASICS
//SECTION INTRODUCING CONDITIONAL STATEMENTS

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

//Line 18) Above starts with a variable called ANSWER that asks for a prompt from the user that the user must enter. 
//Line 19) This is the start of the conditional statement. The CONDITION ( answer.toUpperCase() === 'RUBY') takes the variable answer and takes that variable response to all upper case letters. Then it asks, is that answer that has now been converted to upper case EQUAL TO 'RUBY'.
//Line 20} If the CONDITION inside the () is true then the instructions in the CODE BLOCK will run. In the case it is true, the comment "That's right" will be displayed on the webpage.    
//Line 21) ELSE statement is now looking at IF the answer to the condition on line 20 is FALSE then line 22 will run.
//Line 22) If line 19 is FALSE this line will run, outputting "Sorry, that's wrong" on the webbpage.

//BUILD A RANDOM NUMBER GUESSING GAME

let randomNumber = Math.floor(Math.random() * 6) + 1;
const guess = prompt('I am thinking of a number between 1 and 6, what is it?');
if (parseInt(guess) === randomNumber) {
    document.write('<p>You guess the right number!</p>')
} else {
    document.write('<p>Sorry. The number was a ' + randomNumber + '</p>');
}
//Line 33 starts with a variable randomNumber that uses a METHOD called .floor() and .random() which Math.random() Function gets a random number between 0 and 1, the * 6 makes it so the number will now look at a number between 0 and 5. The + 1 adds 1 to the output. The .floor() method takes the number that comes back like 2.394 and rounds down to the full integer, so it would return 2 etc. That random number that is returned is stored in the variable randomNumber. 
//Line 34 Declares a variabble called guess that puts a prompt on the users screen that says (I am thinking of a number...) When the user types in a number, it's stored in guess variable. 
//Line 35) Then the conditional if statement starts. It takes parseInt function which takes the string entered in for the variable guess and convering it into a number. It then checks to see if the number inputed my user is EQUAL TO the number in variable randomNumber.
//Line 36) If the answer to the CONDITIONAL on line 33 is TRUE then this line will run. It will output o the document the response "You guess the right number".
//Line 37) ELSE
//Line 38) If the answer to the CONDITIONAL on line 33 is FALSE then this line will run and the words "Sorry. The number was ..." outputs to the webpage.

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
        correctGuess = true;
    }
}
if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}

//LINE 66) Global Variable 'correctGuess' and set it to start out as 'FALSE'
//LINE 67) Global Variable 'randomNumber' and get a random number between 0 and 1.
//Line 68) Global Variable 'guess' activates a prompt on user screen that says 'I am thinking of...' 
//Line 69) Function starts with 'IF' statement and takes whatever prompt came back in line 68 and was put in variable 'guess' which returns a string with the number in it. Then 'parseInt' takes that string and converts to a number. It then asks is the 'guess' is EQUAL TO the 'randomNumber' which is the integer that came back from line 67. 
//Line 70) If line 69 evaluates to TRUE then line 70 runs and the variable 'correctGuess' EQUALS true.
//Line 71) ELSE IF if the 'guess' is LESS than 'randomNumber' then run line 72 and its NOT then go to line 76
//Line 72) Local Variable 'guessMore' EQUALS whatever the user types into prompt 'Try again. The number... is MORE than 'guess' (They should be typing in a number HIGHER than what they typed in
//Line 73) This is a nested IF which evaulates to is 'guessMore' EQUAL TO 'randomNumber' then go to line 74.
//Line 74) Global Variable 'correctGuess' evaluates to TRUE.
//Line 75) Closes the IF statement that starts on line 73
//Line 76) ELSE IF the 'guess' is GREATER THAN 'randomNumber'then go to line 77
//Line 77) Local variable 'guessLess' EQUALS whatever the user types into prompt 'Try again. The number... is LESS than 'guess' (They should be typing in a number LOWER than what they typed in)
//Line 78) IF 'guessLess' is EQUAL TO 'randomNumber' then go to line 79
//Line 79) Global Variable 'correctGuess' now evaluates to TRUE.
//Line 80) Closes the conditional statement beginning on line 78.
//Line 81) Closes the ELSE IF started on line 76.
//Line 82) If the 'correctGuess' is TRUE then go to line 83 if it's false go to line 84.
//Line 83) If 'correctGuess' is TRUE then type to user 'You guess the number!'
//Line 84) ELSE happens if line 82 is FALSE
//Line 85) If line 82 is FALSE then type to user 'Sorry. The number was 'randomNumber.
//Line 86) closes conditional statement started on line 82.
