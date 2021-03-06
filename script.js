const website = {
name: 'Sojourner',
ratings: 5,
founder: ['Zel', 'elbitapmoC']
}
// console.log(website.name);

// Editing Objects
website.name = 'Creed'
// console.log(website.name);

// Adding objects (even if it doesn't exist)
website.foo = 'bar';
// console.log(website.foo);
delete website.foo;

// comparing objects
// console.log(({} === {})) // False

// Function Constructor
// Have to pass in the values inside the obj
function Website(name, rating, founder){
this.name = name;
this.rating = rating;
this.founder = founder;
}

const zel = new Website('Ahkal', 5, ['Tashika', 'Ahkal']);
console.log(zel);

// This is inheriting from the root object.
// console.log('toString' in website); // true;
// console.log(website.hasOwnProperty('toString')); // false
// hasOwnProperty, checks It's specific object.

// website.sayHello = () =>{
// console.log('Hi!');
// }


const web3 = {
  name: 'Sojourner',
  rating: 5,
  founder: ['Zel', 'elbitapmoC'],
  sayHello: () =>{
    console.log("hello");
  },
  sayGoodbye(){
    console.log('Byyeeee');
  },
  get getRating() {
    return this.rating;
  },
  set setRating(rate){
    this.rating= rate;
  }
};

// website.sayHello();
console.log(web3.getRating);
web3.setRating = 7;
console.log(web3.getRating);

const obj = {
  foo: 'bar',
  hello: 'world',
  [Symbol('id')]: 0,
  __proto__: web3,
}

console.log(obj);
console.log(obj.getRating);

// iterate over object
// Only shows keys specific to the object.
// Also does not show Symbols
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj)); // Both key & val together

for (const key in obj) {
  console.log(key);
}

const newMe = {
  original: 12345678,
}

// Doesn't copy over proto from obj.
Object.assign(newMe, obj);
console.log(newMe);

// Make object immutable.
// Freeze
Object.freeze(newMe);
newMe.original = 789;
console.log(newMe);
console.log(Object.isFrozen(newMe)); // T

// Seal
Object.seal(newMe);
console.log(Object.isSealed(newMe)); // T

finalObject = {
  final: 'Destination',
  distance: 'Mar 13:32'
};

console.log(finalObject. toString());
finalObject.toString = function(){
  return 'Later days, Last days.'
}
console.log(finalObject.toString());