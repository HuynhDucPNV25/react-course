let students = [
    { id: 1, name: "Trang", grade: "A" },
    { id: 2, name: "Hai", grade: "B" },
    { id: 3, name: "Linh", grade: "C" },
  ];
function updateStudentGrade(studentsArray,idToUpdate,newGrade){
    const index = studentsArray.findIndex(student => student.id === idToUpdate);
    studentsArray[index].grade = newGrade;
    return studentsArray;
    // studentsArray.forEach(student => {
    //     student.id === idToUpdate ? student.grade = newGrade : ""
    // });
    // return studentsArray;
}  
console.log(updateStudentGrade(students,1,"D"));