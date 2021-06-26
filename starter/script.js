'use strict';

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
