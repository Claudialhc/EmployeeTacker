USE employee_trackerDB;

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Claudia", "Hernandez", 1, NULL),
("Alfredo", "Boing", 2, 1),
("Eric", "Smith", 4, 2),
("Samantha", "Erickson", 3, 3),
("Casey", "Roberts", 5, 4),
("Jessica", "Samuel", 6, 5),
("John", "Snow", 7, 6),
("Erica", "Daniels", 8, 7),
("Danielle", "Johnson", 9, 8),
("David", "Thompson", 10, 9);

INSERT INTO role (title, salary, department_id) VALUES
("CEO", 9999999.00, 1),
("Executive Assistant", 88999.00, 1),
("Production Director", 99999.00, 4),
("PR Director", 48999.00, 2),
("PR Coordinator", 9999.00, 2),
("Accounting Assistant", 8999.00, 3),
("Accounting Director", 999999.00, 3),
("Production Assistant", 3999.00, 4),
("Production Intern", 19999.00, 4),
("Executive Director", 988999.00, 1);

INSERT INTO department (name) VALUES
("Administration"),
("Public Relations"),
("Accounting"),
("Production");