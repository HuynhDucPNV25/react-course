// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { lastName:"Bình",firstName: "An", age: 20 },
  { lastName:"Hòa",firstName: "Bình", age: 22 },
  { lastName:"Ngọc",firstName: "Cẩm", age: 21 },
  { lastName:"Hoài",firstName: "An", age: 19 }, // Duplicate first name !
];

/**
 * Update 1 student age, given his/her first name
 * @param {string} firstName - the student first name
 * @param {age} newAge  - the student new age
 */
function updateStudentAge(lastName,firstName,oldAge,newAge) {

  let student = STUDENTS_DATA.find((s) => s.lastName === lastName && s.firstName === firstName && s.age=== oldAge);
  if (student) {
    student.age = newAge;
  }
}

// 1 - Update An age to 30
updateStudentAge("Bình","An", 20,30);

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA));