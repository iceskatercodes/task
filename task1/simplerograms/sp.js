
//Task 1: Simple Programs todo for variables
//1.Declare four variables without assigning values and print them in console
let a, b, c, d
a = 1, b = 2, c = 3, d = 4
console.log(a, b, c, d)

//2.How to get value of the variable myvar as output
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {

  //start-here
  let num = userInput[0]
  console.log(num)
  //end-here
});

//3 Declare variables to store your first name, last name, marital status, country and age in multiple lines
//4 Declare variables to store your first name, last name, marital status, country and age in a single line
let firstName = "iceskater"
let lastName = 'Codes'
let maritialStatus = "single"
let country = "IND"
let age = 25
console.log(firstName, lastName, maritialStatus, country, age)

console.log(firstName)
console.log(lastName)
console.log(maritialStatus)
console.log(country)
console.log(age)
//5. Declare variables and assign string, boolean, undefined and null data types

var a1 = 10
var b1 = "Hello world"
var c1 = true
var d1
console.log(typeof (a1), typeof (b1), typeof (c1), typeof (d1))

//6. Convert the string to integer
var num = "5"
console.log(parseInt(num), Number(num), num++, ++num)

//7 Write 6 statement which provide truthy & falsey values.
var num1 = 5
var num2 = 6
console.log(a > b)
console.log(a < b)
console.log(a == b)
console.log(a != b)
console.log(a >= b)
console.log(a <= b)