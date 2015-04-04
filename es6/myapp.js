require('source-map-support').install();

console.log([1,2,3].map(x => x * x));

throw new Error('Test!');
