//**********JavaScript and the DOM**********//
//**********************************************//

//**********Getting a handle on the DOM**********//

//----------A Simple Example----------//

const myHeading = document.getElementById('myHeading');

myHeading.addEventListener('click',() => {
    myHeading.style.color = 'red';
});
//Line 8 CONST 'myHeading' we select the ELEMENT 'myHeading' from the index.html page
//Line 10 The CONST myHeading which is the ELEMENT returned from line 8 take and call the addEventListener method telling the browser to do something when the headlines clicked.
//Line 11 And finally we tell the browser to manipulate the event by making the text read for every click event.


//----------Select a Page Element By Its ID----------//

//DOCUMENT from document.getElementById() is a GLOBAL VARIABLE representing the current webpage.
//getElementById method belongs to the document object. It looks through the entire page for an element with the specified ID then it returns that element if it exists.

myTextInput.value; //Will say "" if it's an EMPTRY STRING

const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});
//Line 25-27 3 CONST that select the ELEMENTS inside the ()
//Line 29 The element 'myButton' has an EVENT LISTENTER attached to it listening for a 'click' event. If the 'click' occurs go to line 30
//Line 30 The element 'myHeading' color will change to the 'myTextInput' value.


//-----Challenge Task 1 of 2-----//
//There is a variable named button in app.js. Set its value to contain a reference to the button element in index.html with the ID of sayPhrase.
let button = document.getElementById('sayPhrase');
let input;

button.addEventListener('click', () => {
  alert(input.value);
});

//-----Challenge Task 2 of 2-----//
//There is a variable named input in app.js. Set its value to contain a reference to the input element in index.html with the ID of phraseText.
let button = document.getElementById('sayPhrase');
let input = document.getElementById('phraseText');;

button.addEventListener('click', () => {
  alert(input.value);
});


//----------Select All Elements of a Particular Type----------//

const el = document.getElementById('a')
//Line 58 gets one element

const els = document.getElementsByTagName('p');
//Line 61 selects ALL <p> Tags. Notice ELEMENTS inside of ELEMENT

//While a get element by ID returns a single element that can be accessed directly get elements by tag name returns a COLLECTION of elements.
//A COLLECTIO)N is like an ARRAY you can access an element directly using its index or loop over the whole collection to access all of them.

const myHeading = document.getElementsByTagName('ul')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

//Line 67-72 look at line 32 to 34

const myList = document.getElementsByTagName('li');

  for (let i = 0; i < myList.length; i += 1) {
    myList[i].style.color = 'purple';
  }
//Line 77 CONST 'myList' selects all the <li> tags
//Line 79 FOR LOOP iterates through the list of <li> tags
//Line 80 This changes the entire list to purple



//----------Selecting Elements with the Same Class Name----------//

//HTML below. The <li> tags that have classes with error-not-purple should be red. Everything else purple 
<body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
    <p>Things that are purple:</p>
    <ul>
      <li>grapes</li>
      <li class="error-not-purple">oranges</li>
    	<li>amethyst</li>
      <li>lavender</li>
      <li class="error-not-purple">fire trucks</li>
      <li class="error-not-purple">snow</li>
    	<li>plums</li>
    </ul>
    <script src="app.js"></script>
  </body>

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}

const errorNotPurple = document.getElementsByClassName('error-not-purple');

for (let i = 0; i < errorNotPurple.length; i += 1) {
  errorNotPurple[i].style.color = 'red';
}

//Line 107-111 Changes all <li> to color Purple
//Line 113-117 Changes all <li> that have class 'error-not-purple' to the color Red.

//getElementsByClassName returns an HTML COLLECTION



//----------Using CSS Queries to Select Page Elements----------//

//.querySelector() //RETURNS the first matching ELEMENT
//.querySelectorAll()  //RETURNS A COLLECTION OF THE ITEM

//To select an HTML element 
document.querySelector('[title=label]')

//Below has <li> tags. The ones with class '.error-not-purple' turn RED while the rest of the <li> tags are purple. Also EVEN rows are colored 'lightgray'
{/* <body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
    <p title="label">Things that are purple:</p>
    <ul>
    	<li>grapes</li>
      <li class="error-not-purple">oranges</li>
    	<li>amethyst</li>
    	<li>lavender</li>
      <li class="error-not-purple">fire trucks</li>
      <li class="error-not-purple">snow</li>      
    	<li>plums</li>
    </ul>
    <script src="app.js"></script>
//  </body> */}


const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}

const errorNotPurple = document.querySelectorAll('.error-not-purple');

for (let i = 0; i < errorNotPurple.length; i += 1) {
  errorNotPurple[i].style.color = 'red';
}

const evens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < evens.length; i += 1) {
  evens[i].style.backgroundColor = 'lightgray';
}  


//-----Challenge Task 1 of 1-----//

//We have some JavaScript code that will cycle over list items and apply colors from an array called colors. The code will apply the first color to the first list item, the second color to the second list item and so on. But the code is not complete. On line 1 of app.js, set the variable listItems to refer to a collection. The collection should contain all list items in the unordered list element with the id of rainbow.
{/* <body>
    <ul id="rainbow">
      <li>This should be red</li>
      <li>This should be orange</li>
      <li>This should be yellow</li>
      <li>This should be green</li>
      <li>This should be blue</li>
      <li>This should be indigo</li>
      <li>This should be violet</li>
    </ul>
    <script src="js/app.js"></script>
  </body> */}


let listItems = document.querySelectorAll('li');
const colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

for(var i = 0; i < colors.length; i ++) {
  listItems[i].style.color = colors[i];    
}



//-----Challenge Task 1 of 3-----//

//In the following tasks you'll be required to select various elements on the index.html page.
//In the app.js file on line 1, select all links in the nav element and assign them to navigationLinks.
let navigationLinks = document.querySelectorAll("nav ul li a");
let galleryLinks;
let footerImages;

//-----Challenge Task 2 of 3-----//

//On line 2 of app.js, select all links in the unordered list with the id of "gallery" and assign them to galleryLinks.
let navigationLinks = document.querySelectorAll("nav ul li a");
let galleryLinks = document.querySelectorAll("#gallery a");
let footerImages;

//-----Challenge Task 3 of 3-----//

//On line 3 of app.js, select all images in the footer element and assign them to footerImages.
let navigationLinks = document.querySelectorAll("nav ul li a");
let galleryLinks = document.querySelectorAll("#gallery a");
let footerImages = document.querySelectorAll(".social-icon");



//**********Making Changes to the DOM**********//

//----------Getting and Setting Text with textContent and innerHTML----------//

//textContent and innerHTML are almost the same except innerHTML also picks up the HTML elements.

// <h1 id="myHeading">JavaScript and the DOM</h1>
    // <p>Making a web page interactive</p>
    
    // <p class="description">Things that are purple:</p>
    // <input type="text" class="description">
    // <button class="description">Change list description</button>
    // <ul>
    //   <li>grapes</li>
    //   <li>amethyst</li>
    //   <li>lavender</li>
    //   <li>plums</li>
    // </ul>
    // <script src="app.js"></script>

const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
});



//----------Changing Element Attributes----------//

Element.attribute
//Attributes like the href attribute on a link or the action attribute on a form exist as properties of an element object. You get or set them in a similar way we saw with text 

input.type // "text"
input.className // "description"
input.type = 'checkbox' //"checkbox"


//
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
});

p.title = "List description";
//Line 270 sets the .title which makes a pop up tool tip over the <p> in this case.


//-----Challenge Task 1 of 2-----//

//Store the value of the text input element in the variable inputValue.
let inputValue = document.querySelector('#linkName').value;


//-----Challenge Task 2 of 2-----//

//Set the text content of the a tag to be the value stored in the variable inputValue.
let inputValue = document.querySelector('#linkName').value;
let anchor = document.querySelector("#link");

anchor.innerText = inputValue;



//----------Styling Elements----------//

Element.style.prop
//.style is a PROPERTY of ELement, but is also an OBJECT who has a PROPERTY .prop
p.style.color = 'darkblue'
p.style.backgroundColor = 'lightblue'

// Hides and unhides a List on the page.
{/* <body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
    <button id="toggleList">Hide list</button>
    <div class="list">
      <p class="description">Things that are purple:</p>
      <input type="text" class="description">
      <button class="description">Change list description</button>
      <ul>
        <li>grapes</li>
        <li>amethyst</li>
        <li>lavender</li>
        <li>plums</li>
      </ul>
    </div>
    <script src="app.js"></script>
  </body> */}

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
});

//Line 316-320 Multiple CONST variables that select specific ELEMENTS

//Line 322 Event listener added to the Id 'toggleList' listening for a CLICK
//Line 323-330 IF statement. 
//Line 323 IF 'listDiv' DISPLAY PROERTY IS 'none' (It's hidden) IF THIS IS TRUE THAT IT IS HIDDEN go to line 324. IF FALSE go to line 326
//Line 324 IF line 323 is TRUE enter the code block and change the textContent of the 'toggleList' to say the string "Hide list"
//Line 325 and change the syle.display to 'block' which makes it appear when you click the addEventListener on line 322.
//Line 326 ELSE
//Line 327 So if it is NOT HIDDEN (it's displayed) then when you click the button it should show 'Show list' and then hide the list.

//Line 332-334 Another EVENT LISTENER that responds to a click event. When you click the button the HTML is changed to the value of whatever the user typed into the input box.




//----------Creating New DOM Elements----------//

document.createElement('div')
//You can create a new element in JavaScript with document.createElement and passing in the name of the HTML element you wanna create as a string.

//This code shows a list of fruits and some buttons like 'change list description' and 'hide list' You can show and hide the list with this code. Eventually this code will be able to add items typed into the input box 
// <body>
//     <h1 id="myHeading">JavaScript and the DOM</h1>
//     <p>Making a web page interactive</p>
//     <button id="toggleList">Hide list</button>
//     <div class="list">
//       <p class="description">Things that are purple:</p>
//       <input type="text" class="description">
//       <button class="description">Change list description</button>
//       <ul>
//         <li>grapes</li>
//         <li>amethyst</li>
//         <li>lavender</li>
//         <li>plums</li>
//       </ul>
//       <input type="text" class="addItemInput">
//       <button class="addItemButton">Add Item</button>
//     </div>
//     <script src="app.js"></script>
//   </body>

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
});

addItemButton.addEventListener('click', () => {
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
});


//----------Appending Nodes----------//

//In the previous video, you learned how to create elements with JavaScript. But the elements won't appear on the page until you add them to the DOM.
//Remember earlier when we talked about the DOM being a tree like structure with nodes and branches.
//Well that tree is what we'll use to place our new element or DOMNode, we'll do that by selecting an existing node, and then appending or adding our new node as a child.
//Appending a node to the DOM's done with the appendChild method. 
//We can call appendChild on the parent element.
//We select and pass in our new childElement as an argument.

//Nodes belong to the DOM, while elements are plain HTML.

Node.appendChild(childElement)

// <body>
//     <h1 id="myHeading">JavaScript and the DOM</h1>
//     <p>Making a web page interactive</p>
//     <button id="toggleList">Hide list</button>
//     <div class="list">
//       <p class="description">Things that are purple:</p>
//       <input type="text" class="description">
//       <button class="description">Change list description</button>
//       <ul>
//         <li>grapes</li>
//         <li>amethyst</li>
//         <li>lavender</li>
//         <li>plums</li>
//       </ul>
//       <input type="text" class="addItemInput">
//       <button class="addItemButton">Add item</button>      
//     </div>
//     <script src="app.js"></script>
//   </body>

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

toggleList.addEventListener('click', () => {
  if (listDiv.style.displaystyle.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});

//Line 461 the click event listener 
//Line 462 LOCAL VAR 'let ul' = the first '<ul>'


//----------Removing Nodes----------//

Node.removeChild(childElement)

//We need to remove the node holding that photo,we can do this with the removeChild() method.
//Just like appendChild, removeChild takes a child element as an argument,though in this case it's the element you want to remove from the parent.


{/* <body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
    <button id="toggleList">Hide list</button>
    <div class="list">
      <p class="description">Things that are purple:</p>
      <input type="text" class="description">
      <button class="description">Change list description</button>
      <ul>
        <li>grapes</li>
        <li>amethyst</li>
        <li>lavender</li>
        <li>plums</li>
      </ul>
      <input type="text" class="addItemInput">
      <button class="addItemButton">Add item</button>
      <button class="removeItemButton">Remove last item</button>
    </div>
    <script src="app.js"></script>
  </body> */}


const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});
  
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});  
  
//Line 503 GLOBAL CONST 'toggleList' selects the ID 'toggleList' from the document. This element is a button that has the words 'Hide list' on it. This button when selected hides the entire list
//Line 504 GLOBAL CONST 'listDiv' selects the CLASS '.list' This is part of a DIV. Inside this '.list' DIV is the whole list.
//Line 505 GLOBAL CONST 'descriptionInput' selects the INPUT that has the class '.description' in it on line 487
//Line 506 GLOBAL CONST 'descriptionP' selects the '<p>' with a CLASS '.description'
//Line 507 GLOBAL CONST 'descriptionButton' selects the '<button>' with a CLASS '.description'
//Line 508 GLOBAL CONST 'addItemInput' selects the 'input' with the CLASS '.addItemInput'
//Line 509 GLOBAL CONST 'addItemButton selects the 'button' with the CLASS '.addItemButton'
//Line 510 GLOBAL CONST 'removeItemButton' selects the 'button' with the CLASS '.removeItemButton'

//Line 512 GLOBAL CONST 'toggleList' from Line 503 has a EVENT LISTENER on the button that says 'Hide list' on it. When you click on it, you enter the FUNCTION.
//Line 513-515 IF the 'style.display' for the 'toggleList' IS EQUAL TO 'none' so it's not showing the list. Then when you click the click handler on line 512 it changes the word on the button to 'Hide list' and it changes the 'style.display' from 'none to 'block' which shows the list.
//Line 516 ELSE
//Line 517 When you check 'style.display' and the list is showing and then the click handler is clicked then change so the list is hidden and change the button to say 'Show list'

//Line 522 GLOBAL CONST 'descriptionButton' has a click event listner on it. When it's clicked we go to line 523
//Line 523 changes the innerHTML on GLOBAL CONST 'descriptionP' which is the element <p class="description">Things that are purple:</p> to out put the 'input' from 'descriptionInput' which changes the name of the list to whatever you type into the 'input'.
//Line 524 descriptionInput.value = ''; takes the 'input' box that you type into and removes the words so the box is clear after you select it.

//Line 527 GLOBAL CONST 'addItemButton' has a click event listner
//Line 528-533 Add items to the list
//Line 535-539 Delete last <li> tag





//**********RESPONDING TO USER INTERACTION**********//

//----------FUNCTIONS AS PARAMETERS----------//

//FUNCTIONS are first class citizens in JS. This means that functions can be treated like any other data type such as a number, a string or an object.
//For example you can pass a function as an argument into another function. The same way you might pass in a number or string.


//The 3 below code selections all do the same thing
function say (something) {
    console.log(something);
}

function exec(func, arg){
    func(arg);
}

exec(say, 'Hi, there');
//Line 576-578 FUNCTION 'say' with PARAMETER 'something'. console.log the ARGUMENT 'something'

//Line 580-582 FUNCTION 'exec' with PARAMETERS 'func', 'arg'. The 'func' is looking for a FUNCTION and 'arg' is looking for an ARGUMENT. Once 'exec' is called it runs the statement inside which evaluates to `say('Hi there');

function exec(func, arg){
    func(arg);
}

exec(function say (something) {
    console.log(something);
}, 'Hi, there');



function exec(func, arg){
  func(arg);
}

exec((something) => {
  console.log(something);
}, 'Hi, there');






//CALL BACK FUNCTION - when you pass a FUNCTION into antoher FUNCTION but you want to delay when the FUNCTION is ran.

window.setTimeout((something) => {
  console.log(something);
}, 3000, 'Greetings, everyone!');
//Line 614-616 setTimeout is measured in seconds and determines when the CALL BACK FUNCTION fires. In this case the code console.logs 'Greetings, everyone' in the console after 3 seconds.




//----------LISTENING FOR EVENTS WITH addEventListener()---------//

{/* <body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
    <button id="toggleList">Hide list</button>
    <div class="list">
      <p class="description">Things that are purple:</p>
      <input type="text" class="description">
      <button class="description">Change list description</button>
      <ul>
        <li>grapes</li>
        <li>amethyst</li>
        <li>lavender</li>
        <li>plums</li>
      </ul>
      <input type="text" class="addItemInput">
      <button class="addItemButton">Add item</button>
      <button class="removeItemButton">Remove last item</button>
    </div>
    <script src="app.js"></script>
  </body> */}

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');


for(let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('mouseover', () => {
    listItems[i].textContent = listItems[i].textContent.toUpperCase();
  });

  listItems[i].addEventListener('mouseout', () => {
    listItems[i].textContent = listItems[i].textContent.toLowerCase();
  });
}

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});
  
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});
//Line 656 FOR LOOPS
//Line 657 take element 'listItems' with [i] being the different <li> tag it's cycling through. An adventListener is added to mouse over
//Line 658 Take the list item and change the textContent to UPPERCASE

//Line 661-664 Same as above it just takes the list item and once you mouseout on the <li> item the textContent becomes LOWERCASE

//Only problem with above is if you remove a list item and then add it back, or add a new one period the UPPERCASE and LOWERCASE no longer work.




//----------EVENT BUBBLING AND DELEGATION----------//


const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');



  listDiv.addEventListener('mouseover', () => {
    listItems[i].textContent = listItems[i].textContent.toUpperCase();
  });
  listDiv.addEventListener('mouseout', () => {
    listItems[i].textContent = listItems[i].textContent.toLowerCase();
  });


toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});
  
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});

//Due to event bubbling we have now changed Line 718 and 721 to put the event listner on the listDiv class instead of the <li> tabgs. That way when  a new <li> tag is added it will also have the functionality of changing to UPPERCASE and then LOWERCASE



//----------THE EVENT OBJECT----------//


//In the last video you learn how events bubble up the DOM tree. For example clicking a list item also triggers a click event on the UL element containing the list item.
//This is useful because we can add an event listener to a parent element and let it handle events on its children.
//For example, an event listener on an unordered list can handle the click event for any of its children list items, even if there are hundreds of list items.
//But how does the parent know which child triggered the event?
//Well, when an event handler is called it receives an event object as its first argument.
//This object has some useful information about the event as well as a few methods we can use to help us handle the event inside the handler.

EventTarget.addEventListener('click', (event) {
  // event is an object with info and methods
});

//Now the property you'll probably use most often is target which is a reference to the element that first received the event.
//For example, if you click on a list item, target would contain a reference to that list item.

document.addEventListener('click', (event) => {
  console.log(event.target);
});

event.target();

//Line 777-779 Takes any element in the DOCUMENT and adds an event listener to it when clicked. Then console.log the 'event.target'

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

listDiv.addEventListener('mouseover', (event) => {
  if (event.target.tagName == 'LI') {
    event.target.textContent = event.target.textContent.toUpperCase();
  }
});
listDiv.addEventListener('mouseout', (event) => {
  if (event.target.tagName == 'LI') {
    event.target.textContent = event.target.textContent.toLowerCase();
    }
});


toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});
  
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});

//Line 792-796 Event listener on 'listDiv' that on mouseover make the list items UPPERCASE.
//Line 799-803 Event listener on 'listDiv' that on mouseout makes the list items LOWERCASE.



//**********TRAVERSING THE DOM**********//

//----------USING parentNode TO TRAVERSE UP THE DOM----------//


//Traversal is similar to selection and that you're obtaining a reference to an element.
//So far, we've been starting at the top of the DOM tree, to select our elements using the document object.
//However, you'll often have times when you already have a reference to one element and you need to get ahold of another element nearby.
//This is called DOM Traversal.

//Traversal is just a way to move from one part of the DOM to another znd select an element based on its relationship to another element.
//For example, let's say, you wanna remove a paragraph from the DOM. You already learned how to remove elements from the DOM using removeChild. So you'll need to call removeChild on the paragraph's parent.
//But there's a problem, you don't have a reference to the parent ao you'll need to traverse to the parentNode.
//To get a reference to an element of parentNode, you can use the parentNode property.


// <!DOCTYPE html>
// <html>
//   <head>
//     <title>JavaScript and the DOM</title>
//     <link rel="stylesheet" href="css/style.css">
//   </head>
//   <body>
//     <h1 id="myHeading">JavaScript and the DOM</h1>
//     <p>Making a web page interactive</p>
//     <button id="toggleList">Hide list</button>
//     <div class="list">
//       <p class="description">Things that are purple:</p>
//       <input type="text" class="description">
//       <button class="description">Change list description</button>
//       <ul>
//         <li>grapes <button>Remove</button></li>
//         <li>amethyst <button>Remove</button></li>
//         <li>lavender <button>Remove</button></li>
//         <li>plums <button>Remove</button></li>
//       </ul>
//       <input type="text" class="addItemInput">
//       <button class="addItemButton">Add item</button>
//     </div>
//     <script src="app.js"></script>
//   </body>
// </html>

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
  }
});

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});




//----------USING previousElementSibling AND insertBefore----------//


{/* <body>
<h1 id="myHeading">JavaScript and the DOM</h1>
<p>Making a web page interactive</p>
<button id="toggleList">Hide list</button>
<div class="list">
  <p class="description">Things that are purple:</p>
  <input type="text" class="description">
  <button class="description">Change list description</button>
  <ul>
    <li>grapes 
      <button class="up">Up</button>          
      <button class="remove">Remove</button>
    </li>
    <li>amethyst 
      <button class="up">Up</button>          
      <button class="remove">Remove</button>
    </li>
    <li>lavender 
      <button class="up">Up</button>          
      <button class="remove">Remove</button>
    </li>
    <li>plums 
      <button class="up">Up</button>          
      <button class="remove">Remove</button>
    </li>
  </ul>
  <input type="text" class="addItemInput">
  <button class="addItemButton">Add item</button>
</div>
<script src="app.js"></script>
</body> */}

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }                        
  }
});

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});
//Line 970 Add an eventListener to the 'listUl' which targets the <ul> in CLASS '.list'. When you click on it. An 'event' ARGUMENT is passed to the FUNCTION.
//Line 971 IF 'event.target.tagName, so basically if the event targeting a 'BUTTON'
//Line 972 IF 'event.target.className' has the CLASS '.remove' then go to line 973
//Line 973 LOCAL LET 'li' is set to the event.targets 'parentNode'. In this case the <button> is the event.target so the '<li>' is the 'parentNode'
//Line 974 LOCAL LET 'ul' is set to the 'parentNode' of the 'let li' from line above. In this case that would target the parentNode of the '<li>' which is the '<ul>'
//Line 975 Remove the '<li>' ELEMENT




//----------USING nextElementSibling----------//

/*
<body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
    <button id="toggleList">Hide list</button>
    <div class="list">
      <p class="description">Things that are purple:</p>
      <input type="text" class="description">
      <button class="description">Change list description</button>
      <ul>
        <li>grapes 
          <button class="up">Up</button> 
          <button class="down">Down</button>          
          <button class="remove">Remove</button>
        </li>
        <li>amethyst 
          <button class="up">Up</button> 
          <button class="down">Down</button>          
          <button class="remove">Remove</button>
        </li>
        <li>lavender 
          <button class="up">Up</button> 
          <button class="down">Down</button>          
          <button class="remove">Remove</button>
        </li>
        <li>plums 
          <button class="up">Up</button> 
          <button class="down">Down</button>          
          <button class="remove">Remove</button>
        </li>
      </ul>
      <input type="text" class="addItemInput">
      <button class="addItemButton">Add item</button>
    </div>
    <script src="app.js"></script>
  </body>
  */

 const toggleList = document.getElementById('toggleList');
 const listDiv = document.querySelector('.list');
 const descriptionInput = document.querySelector('input.description');
 const descriptionP = document.querySelector('p.description');
 const descriptionButton = document.querySelector('button.description');
 const listUl = listDiv.querySelector('ul');
 const addItemInput = document.querySelector('input.addItemInput');
 const addItemButton = document.querySelector('button.addItemButton');
 
 listUl.addEventListener('click', (event) => {
   if (event.target.tagName == 'BUTTON') {
     if (event.target.className == 'remove') {
       let li = event.target.parentNode;
       let ul = li.parentNode;
       ul.removeChild(li);
     }
     if (event.target.className == 'up') {
       let li = event.target.parentNode;
       let prevLi = li.previousElementSibling;
       let ul = li.parentNode;
       if (prevLi) {
         ul.insertBefore(li, prevLi);
       }
     }  
     if (event.target.className == 'down') {
       let li = event.target.parentNode;
       let nextLi = li.nextElementSibling;
       let ul = li.parentNode;
       if (nextLi) {
         ul.insertBefore(nextLi, li);
       }
     } 
   }
 });
 
 toggleList.addEventListener('click', () => {
   if (listDiv.style.display == 'none') {
     toggleList.textContent = 'Hide list';
     listDiv.style.display = 'block';
   } else {
     toggleList.textContent = 'Show list';                        
     listDiv.style.display = 'none';
   }                         
 });
 
 descriptionButton.addEventListener('click', () => {
   descriptionP.innerHTML = descriptionInput.value + ':';
   descriptionInput.value = '';
 });
 
 addItemButton.addEventListener('click', () => {
   let ul = document.getElementsByTagName('ul')[0];
   let li = document.createElement('li');
   li.textContent = addItemInput.value;
   ul.appendChild(li);
   addItemInput.value = '';
 });
   
   
   
//----------GETTING ALL CHILDREN OF A NODE WITH CHILDREN----------//   

//CHILDREN will only return HTML elements

//Below script adds buttons dynamically through JavaScript to all <li> items including new ones that are created on the fly.


/*
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript and the DOM</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
    <button id="toggleList">Hide list</button>
    <div class="list">
      <p class="description">Things that are purple:</p>
      <input type="text" class="description">
      <button class="description">Change list description</button>
      <ul>
        <li>grapes</li>
        <li>amethyst</li>
        <li>lavender</li>
        <li>plums</li>
      </ul>
      <input type="text" class="addItemInput">
      <button class="addItemButton">Add item</button>
    </div>
    <script src="app.js"></script>
  </body>
</html>
*/

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUl.children;

function attachListItemButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);
  
  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);  
  
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

for (let i = 0; i < lis.length; i += 1) {
  attachListItemButtons(lis[i]);
}

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }  
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    } 
  }
});

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = '';
});
  
  
  
//----------GETTING THE FIRST AND LAST CHILD----------//   


ParentNode.firstElementChild
ParentNode.lastElementChild

/*
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript and the DOM</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
    <button id="toggleList">Hide list</button>
    <div class="list">
      <p class="description">Things that are purple:</p>
      <input type="text" class="description">
      <button class="description">Change list description</button>
      <ul>
        <li>grapes</li>
        <li>amethyst</li>
        <li>lavender</li>
        <li>plums</li>
      </ul>
      <input type="text" class="addItemInput">
      <button class="addItemButton">Add item</button>
    </div>
    <script src="app.js"></script>
  </body>
</html>
*/

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = 'lightskyblue';
lastListItem.style.backgroundColor = 'lightsteelblue';

function attachListItemButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);
  
  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);  
  
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

for (let i = 0; i < lis.length; i += 1) {
  attachListItemButtons(lis[i]);
}

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }  
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    } 
  }
});

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = '';
});
  
  
  

  