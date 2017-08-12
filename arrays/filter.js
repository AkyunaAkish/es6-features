const products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'celery', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'orange', type: 'fruit' }
];

const fruits = products.filter((product) => {
  return product.type === 'fruit';
});

const vegetables = products.filter((product) => {
  return product.type === 'vegetable';
});

console.log('fruits', fruits);
console.log('vegetables', vegetables);
