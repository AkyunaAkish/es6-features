const computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

let allComputersCanRunProgram = computers.every((computer) => {
  return computer.ram < 16;
});

let onlySomeComputersCanRunProgram = computers.some((computer) => {
  return computer.ram < 16;
});

console.log('allComputersCanRunProgram', allComputersCanRunProgram);
console.log('onlySomeComputersCanRunProgram', onlySomeComputersCanRunProgram);
