// A generator is a function
// that can be entered and exited
// multiple times

// a generator can be ran, return a value
// partially through the function call
// then go back into the function and
// continue running as many times
// as needed

// the * makes a function a generator
function* shopping() {
  // stuff outside of store

  // walking down the sidewalk

  // go into the store with cash
  // the yield keyword
  // transitions the execution
  // from the generator to outside
  // of the generator yielding/returning
  // a result
  const stuffFromStore = yield 'cash';
  // the next gen.next('groceries') statement
  // brings us back to the yield section
  // sending a value back to the const variable stuffFromStore
  // and we can then continue the generator function

  // walking back home
  return stuffFromStore;
}
// stuff inside of store
const gen = shopping();
let a = gen.next(); // leaving house
let b = gen.next('groceries'); // leaving store
console.log('a:', a); // a: { value: 'cash', done: false }
console.log('b:', b); // b: { value: 'groceries', done: true }
