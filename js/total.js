
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


const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}


const browserType = "mozilla";

if (browserType.endsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}


class Account{
     
    private int id;
    private int sum;
     
    Account(int id, int sum){
        this.id = id;
        this.sum = sum;
    }
     
    public int getId() { return id; }
    public int getSum() { return sum; }
    public void setSum(int sum) { this.sum = sum; }
}



  public class Program{
      
    public static void main(String[] args) {
          
        Account acc1 = new Account(2334, 5000); // id - число
        int acc1Id = (int)acc1.getId();
        System.out.println(acc1Id);
         
        Account acc2 = new Account("sid5523", 5000);    // id - строка
        System.out.println(acc2.getId());
    }
}
class Account{
     
    private Object id;
    private int sum;
     
    Account(Object id, int sum){
        this.id = id;
        this.sum = sum;
    }
     
    public Object getId() { return id; }
    public int getSum() { return sum; }
    public void setSum(int sum) { this.sum = sum; }
}

  const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

  const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
