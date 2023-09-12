const inquirer = require("inquirer");
const mysql = require("mysql2");

function promptUser() {
  inquirer.prompt([
    {
      type: "list",
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
      name: "create",
    },
    {
      type: "input",
      message: "What is the name of the department?",
      name: "departmentName",
    },
    {
      type: "input",
      message: "What is the name of the role?",
      name: "roleName",
    },
    {
      type: "input",
      message: "What is the salary of the role?",
      name: "roleSalary",
    },
    {
      type: "input",
      message: "What department does the role belong to?",
      choices: ["Engineering", "Finance", "Legal", "Sales", "Service"],
      name: "departmentName",
    },
  ]);
}

promptUser();
