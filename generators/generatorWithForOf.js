function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

// can be called manually
// const gen = colors();
// gen.next(); // { value: "red", done: "true" }
// gen.next(); // { value: "blue", done: "true" }
// gen.next(); // { value: "green", done: "true" }
// gen.next(); // { done: "true" }

const myColors = [];
// or can be called with a for of loop
for (let color of colors()) {
   myColors.push(color);
}

console.log('myColors:', myColors);
