// the => function maintains the
// parent context of the 'this' keyword
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 2));

// alternative with implicit return(no curly braces)
// const add = (a, b) => a + b;
//
// console.log(add(2, 2));

// can omit parens with 1 argument
const double = num => num * 2;

console.log(double(6));
