import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSPrototypalInheritance() {
    return (
        <div>
            <h1>JS Prototypal Inheritance</h1>
            <p>
                In JavaScript, one of the core principles is prototypal inheritance. This concept allows objects to inherit properties and methods from other objects, enabling developers to create efficient and flexible code. Understanding prototypal inheritance is essential for mastering JavaScript, so let's dive into the fascinating world of objects and prototypes.
            </p>

            <h2> What is Prototypal Inheritance? </h2>
            <p>
                Prototypal inheritance is a way for objects to inherit properties and methods from another object, known as its prototype. When an object is created in JavaScript, it automatically links to its prototype, forming a prototype chain. This chain allows objects to access and use properties and methods defined in the prototype object. If a property or method is not found in the current object, JavaScript searches up the prototype chain until it finds the desired property or reaches the end of the chain.
            </p>

            <h2> The Object Prototype </h2>
            <p>
                In JavaScript, the Object constructor serves as the root of all objects. It defines a set of default properties and methods that are inherited by every object. These properties and methods can be overridden or extended by individual objects.
            </p>

            <p> Let's explore some examples to understand how prototypal inheritance works: </p>

            <h2> Example 1: Inheriting from the Object Prototype </h2>
            <CodeBlock
            code={`
// Create an object
const person = {
  name: "John",
  age: 30,
};

// Accessing properties
console.log(person.name);   // Output: John
console.log(person.toString());   // Output: [object Object]
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the above example, the person object inherits the toString() method from its prototype, which is inherited from the Object prototype. Although we didn't explicitly define toString() for person, it can still use the method directly.
            </p>

            <h2> Example 2: Modifying the Prototype </h2>
            <CodeBlock
            code={`
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    return \`Hi, my name is \${this.name} and I am \${this.age} years old.\`;
};

// Creating an instance of Person
const john = new Person("John", 30);

// Calling the method
console.log(john.introduce());   // Output: Hi, my name is John and I am 30 years old.
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, we define a constructor function, Person, that receives the name and age parameters. We then add a new method, introduce(), to the Person prototype. Every instance of Person can now access and use this method.
            </p>

            <h2> Example 3: Inheritance Chain </h2>
            <CodeBlock
            code={`
// Parent object
const animal = {
    sound: "unknown",
    makeSound() {
    console.log(\`The animal makes a sound: \${this.sound}\`);
    },
};

// Child object inheriting from the parent
const dog = Object.create(animal);
dog.sound = "bark";
dog.bark = function() {
    console.log("Woof woof!");
};

// Using inherited methods
dog.makeSound();   // Output: The animal makes a sound: bark
dog.bark();   // Output: Woof woof!
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, we create two objects: animal and dog. The dog object is created using Object.create() and sets animal as its prototype. By doing this, the dog object inherits the makeSound() method from animal and defines its own bark() method.
            </p>

            <h1> Conclusion </h1>
            <p>
                Prototypal inheritance is a powerful feature in JavaScript that allows objects to inherit properties and methods from their prototype. It helps reduce code redundancy and promotes code reusability. Understanding prototypal inheritance enables developers to build efficient and modular applications.
            </p>
        </div>
    )
}
