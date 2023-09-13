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

//Display database in relation to users choices
function displayData(choice) {
  let query;
  switch (choice) {
    case "Departments":
      query = "SELECT * FROM department";
      break;
    case "Roles":
      query = "SELECT * FROM role";
      break;
    case "Employees":
      query = "SELECT * FROM employee";
      break;
    default:
      break;
  }
  if (query) {
    connection.query(query, (err, results) => {
      if (err) throw err;
      console.table(results);
      promptUser(); // Return to the main menu
    });
  }
}
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
      if (answers.action === "Quit") {
        // if user selects quit end prompts
        connection.end();
        console.log("See you next time");
        return;
      }
      displayData(answers.action);
    });
}

//Function to add dept when user wants to
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Department name",
      },
    ])
    .then((answer) => {
      connection.query(
        `INSERT INTO department(name)
                    VALUES(?)`,
        answer.addDepartment,
        (err, results) => {
          if (err) {
            console.log(err);
          } else {
            connection.query(`SELECT * FROM department`, (err, results) => {
              err ? console.error(err) : console.table(results);
              init();
            });
          }
        }
      );
    });
}
