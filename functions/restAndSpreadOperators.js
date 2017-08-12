// REST OPERATOR

// changes any numbers of arguments
// into an array called numbers
const addNumbers = (...numbers) => {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
};

console.log('addNumbers:', addNumbers(1,2,3,4,5));

// SPREAD OPERATOR
let someColors = [ 'blue', 'green' ];
let finalColors = [
  ...someColors,
  'red', 'yellow'
];

console.log('finalColors:', finalColors);

let someObj = { name: 'Joe' };
let someOtherObj = { age: 21 };
let finalObj = { ...someObj, ...someOtherObj };

console.log('finalObj:', finalObj);
