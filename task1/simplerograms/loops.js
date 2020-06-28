//Task 2: Simple Programs todo for Operators

// 1 Square of a number
var square = 2
console.log(square * square)

//2 Swapping 2 numbers
var a2 = 1, b2 = 2;
a2 = [b2][b2 = a2, 0];
console.log("Swapped: a=" + a2 + ",b=" + b2 + ".");

//3 Addition of 3 numbers
var x, y, z
x = 3, y = 4, z = 6
console.log(x + y + z)

//4 Celsius to Fahrenheit conversion
var cel = 37
var faren = 9 / 5 * cel + 32
console.log(faren)

//5 Meter to miles
var meters = 10000
console.log("miles: " + meters * 0.000621371192)

//6 Pounds to kg

var pounds = 10
console.log("kg: " + .45 * pounds)

//7 Calculate Batting Average //8Calculate five test scores and print their average
var arr = [12, 100, 13, 100, 25]
var sum = arr.reduce((a, b) => a + b, 0)
console.log("avg: " + sum / arr.length)

//9Power of any number x ^ y.
console.log(Math.pow(x, y))

//10 Calculate Simple Interest
let p, n, r
p = 3000, n = 5, r = 10
console.log("intrest: " + (p * n * r) / 100)

//11 Calculate area of an equilateral triangle
var side = 5
console.log("equilateral triangle area: " + (1.732 * side * side) / 4)

//12 Area Of Isosceles Triangle
var base = 12
var height = 24
console.log("area: " + (base * height) / 2)

//13 Volume Of Sphere
console.log("volume of sphere: " + (4 * 22 * side * side * side) / (7 * 3))

//14 Volume Of Prism

var l = 18, b111 = 12, h = 9
console.log("volume of Prism: " + (l * b111 * h / 2))

//15 Find area of a triangle
var side1, side2, side3
side1 = 10, side2 = 10, side3 = 10
var peri = (side1 + side2 + side3) / 2;
var aarea = Math.sqrt(peri * (peri - side1) * (peri - side2) * (peri - side3));
console.log(aarea)

//16 Give the Actual cost and Sold cost, Calculate Discount Of Product

var ac = 10000
var sc = 15000
console.log("discoiunt:" + sc - ac)

//17 Given their radius of a circle and find its diameter, circumference and area.
var radius = 7
console.log("circumfrance: " + (2 * Math.PI * radius) + " diameter: " + (2 * radius) + " area: " + (Math.PI * radius * radius))

//18 Given two numbers and perform all arithmetic operations.
var a =5,b=10
console.log(a + b, a / b, a * b, a - b, a % b, a == b, a < b, a > b, a != b, a <= b, a <= b)

//19 Display the asterisk pattern as shown below(No loop needed)

console.log("*****")
console.log("*****")
console.log("*****")
console.log("*****")
console.log("*****")

//20 Calculate electricity bill? For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
var watts = .5//per hour
var rate = 10
console.log("power bill: " + (24 * 7 * 30 * watts * rate))

//21 Program To Calculate CGPA
English = 9.1
Hindi = 8.5
Maths = 9.5
Science = 9.6;
SocialStudy = 8.6
CGPA = (9.1 + 8.5 + 9.5 + 9.6 + 8.6) / (5.0)
CGPAper = 9.5 * (CGPA)
console.log("CGpa is: " + CGPA)
