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

const squareNumbers5 = (arr) =>  arr.map(number => number * number);
function squareNumbers6(arr) {
    return arr.map(number => number * number);
}

const sumArray7 = (arr) => arr.reduce((total, num) => total + num);
function sumArray8 (arr) {
    return arr.reduce((total, num) => total + num);
}

console.log(filterEvenNumbers1(words));
console.log(filterEvenNumbers3(words));
console.log(squareNumbers5(numbers));
console.log(sumArray7(numbers));