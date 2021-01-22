// import mysql, inquirer
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');
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

//uncomment when you get workbench to work again lines 17-35
// const connection = mysql.createConnection({
//     host: "localhost",
//     // My PORT
//     port: 3306,
//     // Your username
//     user: "root",
//     // Your password
//     password: "password",
//     database: "employee_trackerDB",
//   });
//   // connect to the mysql server and sql database
//   connection.connect((err) => {
//     if (err) {
//       throw err;
//     }
//     // run the start function after the connection is made to prompt the user
//     return start();
//   });

  function start() {
    return inquirer
      .prompt({
        
        type: "list",
        message: "What would you like to do",
        name: "mainMenu",
        choices: [
          "View All Employee",
          "View All Employee by Department",
          "View All Employee by Manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager",
          "Exit"
        ],
      })
      .then((answer) => {
        // based on their answer, either 
        switch (answer.action) {
          case "View All Employees":
            employeeSearch();
            break;
          case "View All Employee by Department":
            employeeDeptSearch();
            break;
          case "View All Employee by Manager":
            employeeManagerSearch();
            break;
          case "Add Employee":
            addEmployee();
            break;
          case "Remove Employee":
            removeEmployee();
            break;
          case "Update Employee Role":
            updateEmployeeRole();
            break;
          case "Update Employee Manager":
            updateEmployeeManager();
            break;
          default:
            connection.end();
        }
      })
      .catch((error) => {
        console.log(error);
        process.exit(1);
      });
      function employeeSearch() {
        inquirer
          .prompt({
            type: "input",
            message: "Which employee would you like to search for?",
            name: "searchEmployee",
          })
          .then(function (answer) {
            var query = "SELECT  "; //when workbench figured out insert the select here
            connection.query(query, { searchEmployee: answer.searchEmployee }, (err, res) => { //check if correct 
              if (err) {
                return console.log(err);
              }
              for (var i = 0; i < res.length; i++) {
                console.log(
                  "Position: " +
                    res[i].name +
                    "\nrole: " +
                    res[i].song +
                    "\ndepartment: "
                );
              }
              start();
            });
          });
          function employeeDeptSearch() {
            inquirer
              .prompt({
                type: "input",
                message: "Which department would you like to search for an employee in?",
                name: "searchDeptEmployee",
              })
              .then(function (answer) {
                var query = "SELECT  "; //when workbench figured out insert the select here
                connection.query(query, { searchDeptEmployee: answer.searchDeptEmployee }, (err, res) => {
                  if (err) {
                    return console.log(err);
                  }
                  for (var i = 0; i < res.length; i++) {
                    console.log(
                      "Department: " +
                        res[i].name +
                        "\nname: " +
                        res[i].song +
                        "\nrole: " // is role necessary here??
                    );
                  }
                  start();
                });
              });
              function employeemanagerSearch() {
                inquirer
                  .prompt({
                    type: "input",
                    message: "Which employee would you like to see by manager?",
                    name: "searchManagerEmployee",
                  })
                  .then(function (answer) {
                    var query = "SELECT  "; //when workbench figured out insert the select here
                    connection.query(query, { searchManagerEmployee: answer.searchManagerEmployee }, (err, res) => {
                      if (err) {
                        return console.log(err);
                      }
                      for (var i = 0; i < res.length; i++) {
                        console.log(
                          "Manager: " +
                            res[i].name +
                            "\nname: " +
                            res[i].song +
                            "\nrole: " //do I need role here??
                        );
                      }
                      start();
                    });
                  });