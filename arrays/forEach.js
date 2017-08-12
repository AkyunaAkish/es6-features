const colors = [ 'red', 'blue', 'green' ];

colors.forEach((color) => {
  console.log('color:', color);
});

const numbers = [ 2, 4, 8 ];
let sum = 0;

numbers.forEach((number) => {
  sum += number;
});

console.log('sum:', sum);

// alternative syntax to summing technique above
// const numbers = [ 2, 4, 8 ];
// let sum = 0;
//
// function adder(num) {
//   sum += num;
// }
// 
// numbers.forEach(adder);
//
// console.log('sum:', sum);
