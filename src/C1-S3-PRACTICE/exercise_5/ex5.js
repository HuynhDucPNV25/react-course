let students = [
    { id: 1, name: "Trang", grade: "A" },
    { id: 2, name: "Hai", grade: "B" },
    { id: 3, name: "Linh", grade: "C" },
  ];
const updateStudentGrade= (studentsArray,idToUpdate,newGrade) => {
    studentsArray.forEach(student => {student.id === idToUpdate ? student.grade = newGrade : student});
    return studentsArray;
}  
console.log(updateStudentGrade(students,1,"D"));