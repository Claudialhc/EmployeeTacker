// import mysql, inquirer
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
//below to check if console.table works
// console.table([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);
// create the connection information for the sql database

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
  // TODO: if you want the complicated version try using joins
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

// TODO:
function deptView() {}

// TODO:
function rolesView() {}

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
      //   console.log(answer);
      var query = "INSERT INTO employee";
      connection.query(
        query,
        { addEmployee: answer.addEmployee },
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
function addDepartment() {}

// TODO:
function addRole() {}

// TODO:
function updateEmployeeRole() {}
function employeeDeptSearch() {
  inquirer
    .prompt({
      type: "input",
      message: "Which department would you like to search for an employee in?",
      name: "searchDeptEmployee",
    })
    .then(function (answer) {
      var query = "SELECT  "; //when workbench figured out insert the select here
      connection.query(
        query,
        { searchDeptEmployee: answer.searchDeptEmployee },
        (err, res) => {
          if (err) {
            return console.log(err);
          }
          for (var i = 0; i < res.length; i++) {
            console.log(
              "Department: " +
                res[i].deparment +
                "\nname: " +
                res[i].name +
                "\nrole: " +
                res[i].role
            );
          }
          start();
        }
      );
    });
}
function employeemanagerSearch() {
  inquirer
    .prompt({
      type: "input",
      message: "Which employee would you like to see by manager?",
      name: "searchManagerEmployee",
    })
    .then(function (answer) {
      var query = "SELECT  "; //when workbench figured out insert the select here
      connection.query(
        query,
        { searchManagerEmployee: answer.searchManagerEmployee },
        (err, res) => {
          if (err) {
            return console.log(err);
          }
          for (var i = 0; i < res.length; i++) {
            console.log(
              "Manager: " +
                res[i].manager +
                "\nname: " +
                res[i].name +
                "\nrole: " +
                res[i].role
            );
          }
          start();
        }
      );
    });
}
