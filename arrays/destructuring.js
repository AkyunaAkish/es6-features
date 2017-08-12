const companies = [
  'Google',
  'Facebook',
  'Netflix'
];

// the first item is now available as firstCompanyName
// the rest of the names
// are available as an array called rest
const [ firstCompanyName, ...rest ] = companies;

console.log('firstCompanyName:', firstCompanyName);
console.log('restOfCompanyNames:', rest);

const companyObjs = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Netflix', location: 'Los Gatos' }
];

// double destructuring
// first obj from companyObjs
// and the name prop off that first obj
const [ { name } ] = companyObjs;

console.log('firstCompanyName:', name);
