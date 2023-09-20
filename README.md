# staff_track

A content management system that allows employers to to view and manage the departments, roles, and employees in their company

## User Story

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

## Usage

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Run node index.js command to start the

## Dependencies

- Node.js
- Inquirer
- mysql2
- console.table

## Installation

1. Make sure you have Node.js installed on your machine.
2. Clone this repository:

   git clone https://github.com/RaelNW/staff_track.git

3. Navigate to the project directory:
   cd staff_track
4. Install the required dependencies:

- Inquirer
- mysql2
- console.table

## link to repo

https://github.com/RaelNW/staff_track

## link to Demo

https://drive.google.com/file/d/11zWtHw6YiarXKr357RqT9MJP_lGdyIJi/view?usp=drive_link

## Credits

Staff Track created by [Rael Wanjala].
