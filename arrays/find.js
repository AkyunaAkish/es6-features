const users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
];

const user = users.find((user) => {
  return user.name === 'Alex';
});

console.log('user', user);
