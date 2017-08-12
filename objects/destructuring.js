let expense = {
  type: 'Business',
  amount: '$45 USD'
};

let { type, amount } = expense;

console.log('type:', type);
console.log('amount:', amount);

const fileSummary = ({ name, extension, size }, { color }) => {
  return `${color} The file ${name}.${extension} is of size ${size}`;
};

let fileSummaryObj = {
  name: 'index',
  extension: 'html',
  size: 42
};

let colorObj = {
  color: 'blue'
};

console.log('fileSummary:', fileSummary(fileSummaryObj, colorObj));

const Google = {
  locations: [ 'Mountain View', 'New York' ]
};

// first location from the locations prop of Google obj
const { locations: [ location ] } = Google;

console.log('location:', location);

const points = [
  [ 4, 5 ],
  [ 10, 1 ],
  [ 0, 40 ]
];

// takes the first and second index
// from the array arg and names them x then y
// then we used the simplified obj literal syntax
// to return an obj with x and y props with the
// correct vals from the argument array
let pointObjs = points.map(([ x, y ]) => {
  return { x, y };
});

console.log('pointObjs:', pointObjs);
// [ { x: 4, y: 5 }, { x: 10, y: 1 }, { x: 0, y: 40 } ]
