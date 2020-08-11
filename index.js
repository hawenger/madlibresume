 const inquirer = require('inquirer');
 const fs = require('fs');
 const util = require('util');

 const writeFileAsync = util.promisify(fs.writeFile);
 inquirer
     .prompt([{
             type: "input",
             name: "name",
             message: "What is your name?"
         },
         {
             type: "input",
             name: "one",
             message: "Adjective?"
         },
         {
             type: "input",
             name: "two",
             message: "Plural Noun?"
         },
         {
             type: "input",
             name: "three",
             message: "Adverb?"
         },
         {
             type: "input",
             name: "four",
             message: "Famous Person?"
         },
         {
             type: "input",
             name: "five",
             message: "Telephone number starting with area code?"
         }
     ])
     .then(answers => {
         const html = generateHTML(answers);

         return writeFileAsync("index.html", html);

     })
     .then(answers => {
         console.log("Success");
     })
     .catch(error => {
         console.log(error);
     });

 function generateHTML(answers) {
     return `
     <!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <title>The Maddening Tales of ${answers.name}</title>
    </head>
    <body>
        <div class="container">
            <br><br>
            <h1> Hello, I'm ${answers.name}</h1>
            <br><br>
            <h2>Some people describe my personality as a ${answers.one}</h2>
            <br><br>
            <h2>One thing that really inspires me are ${answers.two}</h2>
            <br><br>
            <h3>A hard worker, you'll never catch me ${answers.three} on empty</h3>
            <br><br>
            <h1>"WHY",</h1>
            <h3>you may ask?</h3>
            <br><br>
            <h4>Because I channel the energy of ${answers.four}!</h4>
            <br><br>
            <br><br>
            <h2>Available for hire!</h2>
            <br><br>
            <h5>Call ${answers.five}</h5>

        </div>
    </body>
<html>`;
 }