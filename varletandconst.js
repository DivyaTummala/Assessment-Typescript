// Example with var
function varExample() {
    var x = 10;
    console.log("Initial value of x using var:", x); // 10
    if (true) {
        var x = 20; // Updates within the same scope
        console.log("Updated value of x using var:", x); // 20
    }
    console.log("Value of x outside the block using var:", x); // 20 (var has function or global scope)
}
varExample();
// Example with let
function letExample() {
    var y = 10;
    console.log("Initial value of y using let:", y); // 10
    if (true) {
        var y_1 = 20; // Block scope; doesn't affect outer variable
        console.log("Value of y inside block using let:", y_1); // 20
    }
    console.log("Value of y outside block using let:", y); // 10 (let has block scope)
}
letExample();
// Example with const
function constExample() {
    var z = 10;
    console.log("Initial value of z using const:", z); // 10
    try {
        // z = 20; // Error: Cannot reassign a const variable
    }
    catch (error) {
        // console.log("Error when trying to reassign z:", error.message); 
    }
}
constExample();
