// Added modules to enable interaction with the file system
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
            // function to create README file
            fs.writeFile('README.md', JSON.stringify([answers]), (err)=> {
                err ? console.error(err) : console.log('README is generated!')
            })
        })
}

// Function call to initialize app
init();
