INSERT INTO department (name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');


INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000.00, 1),
       ('Sales Person', 80000.00, 1),
       ('Lead Engineer', 150000.00, 2),
       ('Software Engineer', 120000.00, 2),
       ('Account manager', 160000.00, 3),
       ('Accountant', 125000.00, 3),
       ('Legal Team Lead', 250000.00, 4),
       ('Lawyer', 190000.00, 4);



INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('John', 'Doe', 1, NULL), 
       ('Mike', 'Chan', 2, 1),
       ('Ashley', 'Rodriguez', 1, NULL), 
       ('Kevin', 'Tupik', 2, 3),
       ('Kunal', 'Singh', 1, NULL), 
       ('Malia', 'Brown', 2, 5),
       ('Sarah', 'Lourd', 2, NULL),     
       ('Tom', 'Allen', 2, 7);
