const inquirer = require("inquirer");
const mysql = require("mysql2");

//Create connection to Database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "tracker_db",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: " + err);
    return;
  }
  console.log(`Connected to the tracker_db database.`);

  //start prompting users
  promptUser();
});

//Prompt users on what they would like to do with the database
function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "Add Employee",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Quit",
        ],
      },
    ])

    .then((answers) => {
      console.log("You entered: " + answers.action);
      switch (answers.action) {
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "View Department":
          viewDepartment();
          break;
        case "View Role":
          viewRole();
          break;
        case "View Employee":
          viewEmployee();
          break;
        case "Quit":
          connection.end();
          console.log("See you next time");
          break;
      }
    });
}

//Function to add dept when user wants to

function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      message: "Enter Department name",
      name: "department",
    })
    .then((response) => {
      const department = response.department;
      const query = `INSERT INTO department (name) VALUES("${department}")`;
      connection.query(query, function (err, response) {
        if (err) throw err;
        console.table(response);
        promptUser(); // Return to the main menu
      });
    });
}
