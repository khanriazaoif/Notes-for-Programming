# 1.2 Registering Names

* [The submit event - MDN](https://developer.mozilla.org/en-US/docs/Web/Events/submit)
* [Defining variables with let and const – Treehouse workshop](https://teamtreehouse.com/library/defining-variables-with-let-and-const)
* [Introducing Arrow Function Syntax – Treehouse workshop](https://teamtreehouse.com/library/introducing-arrow-function-syntax)
* [preventDefault() – MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

* You can submit a form in multiple ways. You can click the Submit button, but you can also just hit the Enter key, and that's the way I often do it.
* Now to capture both methods of submitting, we can set a handler on the form itself. You see forms have a special event called submit that we can listen for and a submit event will fire when the user either clicks Submit or hits Enter.
* Now to log the inputs value to the console, type `console.log` and `input.value`
* The page is reloading when the form is submitted. This is the normal behavior of a form when an HTML form is submitted, the browser sends the information to the URL specified by the action attribute and loads that URL as well, just like following a link.
	* So how can we prevent this from happening? Well the DOM event object can help us with the prevent default method. Prevent default cancels the default behavior associated with an event
	* So we can use this method `preventDefault()`on the event object in our submit handler.
* store the input value into a variable called text with `const text = input.value`

```html
<body>
  <div class="wrapper">
	<header>
	  <h1>RSVP</h1>
	  <p>A Treehouse App</p>
	  <form id="registrar">
		<input type="text" name="name" placeholder="Invite Someone">
		<button type="submit" name="submit" value="submit">Submit</button>
	  </form>
	</header>
		
	<div class="main">	
	  <h2>Invitees</h2>
	  <ul id="invitedList"></ul>	
	</div>
  </div>
  <script type="text/javascript" src="app.js"></script>
</body>
```

```js
const form = document.getElementById('registrar');
const input = form.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = '';
  const ul = document.getElementById('invitedList');
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
});
```
* 
## Code breakdown
```js
const form = document.getElementById('registrar');
const input = form.querySelector('input');
```
* `const form`selects the `id` `registrar` and stores in variable `form`
* `const input` takes the `form` variable from above  and selects the `input`element attached to `registrat`
	```html
		 <form id="registrar">
				<input type="text" name="name" placeholder="Invite 
		```
	* `input` selects the input above

```js
form.addEventListener('submit', (e) => {
```
* an event listener has been attached to the `form` form as a `submit` button which takes a click or enter on the keyboard. The *function* is passed the argument `e` which is for the *event*
```js
e.preventDefault();`
```
* Stops the default behavior of the browser to reload every time the submit handler is invoked.
```js
const text = input.value;
```
* local variable named `text` that stores the value from the `input` field
```js
input.value = '';
```
* Change the value of the input to blank so when you type in a name and push enter, it removes whatever name you typed in the input field and leave it blank.
```js
const ul = document.getElementById('invitedList');
```
* local variable `const ul` takes the `invitedList` *id* and stores in variable `ul`
	```html
		<div class="main">	
			  <h2>Invitees</h2>
			  <ul id="invitedList"></ul>	
			</div>
		```

```js
const li = document.createElement('li');
```
* local variable `const li` creates an `li` element
```js
li.textContent = text;
```
* variable `li` which was created above which creates an `li` list item has the text content replaced with the `text` input from the user.
```js
ul.appendChild(li);
```
* variable `ul` created above has the new `li` list item attached to the `ul`


This is below outputs.

![](Screen%20Shot%202018-06-06%20at%2010.28.34%20AM.png)

Below is what it looks like when I added two names

![](Screen%20Shot%202018-06-06%20at%2010.28.53%20AM.png)