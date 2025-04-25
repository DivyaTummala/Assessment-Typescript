function addnumbers(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
console.log("Sum of two numbers", addnumbers(100, 300));
var greeting = function (name) {
    return 'Welcome to Winwire, ' + name;
};
console.log(greeting("Divya Tummala"));
// Function Implementation
function processInput(arg1, arg2) {
    if (arg2) {
        return "Full Name: ".concat(arg1, " ").concat(arg2);
    }
    else {
        return "".concat(arg1);
    }
}
console.log(processInput("Divya")); // Output: Hello, Divya!
console.log(processInput("Divya", "Tummala")); // Output: Full Name: Divya Tummala
