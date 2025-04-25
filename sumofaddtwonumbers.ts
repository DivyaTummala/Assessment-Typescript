function addnumbers(num1:number, num2:number) {
    let sum: number = num1 + num2;
    return sum;
}
console.log("Sum of two numbers", addnumbers(100, 300)); 

const greeting = (name: string): string => {
    return 'Welcome to Winwire, ' + name ;
}
console.log(greeting("Divya Tummala"));


// Function Overloads
function processInput(name: string): string;
function processInput(firstName: string, lastName: string): string;

function processInput(arg1: string, arg2?: string): string {
    if (arg2) {
        return `Full Name: ${arg1} ${arg2}`;
    } else {
        return `${arg1}`;
    }
}
console.log(processInput("Divya"));          // Output: Hello, Divya!
console.log(processInput("Divya", "Tummala")); // Output: Full Name: Divya Tummala
