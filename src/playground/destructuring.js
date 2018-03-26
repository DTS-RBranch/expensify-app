//
//   Object destructuring
//

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Mason, OH',
//         temp: 41
//     }
// };

// const { name, age, sex='male' } = person;
// const { city, temp: temperature } = person.location;

// //const name = person.name;
// //const age = person.age;

// console.log(`${name} is ${age}.  They are ${sex}.`);
// console.log(`It's ${temperature} in ${city}.`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { title } = book;
// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(`The publisher of '${title}' is ${publisherName}.`)

//
//   Array destructuring
//

// let address = ['6364 Tarton Fields Lane', 'Mason', 'Ohio', '45040'];
// address = [];

// //const [ street, city, state, zip ] = address
// const [ , city, yourState = 'New York', zip ] = address

// console.log(`Your are in ${address[1]}, ${address[2]}`)
// console.log(`Your are in ${yourState}`)

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [ product, , medium,  ] = item;

console.log(`A Medium ${product} costs ${medium}`);