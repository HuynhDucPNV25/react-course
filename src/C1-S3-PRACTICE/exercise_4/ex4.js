const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const numbers = [1,2,3,4,5];
const filterEvenNumbers1 = (arr) => arr.filter(word => word.length > 6);
const filterEvenNumbers2 = (arr) => arr.map(word => word.length > 6 ? word : null).filter(word => word !== null);
const squareNumbers = (arr) =>  arr.map(number => number * number);
console.log(filterEvenNumbers1(words));
console.log(filterEvenNumbers2(words));
console.log(squareNumbers(numbers));