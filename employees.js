// Employees class
class Employees{
  constructor(name, id, email){
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
  getId(){
    return this.id;
  }

  // Function to return email of employee
  getEmail(){
    return this.email;
  }

  // Function to return title of employee
  getTitle (){
    return this.title;
  }
}

// Manager subclass
class Manager extends Employees{
  constructor(name, id, email, officeNumber) {
  // Super pulls from the employees class
  super(name, id, email);
  this.title = "Manager"
  this.officeNumber = officeNumber;
  }

  // Function to return office number
  getOfficeNumber(){
    return this.officeNumber;
  }
}

// Engineer subclass
class Engineer extends Employee{
  constructor(name, id, email) {
    // Super pulls from the employees class
    super(name, id, email);
    this.github = github;
    this.title = "Engineer";
  }
  
  // Function to return GitHub username
  getGitHub(){
    return this.github;
  }
}

// Intern subclass
class Intern extends Employee{
  constructor(name, id, email){
  // Super pulls from the employees class
  super(name, id, email);
  this.school = school;
  }

  getSchool(){
    return this.school;
  }
}

module.exports = {Employee, Manager, Engineer, Intern} ;