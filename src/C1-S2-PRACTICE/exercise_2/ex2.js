let originalArray = [1, 2, 3, 4, 5];


function updateArray(array, index, newValue) {
  array[index] = newValue;
  return array;
}


let updatedArray = updateArray(originalArray, 2, 10);


console.log("Original array:", originalArray); // original array should not be modified...
console.log("Updated array:", updatedArray);
