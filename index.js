const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
    .prompt([{
        message: "Please enter your Github username",
        name: "username"
    },
    {
        message: "Please enter what you would like inside your projects badge",
        name: "badge"
    },
    {
        message: "What is your projects title?",
        name: "projectTitle"
    },
    {
        message: "Write a description for your project",
        name: "projectDescription"
    },
    {
        message: "Include instructions for project installation",
        name: "projectInstalation"
    },
    {
        message: "Write a description of your projects usage",
        name: "projectUsage"
    },
    {
        message: "Include any licenses for your project",
        name: "projectLicense"
    },
    {
        message: "Include any contributions for your project",
        name: "projectContribution"
    }])

    .then(function(result) {
        const queryUrl = `https://api.github.com/users/${result.username}`;
        const html = 
`# ${result.projectTitle}





![${result.username}](PUT URL FOR IMAGE HERE)
https://github.com/${result.username}
    
<h2>${result.projectTitle}</h2>
    
# ${result.projectTitle}
${result.projectDescription}
    
    
>  ## **Table of Contents** :notebook:
    
    
* [Installation](#Installation):wrench:
* [Usage](#Usage):bulb:
* [Contributions](#Contributions):point_up:
* [License](#License):lock_with_ink_pen:
* [Badges](#Badges):warning:
    
    
    
> ## Installation
    
${result.projectInstalation}
    
    
> ## Usage
    
${result.projectUsage}
    
    
> ## Contributions
    
- OpenWeather API
    
${result.projectContribution}
    
    

> ## License
    
${result.projectLicense}
    
    
    
> ## Badges
    
![${result.badge}](https://img.shields.io/badge/${result.badge}-100%25-green)
    
`
        
    axios
        .get(queryUrl)
        .then(function(res){
            var bioPic = res.data.avatar_url;
            var eMail = res.data.email;
            console.log(bioPic);
            console.log(eMail);     
        });
        fs.writeFile('README.md', html , function (err) {
            if (err) throw err;
            console.log('Your README has been generated!');
        });
     });
     

       

 


        