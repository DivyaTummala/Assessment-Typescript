interface Person {
    name: string;
    age: number;

    greet(): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
    }
}

const person1 = new Employee("Divya", 29);
person1.greet();