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
//     database: "employee_DB",
//   });
//   // connect to the mysql server and sql database
//   connection.connect((err) => {
//     if (err) {
//       throw err;
//     }
//     // run the start function after the connection is made to prompt the user
//     return start();
//   });