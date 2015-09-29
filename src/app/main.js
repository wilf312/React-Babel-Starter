'use strict';


var Square = require('./Square');



for (var i = 0; i < 10; i++) {
  console.log('inside ' + i);
}

console.log('outside ' + i);


function doStuff(person) {
  var { name, age, job } = person;

  console.log(name + '(' + age + ') works as a ' + job);
}

doStuff({
  name:'Jason',
  job: 'Developer',
  age: 31
})

function callback(response){
  var [status, body] = response;
}
