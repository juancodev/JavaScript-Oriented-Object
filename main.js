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

// Prototype Class

class StudentOfCourse {
  constructor(name, age, career) {
    this.name = name;
    this.age = age;
    this.career = career;
    this.course = [];
  }

  approvedCourse(newCourse) {
    this.course.push(newCourse);
  }
}

const juan = new StudentOfCourse("Juan", 24, "Software Engineer");
const cynthia = new StudentOfCourse("Cynthia", 24, "Marketer");

// class with one params

class StudentOfCourseOneParams {
  constructor({
    name,
    age,
    career,
    email,
    course = [],
  }) {
    this.name = name;
    this.age = age;
    this.career = career;
    this.email = email;
    this.course = course;
  }

  approvedCourse(newCourse) {
    this.course.push(newCourse);
  }
}

const juanOneParams = new StudentOfCourseOneParams({
  name: "Juan",
  age: 24,
  career: "Software Engineer",
  email: "montillasanchezjuancarlos@gmail.com"
})