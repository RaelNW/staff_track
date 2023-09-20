const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

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
        case "View All Departments":
          viewDepartment();
          break;
        case "View All Roles":
          viewRole();
          break;
        case "View All Employees":
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

//Function to add role when user wants to

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title for this role",
        name: "title",
      },
      {
        type: "input",
        message: "What is the salary for this role?",
        name: "salary",
      },
    ])
    .then((response) => {
      const title = response.title;
      const salary = response.salary;
      const departmentId = response.departmentId;
      const query = `INSERT INTO role (title,salary) VALUES('${title}','${salary}')`;
      connection.query(query, function (err, response) {
        if (err) throw err;
        console.table(response);
        promptUser(); // Return to the main menu
      });
    });
}

//Function to add employee when user wants to

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the first name of the employee?",
        name: "first_name",
      },
      {
        type: "input",
        message: "What is the last name of the employee?",
        name: "last_name",
      },
      {
        type: "input",
        message: "What is the role_id of the employee?",
        name: "role_id",
      },
      {
        type: "input",
        message: "What is the manager_id of the employee?",
        name: "manager_id",
      },
    ])
    .then((response) => {
      const firstName = response.first_name;
      const lastName = response.last_name;
      const roleId = response.role_id;
      const managerId = response.manager_id;
      const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${firstName}', '${lastName}', ${roleId}, ${managerId})`;
      connection.query(query, function (err, result) {
        if (err) throw err;
        console.log("Employee added successfully!");
        promptUser(); // Return to the main menu
      });
    });
}

//Function to View Department when user wants to
function viewDepartment() {
  const query = "SELECT * FROM department";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
}

//Function to View role when user wants to
function viewRole() {
  const query = "SELECT role.id, role.title, role.salary  FROM role ";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
}

//Function to View Employee when user wants to
function viewEmployee() {
  const query = "SELECT * FROM employee";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
}
