const sayings = new Map();

sayings.set('elephant', 'toot');
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');

console.log(sayings.size);
console.log(sayings.get('dog'));
console.log(sayings.has('cat'));

sayings.delete('dog');

console.log(sayings.size);
console.log(sayings.has('dog'));

sayings.set('elephant', 'park');

sayings.forEach((item, key) => console.log("key:",key,"item:", item));
