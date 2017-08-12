// creating tree data structure
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    // cannot use array helpers
    // only for of loops work
    // in generators
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('good comment', [new Comment('cool story bro', [new Comment('uncool story bro', [])])]),
  new Comment('bad comment', []),
  new Comment('meh', [])
];

const tree = new Comment('Great Post!', children);

const values = [];

for (let value of tree) {
  values.push(value);
}

// returns all nested content of comments
console.log('values:', values);
