// List of lisence objects
const licenseData = {
  mit: {
      badge: 'https://img.shields.io/badge/license-MIT-brightgreen',
      link: '[MIT License](https://opensource.org/licenses/MIT)',
      section: 'This project is licensed under the MIT License - see the [MIT License](LICENSE) file for details.'
    },
  apache: {
      badge: 'https://img.shields.io/badge/license-Apache%202.0-blue',
      link: '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
      section: 'This project is licensed under the Apache License 2.0 - see the [Apache License 2.0](LICENSE) file for details.'
    },
    gpl: {
        badge: 'https://img.shields.io/badge/license-GPL%20v3-blue',
        link: '[GNU General Public License v3.0](https://opensource.org/licenses/GPL-3.0)',
        section: 'This project is licensed under the GNU General Public License v3.0 - see the [GNU GPL v3.0](LICENSE) file for details.'
    },
    bsd: {
        badge: 'https://img.shields.io/badge/license-BSD%203--Clause-blue',
        link: '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)',
        section: 'This project is licensed under the BSD 3-Clause License - see the [BSD 3-Clause License](LICENSE) file for details.'
    },
    mpl: {
        badge: 'https://img.shields.io/badge/license-MPL%202.0-brightgreen',
        link: '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)',
        section: 'This project is licensed under the Mozilla Public License 2.0 - see the [MPL 2.0](LICENSE) file for details.'
    },
    isc: {
        badge: 'https://img.shields.io/badge/license-ISC-brightgreen',
        link: '[ISC License](https://opensource.org/licenses/ISC)',
        section: 'This project is licensed under the ISC License - see the [ISC License](LICENSE) file for details.'
    },
    agpl: {
        badge: 'https://img.shields.io/badge/license-AGPL%20v3-blue',
        link: '[GNU Affero General Public License v3.0](https://opensource.org/licenses/AGPL-3.0)',
        section: 'This project is licensed under the GNU Affero General Public License v3.0 - see the [GNU AGPL v3.0](LICENSE) file for details.'
    },
    wtfpl: {
        badge: 'https://img.shields.io/badge/license-WTFPL-brightgreen',
        link: '[WTFPL](http://www.wtfpl.net/)',
        section: 'This project is licensed under the WTFPL - see the [WTFPL](LICENSE) file for details.'
    },
    unlicense: {
        badge: 'https://img.shields.io/badge/license-Unlicense-brightgreen',
        link: '[The Unlicense](https://opensource.org/licenses/unlicense)',
        section: 'This project is licensed under The Unlicense - see the [Unlicense](LICENSE) file for details.'
    },

}  
// Function returns the license badge (if any)
function renderLicenseBadge(license) {
  return licenseData[license] ? `![License](${licenseData[license].badge})` : '';
}

// Function returns the license link (if any)
function renderLicenseLink(license) {
    return licenseData[license] ? licenseData[license].link : '';
}


// Function returns the license section of README (if any)
function renderLicenseSection(license) {
    return licenseData[license] ? licenseData[license].section : '';
}

// Function to generate markdown for README
function generateMarkdown(data) {

  const{title, description, license, installation, usage, contribution, tests, questions, question}=data //data is intializer
  return `# ${title}
  ${renderLicenseBadge(license)}
  
  ## Description
  
  ${description}
  
  ## Table of Contents
  
  - [Installation](#installation)

  - [Usage Instructions](#usage)

  - ${renderLicenseLink(license)}

  - [Contribution](#contributions)

  - [Test Instruction](#tests)

  - [Questions](#questions)
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## Contributions
  
  ${contribution}
  
  ## Tests
  
  ${tests}

  ## Questions
  Click to view GitHub profile: https://github.com/${questions}
  
  For further questions, contact me via email: ${question}
  
  ${renderLicenseSection(license)}`;
  }

module.exports = generateMarkdown;
