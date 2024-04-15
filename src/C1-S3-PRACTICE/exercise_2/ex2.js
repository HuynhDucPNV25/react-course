let originalArray = [1, 2, 3, 4, 5];

function updateArray1(array, index, newValue) {
    let newArr = array.slice();
    newArr[index] = newValue;
    return newArr;
}

function updateArray2(array, index, newValue) {
    let newArr = [...array];
    newArr[index] = newValue;
    return newArr;
}
function updateArray3(array, index, newValue) {
    let newArr = array.map((item, i) => {
        return i === index ? newValue : item;
    });
    return newArr;
}
let updatedArray = updateArray1(originalArray, 2, 10);

console.log("Original array:", originalArray); // original array should not be modified...
console.log("Updated array:", updatedArray);
