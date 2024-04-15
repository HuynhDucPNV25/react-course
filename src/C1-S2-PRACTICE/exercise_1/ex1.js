const transformToObjects = (listOfNumbers) => listOfNumbers.map((item) =>({val:item}))
// test 1  -
console.log(JSON.stringify(transformToObjects([1, 2, 3])));