let exampleSet = new Set([1,1,1,1,2,2,2,2]);
exampleSet.add(3)

let array = [...exampleSet,1,1,1,1];
let brandNewSet = new Set(array);
console.log(brandNewSet); //Set(3) { 1, 2, 3 } REMOVED DUPLICATES
let newArray = Array.from(brandNewSet);
let setCopy = new Set(exampleSet);
setCopy.add(4);
//console.log(array);