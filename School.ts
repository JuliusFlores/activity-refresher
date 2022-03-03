import { Student } from "./Student";
import { StudentList } from "./StudentList";

const student1 = new Student(
    "2015-105867",
    "BSIT",
    "CCS",
    "Julius Flores",
    20,
    "MALE",
    "BINANGONAN RIZAL"
);

const student2 = new Student(
    "2015-105868",
    "BSIT",
    "CCS",
    "Jayphe Venadas",
    20,
    "MALE",
    "BINANGONAN RIZAL"
);

const student3 = new Student(
    "2015-105869",
    "BSIT",
    "CCS",
    "Roahn Vallega",
    20,
    "MALE",
    "TANAY RIZAL"
);

const student4 = new Student(
    "2015-105869",
    "BSIT",
    "CCS",
    "Ludwig Aralar",
    20,
    "MALE",
    "BINANGONAN RIZAL"
);

const student5 = new Student(
    "2015-105869",
    "BSIT",
    "CCS",
    "Roahn Vallega",
    20,
    "FEMALE",
    "CARDONA RIZAL"
);

const studentList = new StudentList([
    student1,
    student2,
    student3,
    student4,
    student5
]);

console.log(studentList.getStudents());
// console.log("*************");
// console.log(studentList.updateStudentName("2015-105869", "Michael Jordan"));
// console.log("*************");
console.log(studentList.updateAge("2015-105869", 25));
// console.log(studentList.checkStudentId("2015-105870"));
console.log(studentList.getStudents());