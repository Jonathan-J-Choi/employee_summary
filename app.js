const inquirer = require("inquirer");
const employees = require("./employees");
const fs = require("fs");

let testEmployee= new employees.Manager("Gary", "001", "GaryTAlmes@Gmail.com", "666");

// Storing Manager info
let manager;

// Storing Engineer(s) info
let engineerArray = [];
// Count starts at zero and will be updated as more are added
let engineerCount = 0;

// Storing Intern(s) info
let internArray =[];
// Count starts at zero and will be updated as more are added
let internCount = 0;

// Manager confirmation on startup
const startupQuestion = [
  {
    type:"confirm",
    name: "boss",
    message: "Are you ready to build your team for this project?"
  }
];

// Manager Information
const managerInfo = [
  // Manager's name
  {
    type: "input",
    message: "Please enter your name.",
    name: "name"
  },
  // Manager's ID number
  {
    type: "input",
    message: "Please enter your ID number.",
    name: "id"
  },
  // Manager's e-mail address
  {
    type:"input",
    message: "Please enter your e-mail address.",
    name: "email"
  },
  // Manager's office number
  {
    type: "input",
    message: "What is your office number?",
    name: "office"
  },
  // Manager's choice of adding other members on project
  {
    type:"list",
    message: "Please choose who to add to your team.",
    choices: ["Engineer", "Intern"],
    name: "addEmployee"
  }
];

// Engineer Information
const engineerInfo = [
  // Engineer's Name
  {
    type: "input",
    message: "Please enter the engineer's name.",
    name: "name"
  },
  // Engineer's ID number
  {
    type: "input",
    message: "Please enter the engineer's ID number.",
    name: "id"
  },
  // Engineer's e-mail address
  {
    type: "input",
    message: "Please enter the engineer's e-mail address.",
    name: "email"
  },
  // Engineer's GitHub username
  {
    type: "input",
    message: "Please enter the engineer's GitHub username.",
    name: "gitHub"
  },
  // Manager choice to add another engineer or intern
  {
    type: "list",
    message: "Please choose who else to add to your team.",
    choices: ["Engineer", "Intern", "Nobody else to add"],
    name: "addEmployee"
  }
];

// Intern Information
const internInfo = [
  // Intern's name
  {
    type: "input",
    message: "Please enter intern's name.",
    name: "name"
  },
  // Intern's ID number
  {
    type: "input",
    message: "Please enter intern's ID number.",
    name: "id"
  },
  // Intern's e-mail address
  {
    type: "input",
    message: "Please enter intern's e-mail address.",
    name: "email"
  },
  // Intern's school
  {
    type: "input",
    message: "Please enter intern's school.",
    name: "school"
  },
  // Manager choice to add another engineer or intern
  {
    type: "list",
    message: "Please choose who else to add to your team.",
    choices: ["Engineer", "Intern", "Nobody else to add"],
    name: "addEmployee"
  }
];

