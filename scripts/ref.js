// DOM STUFF


const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

function normalFunction(){
  alert('Normal Function');
}
const btnEvt = document.querySelector('#btnEvn');
btnEvt.addEventListener('click', () => {
  alert("This syntax is fucked");
});

btnLog.addEventListener('click', function (e) {
  console.log(e);
});

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

const eBtn = document.querySelector('#eBtn');

eBtn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

// Cretes element
const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

//Get refrence to the parent div that is already in the HTML
const wrapper = document.querySelector('#wrapper');

//Create a new element in JS, with the 'p', being the type of HTML element  <p>
const para = document.createElement('p');
const h3 = document.createElement('h2'); //Equals <h3>

//Add a CSS class to the new element, with para_class being the class name - .para_class
para.classList.add('para_class');

//Add text to the JS element, which will show up in HTML
para.textContent = 'Straight outta JavaScript';
h3.textContent = "I'm a H3 motherfucker!";

//Sticks (para) to the end of (wrapper), in HTML
wrapper.appendChild(para);
wrapper.appendChild(h3);

//Adds color - remember, CSS styles need to be exact!
para.style.color = 'Red';
h3.style.color = "Blue";


//Making a full div with stuff in it
const demoDiv = document.querySelector('#section');

const heading = document.createElement('h1');
const copy = document.createElement('p');

heading.textContent = "I'm a div motherfucker";
copy.textContent = "Me too bitch";

demoDiv.appendChild(heading);
demoDiv.appendChild(copy);

demoDiv.style.border = 'black 1px solid';
demoDiv.style.backgroundColor = 'Pink';

















// FizzBuzz
// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// for (let i = 1; i <= answer; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//       console.log("Fizz");
//     } else if (i % 5 == 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
  
  

/////////////////
// let num = 1;

// let add7 = (num) => num + 7;

// console.log(add7(num));

// let multiply = (num1, num2) => num1 * num2;
// console.log("multiply = ", multiply(2,20));

// let input = 'word';

// let capitalize = function(input) {
//     return input.charAt(0).toUpperCase() + input.slice(1);
// }

// let capitalizeArrow = (input) => input.charAt(0).toUpperCase() + input.slice(1);
// console.log(capitalize(input)); 

// console.log(capitalizeArrow(input)); 

// const letter = "Last Output"
// let lastLet = (letter) => (letter.charAt(letter.length - 1));
// console.log(lastLet(letter));
