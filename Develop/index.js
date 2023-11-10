// Added modules to enable interaction with the file system
// npm init -y
// npm i inquirer@8.2.4.
const fs = require('fs').promises // for async and await
const inquirer = require('inquirer')
const generate = require('./utils/generateMarkdown')

// Add questions
// Async added for both readability and error handling
async function init() {
    try { 
        // Await for user answers
        const answers = await inquirer.prompt([
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
                name: 'license',
                message: 'What licenses were used?'
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

        // Import for answers
        const markdown = generate(answers)
        // function to create README file
        await fs.writeFile('README.md', markdown)

        console.log('README is generated!');
    } catch (error) {
        console.error(error);
    }
}

// Function call to initialize app
init();
