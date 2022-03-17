const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const fullTeam = []
const idArray = []

initInput = () => {

  console.log('Assemble your team!')
  newManager = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: 'Enter name of manager',
          return,
        },
        {
          type: 'input',
          name: 'managerID',
          message: "Enter ID for manager",
          return,
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: 'Enter contact email for manager.',
          return,
        },
        {
          type: 'input',
          name: 'managerOfficeNum',
          message: 'Enter office number of manager.',
          return,
        }
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerID,
          answers.managerEmail,
          answers.managerOfficeNum
        )
        fullTeam.push(manager)
        idArray.push(answers.managerID)
        createTeamMember()
      })
  }
  const createTeamMember = () => {
    inquirer
      .prompt([
        type: 'list',
        name: 'pickMember',
        message: 'Which type of team member to add?',
        choices: [
          'Engineer',
          'Intern',
          'I am finished adding team members',
        ]
      ])
      .then((userInput) => {
        switch (userInput.pickMember) {
          case 'Engineer'
            createEngineer()
            break
          case 'Intern'
            createIntern()
            break
          default:
            finalizeTeam()
        }
      })
  }
  const createEngineer = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: 'Name of engineer?',
          return,
        },
        {
          type: 'input',
          name: 'engineerID',
          message: 'ID of engineer?',
          return,
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: 'Email of engineer?',
          return,
        },
        {
          type: 'input',
          name: 'engineerGit',
          message: 'GitHub account link of engineer?',
          return,
        }
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerID,
          answers.engineerEmail,
          answers.engineerGit
        )
        fullTeam.push(engineer)
        idArray.push(answers.engineerID)
        createTeamMember()
      }
  }

  const intern = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: 'Name of intern?',
          return,
        },
        {
          type: 'input',
          name: 'internID',
          message: 'ID of intern?',
          return,
        },
        {
          type: 'input',
          name: 'internEmail',
          message: 'Email of intern?',
          return,
        },
        {
          type: 'input',
          name: 'internSchool',
          message: 'School of intern?',
          return,
        }
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internID,
          answers.internEmail,
          answers.internSchool
        )
        fullTeam.push(intern)
        idArray.push(answers.internID)
        createTeamMember()
      }
  }
}


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

const renderedTeam = render(fullTeam)

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
