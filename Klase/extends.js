class Animal {
  constructor(name) {
    console.log("Klasa instancirana Animal");
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} se glasa.`);
  }
  
  fetch() {
    console.log(`${this.name} donesi loptu.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    console.log("Klasa instancirana Dog");
  }

  speak() {
    console.log(`${this.name} laje.`);
  }
}

let rex = new Dog('Rex');
rex.speak();
rex.fetch();