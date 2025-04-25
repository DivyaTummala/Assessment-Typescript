function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
console.log("10 is " + checkEvenOdd(10));
console.log("3 is " + checkEvenOdd(3));
