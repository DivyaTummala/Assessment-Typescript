class Animal {
    speak(): void {
        console.log("The animal makes a sound");
    }
}

class Dog extends Animal {
    speak(): void {
        console.log("The dog barks");
    }
}

// const genericAnimal = new Animal();
// genericAnimal.speak(); 

const dog = new Dog();
dog.speak();