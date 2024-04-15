const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const numbers = [1,2,3,4,5];

const filterEvenNumbers1 = (arr) => arr.filter(word => word.length > 6);
function filterEvenNumbers2(arr){
    return arr.filter(word => word.length > 6);
}

const filterEvenNumbers3 = (arr) => arr.map(word => word.length > 6 ? word : null).filter(word => word !== null);
function filterEvenNumbers4(arr){
    return arr.map(word => word.length > 6 ? word : null).filter(word => word !== null);
}

const squareNumbers = (arr) =>  arr.map(number => number * number);
function squareNumbers(arr) {
    return arr.map(number => number * number);
}

const sumArray = (arr) => arr.reduce((total, num) => total + num);
function sumArray (arr) {
    return arr.reduce((total, num) => total + num);
}

console.log(filterEvenNumbers5(words));
console.log(filterEvenNumbers2(words));
console.log(squareNumbers(numbers));
console.log(sumArray(numbers));