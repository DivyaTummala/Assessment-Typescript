// Arithmetic Operators
var a = 10;
var b = 5;
console.log("Arthametic operators:\nAddition (a + b):", a + b);
console.log("Subtraction (a - b):", a - b);
console.log("Modulus (a % b):", a % b);
console.log("Modulus (a * b):", a * b);
console.log("Modulus (a / b):", a / b);
// Logical Operators
var fruits = true;
var chocolates = false;
console.log("Logical operators:\nAND (fruits && chocolates):", fruits && chocolates); // false
console.log("OR (fruits || chocolates):", fruits || chocolates); // true
console.log("NOT (!fruits):", !fruits); // false
// == and === operators 
var num1 = 10; // Number
var num2 = 3;
var num3 = "Divya"; // String
if (num1 === num2) { // == operator checks for value equality, not type
    console.log("== operator: num1 and num2 are equal"); // This will be printed
}
else {
    console.log("== operator: num1 and num2 are not equal");
}
if (num1 == Number(num3)) { // == operator checks for value equality, not type
    console.log("== operator: num1 and num2 are equal"); // This will be printed
}
else {
    console.log("== operator: num1 and num2 are not equal");
}
