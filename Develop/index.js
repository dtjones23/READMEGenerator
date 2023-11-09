// Added node mods
const fs = require('fs')
const inquirer = require('inquirer')

// Add questions
function init() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Give a description.'
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the installation instructions?'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Describle usage information'
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'List contributors (if any).'
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Explain the test instructions?'
            }
        ])
        .then((answers) => {
            const userInput = question(answers);
            console.log(userInput)
        }
        )
}

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
init();
