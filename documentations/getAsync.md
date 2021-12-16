# Function getAsync
## Parameters:
- [REQUIRED] ```string``` : collection
    - The name of the collection in the database
- [default = empty object] ```object``` : criteria
    - Search criteria
- [default = false] ```boolean``` : all
    - if you want all the data

## Promises:
```js
const mongo = require('untitled_mongodb');

...
mongo.getAsync(schema[0].name)
  .then((data) => {...})
  .catch((error) => console.log(error));
```

## Async/await:
```js
const mongo = require('untitled_mongodb');

...
const data = await mongo.getAsync(schema[0].name);
...
```

### [Return to main menu](../README.md)
