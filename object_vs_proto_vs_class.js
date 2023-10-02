// object literals
const student1 = {
  name: "Juan",
  username: "juancodev",
  points: 100,
  socialMedia: {
    twitter: "juancodev",
    instagram: "juancodev",
    facebook: undefined,
  },
  approvedCourses: [
    "JavaScript Basic",
    "JavaScript Medium",
  ],
  learningPaths: [{
    name: "Frontend Developer",
    courses: [
      "JavaScript Basic",
      "JavaScript Medium",
      "Responsive Design",
      "React.js",
    ]
  }]
}

// Class

// Course class

class Course {
  constructor({
    name,
    classes = [],
    module = [],
  }) {
    this.name = name;
    this.classes = classes;
    this.module = module;
  }
}

const courseFullStack = new Course({
  name: "Course FullStack",
  classes: [
    classOne,
  ],
  module: [
    moduleOne,
  ]
})

// Classes class

class Classes {
  constructor({
    name,
    title,
    description,
  }) {
    this.name = name;
    this.title = title;
    this.description = description;
  }
}

const classOne = new Classes({
  name: "Class 1",
  title: "What is JavaScript?",
  description: "JavaScript is a programming language that allows you to implement complex things on web pages."
})

// Module class

class Module {
  constructor({
    name,
    title,
  }) {
    this.name = name;
    this.title = title;
  }
}

const moduleOne = new Module({
  name: "Module 1",
  title: "First steps with JavaScript",
})

// create class of learning Paths

class LearningPaths {
  constructor({
    name,
    courses = []
  }) {
    this.name = name;
    this.courses = courses;
  }
}

// instances of class learningPaths

const webPath = new LearningPaths({
  name: "Frontend Developer",
  courses: [
    courseFullStack,
    "JavaScript Medium",
    "Responsive Design",
    "React.js",
  ]
})

// create class of Student Class

class StudentClass {
  constructor({
    name,
    username,
    points = 0,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.username = username;
    this.points = points;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    }
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

// instances of class studentClass

const student4 = new StudentClass({
  name: "Juan",
  username: "juancodev",
  points: 100,
  twitter: "juancodev",
  instagram: "juancodev",

  approvedCourses: [
    "JavaScript Basic",
    "JavaScript Medium",
  ],
  learningPaths: [
    webPath
  ]
})