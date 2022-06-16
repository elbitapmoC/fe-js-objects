const website = {
    name: 'Sojourner',
    ratings: 5,
    founder: ['Zel', 'elbitapmoC']
}
console.log(website.name);

// Editing Objects
website.name = 'Creed'
console.log(website.name);

// Adding objects (even if it doesn't exist)
website.foo = 'bar';
console.log(website.foo);
delete website.foo;

// comparing objects
console.log(({} === {})) // False

// Function Constructor
// Have to pass in the values inside the obj
function Website(name, rating, founder){
    this.name = name;
    this.rating = rating;
    this.founder = founder;
}

const zel = new Website('Ahkal', 5, ['Tashika', 'Ahkal']);
console.log(zel);
