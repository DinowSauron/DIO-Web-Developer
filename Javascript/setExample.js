
function uniqueValues(arr) {
  const mySet = new Set(arr);
  return [...mySet]
}

const newArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(uniqueValues(newArray))