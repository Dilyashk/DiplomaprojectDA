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
