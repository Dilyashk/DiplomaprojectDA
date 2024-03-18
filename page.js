@@ -24,6 +24,11 @@ function Person() {
  }, 1000);
}

  setInterval(() => {
    this.age++; // `this` указывает на объект Person
  }, 1000);
}

var p = new Person();
const o = { a: 0 };
get notifier() { 
