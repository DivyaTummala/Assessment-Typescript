var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, ", and I am ").concat(this.age, " years old."));
    };
    return Employee;
}());
var person1 = new Employee("Divya", 29);
person1.greet();
