const inquirer = require("inquirer");
const employees = require("./employees");
const fs = require("fs");

// Storing Manager info
let manager;

// Storing Engineer(s) info
let engineerArray = [];

// Storing Intern(s) info
let internArray = [];

// Creating and printing manager information to team.txt
const printManager = () => {
  fs.appendFile('team.txt',"Team" + "\n=================================\n" + "Name: "+ manager.name + "\n" + "ID: " + manager.id + "\n" + "Title: " + manager.title + "\n" + "E-Mail: " + manager.email + "\n" + "Office Number: " + manager.officeNumber + "\n---------------------------------\n", function (err) {
    if (err) throw err;
  });
}

// Appending engineer information to team.txt
const printEngineer = () => {
  fs.appendFile('team.txt', "Name: "+ JSON.stringify(engineerArray[0].name) + "\n" + "ID: " + JSON.stringify(engineerArray[0].id) + "\n" + "Title: " + JSON.stringify(engineerArray[0]).title + "\n" + "E-Mail: " + JSON.stringify(engineerArray[0].email) + "\n" + "GitHub: " + JSON.stringify(engineerArray[0].gitHub) + "\n---------------------------------\n", 
  function (err) {
    if (err) throw err;
  });
}

// Appending intern information to team.txt
const printIntern = () => {
  fs.appendFile('team.txt', "Name: "+ JSON.stringify(internArray[0].name) + "\n" + "ID: " + JSON.stringify(internArray[0].id) + "\n" + "Title: " + JSON.stringify(internArray[0]).title + "\n" + "E-Mail: " + JSON.stringify(internArray[0].email) + "\n" + "School: " + JSON.stringify(internArray[0].school) + "\n---------------------------------\n", 
  function (err) {
    if (err) throw err;
  });
}

// Manager confirmation on startup
const startupQuestion = [
  {
    type: "confirm",
    name: "projectLead",
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
    type: "input",
    message: "Please enter your e-mail address.",
    name: "email"
  },
  // Manager's office number
  {
    type: "input",
    message: "What is your office number?",
    name: "officeNumber"
  },
  // Manager's choice of adding other members on project
  {
    type: "list",
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

// Function to start app
const startup = () => {
  inquirer.prompt(startupQuestion).then(resp => {
    if (resp.projectLead === true) {
      createManager();
    } else {
      console.log("You do not have permission to create a new project team.");
      return;
    }
  });
};

// Create manager function
const createManager = () => {
  inquirer.prompt(managerInfo).then(resp => {
    // Creating manager object based on user input
    manager = new employees.Manager(
      resp.name,
      resp.id,
      resp.email,
      resp.officeNumber
    );
    console.log(manager);
    console.log("Initiating project team assembly.");
    // Initiate function based on manager's choice of employee
    if (resp.addEmployee === "Engineer") {
      addEngineer();
      printManager();
    } else {
      addIntern();
      printManager();
    }
  });
};

// AddEngineer Function
const addEngineer = () => {
  inquirer.prompt(engineerInfo).then(resp => {
    // creating engineer object based on user input
    let engineer = new employees.Engineer(
      resp.name,
      resp.id,
      resp.email,
      resp.gitHub
    );
    // Adding engineer to array
    engineerArray.push(engineer);
    console.log(engineerArray);
    // Initiate function based on manager's choice of employee
    if (resp.addEmployee === "Engineer") {
      addEngineer();
    } else if (resp.addEmployee === "Intern") {
      addIntern();
    } else console.log ("Project team assembled.")
    printEngineer();
    printIntern();
  });
};

// AddIntern Function
const addIntern = () => {
  inquirer.prompt(internInfo).then(resp => {
    // creating intern object based on user input
    let intern = new employees.Intern(
      resp.name,
      resp.id,
      resp.email,
      resp.school
    );
    // Adding intern to array
    internArray.push(intern);
    console.log (internArray)
    // Initiate function based on manager's choice of employee
    if (resp.addEmployee === "Engineer") {
      addEngineer();
    } else if (resp.addEmployee === "Intern") {
      addIntern();
    } else console.log ("Project team assembled.")
    printEngineer();
    printIntern();

  });
};

startup();