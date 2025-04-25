// Declare variables with types
let personName: string = "Divya";
let age: number = 25;
let isMarried: boolean = false;
let skills: string[] = ["JavaScript", "TypeScript", "HTML", "CSS"];
let anytype: any =["Employee: Divya",1, true,"Associate QA Lead"]; // any type can hold any value

// Print information to the console
console.log("=== Person Info ===");
console.log("Name:", personName);
console.log("Age:", age);
console.log("Is Married:", isMarried ? "Yes" : "No");
console.log("Skills:", skills.join(", "));
console.log("Anytype: stores any data type", anytype); // Print the array as a string

