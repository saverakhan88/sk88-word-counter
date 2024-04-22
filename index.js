#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgBlue("\n \t\t Savera's Word Counter"));
console.log("=".repeat(60));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
let words = answers.sentence.trim().split(" ");
console.log("=".repeat(60));
console.log(chalk.bold(" Sentence Words"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.bgCyan(words.length)}`));
console.log("=".repeat(60));
