'use strict';
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.clacAge = function(){
  //     console.log(2037-this.birthYear);
  // }
};
const jonas = new Person('Jonas', 1991);
console.log(jonas);

// Behind the sceen
// 1. New empty object {} is created
// 2. function is called and this key will be created for the new empty object --> this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

const jay = 'Jay';
console.log(jonas instanceof Person); // true
console.log(jay instanceof Person); // false

// Static method in constructor function
Person.hey = function () {
  console.log('Hey there');
  console.log(this);
};

Person.hey();
//jonas.hey(); // Uncaught TypeError: jonas.hey is not a function
// hey is not in the prototype of jonas object

*/
///////////////////////////////////////////////////////////////////////////////////

/*
// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // true
// Person.prototype = prototype properties of Person constructor function

console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(matilda)); //true
console.log(Person.prototype.isPrototypeOf(jack)); //true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// IMPORTANT --- Person.prototype is NOT the prototype of Person
// this is more like --- .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName')); //true
console.log(jonas.hasOwnProperty('birthYear')); //true
console.log(jonas.hasOwnProperty('species')); //false

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__); // ---> Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__.__proto__); // null

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor); // to take a look at the function

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);

// not a good idea to do this
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir(x => x + 1);

*/

/*
// Coding Challenge 1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km`);
};

console.log(car1);

console.log(car2);

car1.accelerate();
car1.accelerate();
car1.accelerate();

car1.brake();
car1.brake();
car1.brake();

car2.accelerate();
car2.brake();

*/
/*

// Class expression
//const PersonCl = class {};

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods
  // Method will be added to .prototype property of the PersonCl class
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exist
  set fullName(name) {
    console.log(name);
    // fullName here is already defined as a property of class PersonCl
    if (name.includes(' ')) this._fullName = name;
    // so i use _ (convention) to set a new variable.
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    // by doing this, jessica.fullName will now return her full name without _
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age); // I DO NOT CALL with ()

console.log(jessica.__proto__ === PersonCl.prototype); // true

// manually adding a function to the prototype
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted (which means I can use before they are declared in the code)
// 2. Classes are first-class citizens (which means I can pass them into function and also return them from function)
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey(); // calling static method and it would not work for instances of PersonCl


// Setters and Getters

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // with get, I should use it like a property when I call it. not function

account.latest = 50; // with set, I should use it like defining a property value not calling function
// NO ---> account.latest(50)   <---NO
console.log(account.movements);

*/

/*
// Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

*/

/*
// Coding Challenge 2

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//   }
//   get speedUS() {
//     return (this.speed = this.speed / 1.6);
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();

// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford);

ford.accelerate();
ford.brake();

*/

/*
// Inheritance Between Classes : Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes (have to be at this point before adding any more method like introduce)
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);

mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); //true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

*/

/*
// Coding Challenge 3

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};
const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
// when there are two methods or properties with the same name in a prototype chain, JS uses the first one that appreats in the chain

*/

/*
// Inheritance Between Classes : ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // super Always needs to happen first! then additional property of child object
    super(fullName, birthYear); // parent's constructor properties
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    // this first appears in the prototype chain. so this get used first than the one in PersonCl
    console.log(
      `I'm${
        2037 - this.birthYear
      } Years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer science');

// if I do not need any new properties, then I don't need to write a constructor method in the child class
class StudentCl2 extends PersonCl {}

const martha2 = new StudentCl2('Martha Jones', 2012);
console.log(martha2);

martha.introduce();
martha.calcAge();

*/

/*
// Inheritance Between Classes : Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

*/

/*
// Encalsulation : Protected Proterties and Methods
// Encapsulation : Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances) no longer on prototypes
  locale = navigator.language;

  // 2) Private fields (instances) no longer on prototypes
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected Property
    this.#pin = pin;
    //this._movements = [];
    //this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // 3) Public methods
  // Public Interface (API)
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    //if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }
  // 4) Private methods (no longer on prototypes )
  //#approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

//console.log(acc1.pin);

//console.log(acc1.#movements); // Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class
// I can not now access this property outside of class
//console.log(acc1.#pin);
//console.log(acc1.#approveLoan(100));

// Chaning Methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// to make these chainable, simply add 'return this' at the end of the methods
console.log(acc1.getMovements());

*/

// Coding Challenge 4

class Carcl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }
}

class EVCl extends Carcl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed -= 20;
    this.#charge -= 1;
    console.log(
      `${this.make}is going at ${this.speed}km/h, with ${this.#charge}%`
    );
    return this;
  }
}

const car1 = new EVCl('Rivian', 120, 23);
console.log(car1);

car1.accelerate().chargeBattery(100).brake();
console.log(car1);
