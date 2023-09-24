const objectLiteral = {
  name: 'Juan',
  age: 24,
  course: [
    "JavaScript",
    "PHP",
  ],

  // Method

  approvedCourse(newCourse) {
    this.course.push(newCourse); // this make reference to the objectLiteral
  }
}; // __proto__ -> Object.prototype -> null

objectLiteral.course.push("Python");

// prototype of Student

function Student(name, age, career) {
  this.name = name;
  this.age = age;
  this.career = career;

  this.course = [];

  // this.approvedCourse = function (newCourse) {
  //   this.course.push(newCourse);
  // }
}

Student.prototype.approvedCourse = function (newCourse) {
  this.course.push(newCourse);
}

const student1 = new Student("Juan", 24, "Software Engineer");
const student2 = new Student("Cynthia", 24, "Marketer");