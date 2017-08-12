// Generators can be used to iterate
// over an object in a complex way
// such as only pulling off certain
// properties for each iteration
// of the for of loop

// simple version 
// const testingTeam = {
//   size: 3,
//   department: 'Testing',
//   lead: 'Brian',
//   manager: 'Joe',
//   tester: 'Ben'
// };
//
// const engineeringTeam = {
//   testingTeam,
//   size: 3,
//   department: 'Engineering',
//   lead: 'Jill',
//   manager: 'Alex',
//   engineer: 'Dave'
// };
//
//
// function* TeamIterator(team) {
//   yield team.lead;
//   yield team.manager;
//   yield team.engineer;
//   // generator delegation
//   // bring instance of generator into this generator
//   // then runs all yields within
//   // testingTeamGenerator and allows
//   // the for of loop to continue to loop
//   // over testingTeamGenerator yield statements
//   const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
//   yield* testingTeamGenerator;
// }
//
// function* TestingTeamIterator(team) {
//   yield team.lead;
//   yield team.manager;
//   yield team.tester;
// }
//
// for (let name of TeamIterator(engineeringTeam)) {
//   console.log('name:', name);
// }


// alternative syntax with simplified iterator
// const testingTeam = {
//   size: 3,
//   department: 'Testing',
//   lead: 'Brian',
//   manager: 'Joe',
//   tester: 'Ben',
//   [Symbol.iterator]: function* () {
//     yield this.lead;
//     yield this.manager;
//     yield this.tester;
//   }
// };
//
// const engineeringTeam = {
//   testingTeam,
//   size: 3,
//   department: 'Engineering',
//   lead: 'Jill',
//   manager: 'Alex',
//   engineer: 'Dave'
// };
//
//
// function* TeamIterator(team) {
//   yield team.lead;
//   yield team.manager;
//   yield team.engineer;
//   // if team.testingTeam
//   // has [Symbol.iterator]
//   // the for of loop will loop over the assigned generator for that [Symbol.iterator]
//   yield* team.testingTeam;
// }
//
// for (let name of TeamIterator(engineeringTeam)) {
//   console.log('name:', name);
// }


// another way to write it with complete use of Symbol.iterator
const testingTeam = {
  size: 3,
  department: 'Testing',
  lead: 'Brian',
  manager: 'Joe',
  tester: 'Ben',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

for (let name of engineeringTeam) {
  console.log('name:', name);
}
