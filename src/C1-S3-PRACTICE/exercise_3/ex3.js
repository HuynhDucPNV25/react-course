function findAverage(arrNumber) {
    let sum = 0; 
    for (let index = 0; index < arrNumber.length; index++) {
        sum += arrNumber[index];
    }
    return sum / arrNumber.length;
}
function findAverage1(arrNumber) {
    const sum = arrNumber.reduce((total, num) => total + num);
    return sum / arrNumber.length;
}
console.log(findAverage([1,2,3]));