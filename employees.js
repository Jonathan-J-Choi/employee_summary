// Employees class
class Employees {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.title = "Employee";
    this.email = email;
  }

  // Function to return name of employee
  getName() {
    return this.name;
  }

  // Function to return ID number of employee
  getId() {
    return this.id;
  }

  // Function to return email of employee
  getEmail() {
    return this.email;
  }

  // Function to return title of employee
  getTitle() {
    return this.title;
  }
}

// Manager subclass
class Manager extends Employees {
  constructor(name, id, email, officeNumber) {
    // Super pulls from the employees class
    super(name, id, email);
    this.title = "Manager"
    this.officeNumber = officeNumber;
  }

  // Function to return office number
  getOfficeNumber() {
    return this.officeNumber;
  }
}

// Engineer subclass
class Engineer extends Employees {
  constructor(name, id, email, gitHub) {
    // Super pulls from the employees class
    super(name, id, email);
    this.title = "Engineer";
    this.gitHub = gitHub;
  }

  // Function to return GitHub username
  getGitHub() {
    return this.gitHub;
  }
}

// Intern subclass
class Intern extends Employees {
  constructor(name, id, email, school) {
    // Super pulls from the employees class
    super(name, id, email);
    this.title = "Intern";
    this.school = school;
  }

  // Function to return Intern's school
  getSchool() {
    return this.school;
  }
}

// Exporting classes
module.exports = { Employees, Manager, Engineer, Intern };