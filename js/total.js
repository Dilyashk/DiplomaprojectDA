function Person() {
  // В конструкторе Person() `this` указывает на себя.
  this.age = 0;

  setInterval(function growUp() {
    // В нестрогом режиме, в функции growUp() `this` указывает
    // на глобальный объект, который отличается от `this`,
    // определяемом в конструкторе Person().
    this.age++;
  }, 1000);
}

var p = new Person();
function Person() {
  this.age = 0;

  var p = new Person();
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` указывает на объект Person
  }, 1000);
}

var p = new Person();
const o = { a: 0 };
get notifier() {
  delete this.notifier;
  return this.notifier = document.getElementById("bookmarked-notification-anchor");
},
Object.defineProperty(o, "b", {
  get: function () {
    return this.a + 1;
  },
});



  const firstName = 'Joffrey';
const greeting = 'Hello';

console.log(greeting + ', ' + firstName + '!');
// => Hello, Joffrey!

  const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;


let myNumber = "74";
myNumber = Number(myNumber) + 3;

const browserType = "mozilla";
browserType.length;

browserType[browserType.length - 1];
