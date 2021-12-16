# Function addAsync
## Parameters:
- [REQUIRED] ```string``` : collection
    - The name of the collection in the database
- [default = empty object] ```object``` : criteria
    - Search criteria
- [default = false] ```boolean``` : replace
    - if you want to replace the data found

## Promises:
```js
const mongo = require('untitled_mongodb');

...
mongo.addAsync(schema[0].name)
  .then((data) => {...})
  .catch((error) => console.log(error));
```

## Async/await:
```js
const mongo = require('untitled_mongodb');

...
const data = await mongo.addAsync(schema[0].name);
...
```

### [Return to main menu](../README.md)