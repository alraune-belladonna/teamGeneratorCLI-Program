const inquirer = require("inquirer")

// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, position, email) {
    this.name = name
    this.id = id
    this.position = position
    this.email = email
  }

  getName() {
    inquirer
      .prompt({
        type: 'input',
        name: 'name',
        message: 'Name of employee?',
      })
  }

  getId() {
    inquirer
      .prompt({
        type: 'input',
        name: 'id',
        message: 'ID of employee?',
      })
  }

  getEmail() {
    inquirer
      .prompt({
        type: 'input',
        name: 'email',
        message: 'Email of employee?',
      })
  }

  getRole() {
    inquirer
      .prompt({
        type: 'input',
        name: 'role',
        message: 'Role of employee?',
      })
  }
}