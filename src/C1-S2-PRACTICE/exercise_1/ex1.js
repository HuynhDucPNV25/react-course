function transformToObjects(listOfNumbers) {
  console.log(listOfNumbers);
  let result = [];
  // Write your code here
  listOfNumbers.map((item)=>result.push({val:item}))
  console.log(result);
  result.map((item)=>{console.log(item.val);})
  return result;
} 
// test 1  -
console.log(JSON.stringify(transformToObjects([1, 2, 3]))); // Should  be     [{val: 1}, {val: 2}, {val: 3}]