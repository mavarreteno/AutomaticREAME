// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'Username?',
  },
  {
    type:'input',
    name: 'email',
    message: 'Email?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a small description for your project.',
  },
  {
    type: 'list',
    name: 'license',
    messege: 'Type of license for your project?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What commands should be used to install dependencies?',
    default: 'npm i, npm i inquirer@8.2.4',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be used to run the tests?',
    default: 'npm test',
  },
  {
    type:'input',
    name: 'usage',
    message: 'What does the user need to know to use the repo?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What do users need to know to contribute to the project?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    writeToFile('README.md',
    generateMarkdown({ ... inquirerResponses }));
  });
}

// Function call to initialize app
init();
