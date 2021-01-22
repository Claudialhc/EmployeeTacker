# EmployeeTacker
This the template for an employee tracker app, it was created using Node Javascript and MYSQL. This app was created to help business owners be able to view and manage the different departments, roles and employees in their respective companies. This app is to help business owners plan and organize their business more effectively. 

The code below was used to let the user see the table with all the employee's information:
```js
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
```


Link to GitHub Repo: https://github.com/Claudialhc/EmployeeTracker
Link to Video Demo: https://drive.google.com/file/d/1jFT2THRfM_9vJ3vhDG1URNMAtrGtxTM9/view