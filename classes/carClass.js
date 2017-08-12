// FYI ES6 classes still use
// prototypal inheritance
// even though they look more
// like a classical OOP class

// EXAMPLE WITHOUT INHERITENCE
// class Car {
//   constructor({ model }) {
//     this.model = model;
//   }
//
//   drive() {
//     console.log(`${this.model} go vroom`);
//   }
// }
//
// let Subaru = new Car({ model: 'Forester' });
// console.log('Subaru:', Subaru);
// Subaru.drive();

// EXAMPLE WITH INHERITENCE
class Car {
  constructor({ model }) {
    this.model = model;
  }

  drive() {
    console.log(`${this.model} go vroom`);
  }
}
class Subaru extends Car {
  constructor(options) {
    super(options); // completes inheritance from Car by calling the constructor method of Car from within Subaru and attached props
    this.color = options.color;
    this.model = options.model;
  }

  honk() {
    console.log(`${this.color} ${this.model} go honk`);
  }
}

let Forester = new Subaru({ model: 'Forester', color: 'blue' });
console.log('Forester:', Forester);
Forester.drive();
Forester.honk();
