#! /usr/bin/env node
import inquirer from "inquirer";
const Answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "Firstnumber" },
    { message: "Enter your second number", type: "number", name: "secondnumber" },
    {
        message: "Choose the operation you want to perform",
        type: "list",
        name: "operators",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
if (Answer.operators === "Addition") {
    console.log(Answer.Firstnumber + Answer.secondnumber);
}
else if (Answer.operators === "Substraction") {
    console.log(Answer.Firstnumber - Answer.secondnumber);
}
else if (Answer.operators === "Multiplication") {
    console.log(Answer.Firstnumber * Answer.secondnumber);
}
else if (Answer.operators === "Division") {
    console.log(Answer.Firstnumber / Answer.secondnumber);
}
console.log("THE END!");
