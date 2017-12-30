// const person = {
//   name: 'Andrew',
//   age: 27,
//   location: {
//     city: 'Philadelphia',
//     temp: 40
//   }
// }

// // const name = person.name;
// // const age = person.age;

// const { name = 'Eli', age } = person;


// console.log(`${name} is ${age} years old`);

// const { city, temp: temperature } = person.location

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state] = address;

console.log(`You are in ${state}.`);

const item = ['coffee', '$2.00', '$2.50', '$3.00']

const [product, ,mediumPrice] = item;

console.log(`A medium ${product} costs ${mediumPrice}`);
