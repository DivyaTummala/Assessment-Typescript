class Car {
    brand: string; 
    model: string;

    // Constructor to initialize properties
    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    // Method to display car details
    displayDetails(): void {
        console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
    }
}

const car1 = new Car("Toyota", "Corolla");

car1.displayDetails();; 