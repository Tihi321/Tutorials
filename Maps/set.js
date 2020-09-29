let noviSet = new Set();
noviSet.add(1);
noviSet.add('some text');
noviSet.add('foo');


console.log(noviSet.size);
console.log(noviSet.has(1));

noviSet.delete('foo');

console.log(noviSet.size);
console.log(noviSet);

noviSet.forEach(item => console.log(item));


// Primjer

const arrayPrijeSeta = [1,2,5,6,3,1,2,1];
const setIzArraya = new Set(arrayPrijeSeta);
setIzArraya.delete(5);
const sortanArray = [...setIzArraya].sort();
console.log(sortanArray);
