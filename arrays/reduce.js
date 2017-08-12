const numbers = [ 10, 20, 30 ];

let sum = numbers.reduce((summedVal, num) => {
  summedVal += num;
  return summedVal;
}, 0);

console.log('sum', sum);
