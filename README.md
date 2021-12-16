# Untitled Mongo
## Initialization
Promises:
```js
const mongo = require('untitled_mongodb');
const schema = [
  {
    name: 'collection',
    model: new mongo.Schema({
      username: {type: String, required: true},
      password: {type: String, required: true},
      created_at: {type: Date, default: Date.now},
      updated_at: {type: Date, default: null},
    }),
  }
];
initialize('localhost', 'database', schema)
  .then((models) => {...})
  .catch((error) => console.log(error));
```

Async/await:
```js
const mongo = require('untitled_mongodb');
const schema = [
  {
    name: 'collection',
    model: new mongo.Schema({
      username: {type: String, required: true},
      password: {type: String, required: true},
      created_at: {type: Date, default: Date.now},
      updated_at: {type: Date, default: null},
    }),
  }
];

...
const models = await initialize('localhost', 'database', schema);
...
```

## Function Usages
- [getAsync](./documentations/getAsync.md)
- [addAsync](./documentations/addAsync.md)
- [modifyAsync](./documentations/modifyAsync.md)
- [deleteAsync](./documentations/deleteAsync.md)
- [isValidCollection](./documentations/isValidCollection.md)
