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
    "JavaScript Basic",
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