# butwhy: Some things about JavaScript I think are weird, in library form
Most of the stuff in here doesn't serve any practical purpose.  

## API

### Functions

#### decouple(a, ...p)
Copy an object and, if a property is a `Function`, bind it to the result.  
```js
const { map, concat } = decouple([0], 'map', 'concat', 'unshift');
map(i => i + 1) // -> [1]
```

