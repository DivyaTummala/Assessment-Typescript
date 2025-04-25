// Arithmetic Operators
let a = 10;
let b = 5;
console.log("Arthametic operators:\nAddition (a + b):", a + b); 
console.log("Subtraction (a - b):", a - b)
console.log("Modulus (a % b):", a % b); 
console.log("Modulus (a * b):", a * b); 
console.log("Modulus (a / b):", a / b); 

// Logical Operators
let fruits = true;
let chocolates = false;
console.log("Logical operators:\nAND (fruits && chocolates):", fruits && chocolates); // false
console.log("OR (fruits || chocolates):", fruits || chocolates); // true
console.log("NOT (!fruits):", !fruits); // false

// == and === operators 
let num1:number = 10; // Number
let num2:number= 3; 
let num3: String="Divya"// String

if(num1 === num2){ // == operator checks for value equality, not type
    console.log("=== operator: num1 and num2 are equal"); // This will be printed

}else{  
    console.log("=== operator: num1 and num2 are not equal");
}
if(num1 == Number(num3)){ // == operator checks for value equality, not type
    console.log("== operator: num1 and num2 are equal"); // This will be printed


}else{  
    console.log("== operator: num1 and num2 are not equal");

}

