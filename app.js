// import mysql, inquirer
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  // My PORT
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "password",
  database: "employee_trackerDB",
});
// connect to the mysql server and sql database
connection.connect((err) => {
  if (err) {
    throw err;
  }
  // run the start function after the connection is made to prompt the user
  start();
});

function start() {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do",
      name: "mainMenu",
      choices: [
        "View Employees",
        "View Departments",
        "View Roles",
        "Add Employee",
        "Add Department",
        "Add Role",
        "Update Employee Role",
        "Exit",
      ],
    })
    .then((answer) => {
      // based on their answer, either
      switch (answer.mainMenu) {
        case "View Employees":
          employeesView();
          break;
        case "View Departments":
          deptView();
          break;
        case "View Roles":
          rolesView();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
        default:
          connection.end();
      }
    })
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });
}
function employeesView() {
  var query = "SELECT * FROM employee";
  connection.query(query, (err, res) => {
    //check if correct
    if (err) {
      return console.log(err);
    }
    console.table(res);
    start();
  });
}

function deptView() {
    var query = "SELECT * FROM department";
  connection.query(query, (err, res) => {
    //check if correct
    if (err) {
      return console.log(err);
    }
    console.table(res);
    start();
  });
}

function rolesView() {
    var query = "SELECT * FROM role";
  connection.query(query, (err, res) => {
    //check if correct
    if (err) {
      return console.log(err);
    }
    console.table(res);
    start();
  });
}

// TODO:
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your employee's first name?",
        name: "firstName",
      },
      {
        type: "input",
        message: "What is your employee's last name?",
        name: "lastName",
      },
      {
        type: "input",
        message: "What is your employee's role id?",
        name: "roleId",
      },
      {
        type: "input",
        message: "What is your employee's manager id?",
        name: "managerId",
      },
    ])
    .then(function (answer) {
        // console.log("work");
      var query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ?";
      connection.query(
        query,
        { first_name : answer.firstName, 
          last_name : answer.lastName, 
          role_id : answer.roleId, 
          manager_id : answer.managerId },
        (err, res) => {
          if (err) {
            return console.log(err);
          }
          console.table(res)
          start();
        }
      );
    });
}

// TODO:
function addDepartment() {
    inquirer
    .prompt([
      {
        type: "input",
        message: "What department do you wish to add?",
        name: "addDepartment",
      },
      {
        type: "input",
        message: "What is the department id?",
        name: "deptId",
      }
    ])
    .then(function (answer) {
      //   console.log(answer);
      var query = "INSERT INTO department";
      connection.query(
        query,
        { addDepartment: answer.addDepartment },
        (err, res) => {
          if (err) {
            return console.log(err);
          }
          start();
        }
      );
    });
}

// // TODO:
function addRole() {
    inquirer
    .prompt([
      {
        type: "input",
        message: "What role do you want to add?",
        name: "addrole",
      },
      {
        type: "input",
        message: "What department does this role belong to?",
        name: "deptRole",
      },
      {
        type: "input",
        message: "What employee is this role assigned to?",
        name: "roleEmployee",
      }
    ])
    .then(function (answer) {
      //   console.log(answer);
      var query = "INSERT INTO role";
      connection.query(
        query,
        { addRole: answer.addRole },
        (err, res) => {
          if (err) {
            return console.log(err);
          }
          start();
        }
      );
    });
}

 // TODO:
function updateEmployeeRole() {
    inquirer
    .prompt([
      {
        type: "input",
        message: "Which employee would you like to update?",
        name: "updateEmployee",
      },
      {
        type: "input",
        message: "What is their updated depatment?",
        name: "updateDept",
      },
      {
        type: "input",
        message: "What is their updated role?",
        name: "roleEmployee",
      }
    ])
    .then(function (answer) {
      //   console.log(answer);
      var query = "INSERT INTO employee";
      connection.query(
        query,
        { addRole: answer.addEmployeeRole },
        (err, res) => {
          if (err) {
            return console.log(err);
          }
          start();
        }
      );
    });
}

