var Car = /** @class */ (function () {
    // Constructor to initialize properties
    function Car(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    // Method to display car details
    Car.prototype.displayDetails = function () {
        console.log("Car Brand: ".concat(this.brand, ", Model: ").concat(this.model));
    };
    return Car;
}());
var car1 = new Car("Toyota", "Corolla");
car1.displayDetails();
;
