# Function modifyAsync
## Parameters:
- [REQUIRED] ```string``` : collection
  - The name of the collection in the database
- [default = false] ```boolean``` : throws
  - if you want it to throw an exception

## Throws:
```js
const mongo = require('untitled_mongodb');

...
try {
  mongo.isValidCollection(schema[0].name, true);
} catch (e) {
  console.log(e);
}
...
```

## Returns:
```js
const mongo = require('untitled_mongodb');

...
const isValid = mongo.isValidCollection(schema[0].name);
...
```

### [Return to main menu](../README.md)
