const teclado = {
  value: 50,
}
const mause = {
  value: 35,
}


function mapWithThis(arr, thisArg){
  return arr.map(function(item) { // precisa ser function
    return item * this.value;
  }, thisArg);
}

const nums = [1, 2, 5];

console.log(mapWithThis(nums, teclado));
console.log(mapWithThis(nums, mause));


function reduceExample(arr) {
  return arr.reduce(function(prev,current) {
    return prev + current
  })
  //},0);   > valor inicial
}
console.log(reduceExample(nums));