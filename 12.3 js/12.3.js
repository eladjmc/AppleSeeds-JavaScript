const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};

// 1. A method called “findPerson” takes two arguments, a type
// (either a student or teacher), and an id. It will return a
// particular object of that person.

const findPerson = (type, id) =>
  school[type] != undefined
    ? school[type].filter((person) => person.id === id)[0]
    : undefined;
console.log(findPerson("teachers", 1));

// 2. A method called “assignStudent” that takes two
// arguments, a student’s id and a subject. Assign all of the
// students to the first available teacher who teaches that
// subject and who is not in full capacity. If all of the teachers
// are in the full capacity log to the console “Sorry, no
// available teachers left”.
const assignStudent = (studentId, subject) => {
  const student = findPerson("students", studentId);
  if (!student) {
    return "No such student in database";
  }
  const availableTeacher = school.teachers.filter((teacher) => {
    return teacher.subjects.includes(subject) && teacher.capacityLeft > 0;
  })[0];
  if (!availableTeacher) {
    return "Sorry, no available teachers left";
  }
  availableTeacher.students.push(student);
  return `The student: ${student.name} had been assign to dr. ${availableTeacher.name}  ${subject} class`;
};
console.log(assignStudent(13, "chemistry"));

// 3. A method called “assignTeachersSubject” that takes two
// arguments, the teacher’s id, and a new subject. Assign the
// new subject to that particular teacher if that subject
// doesn’t exist in their array of subjects.
const assignTeachersSubject = (teacherId, newSubject) => {
  const teacher = school.teachers.filter(
    (teacher) =>
      teacher.id === teacherId && !teacher.subjects.includes(newSubject)
  )[0];
  if (!teacher) {
    return "Error - teacher does not exist or already teaching this class";
  }
  teacher.subjects.push(newSubject);
  return `dr.${teacher.name} had been assign to teach ${newSubject} class`;
};
console.log(assignTeachersSubject(1, "pikachu"));

// 4. Create a new method for anything you want.

const getOldestStudent = () => school.students.filter((student) => student.age === school.students.reduce((acc, cur) => acc < cur.age ? cur.age : acc , 0))[0];
console.log(getOldestStudent());
