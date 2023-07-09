import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSInheritance() {

    return (
        <div>
            <h1>  Extending Classes in JavaScript using extends and super </h1>
            <p>
                In object-oriented programming (OOP), code reuse is crucial for maintaining clean and efficient codebases. JavaScript, being an object-oriented language, provides mechanisms to extend classes, allowing developers to build upon existing functionality easily. In this part, we will explore how to extend classes using the extends and super keywords in JavaScript.
            </p>

            <h2> Inheritance with extends </h2>
            <p>
                The extends keyword in JavaScript enables us to create a new class that inherits properties and methods from a parent class. This subclass inherits all the functionalities of its parent class while providing the flexibility to add or override methods specific to the subclass.
            </p>

            <p>
                To illustrate how the extends keyword works, let's consider an example. We have a parent class called Shape, which stores information about a basic geometric shape:
            </p>

            <CodeBlock
            code={`
class Shape {
    constructor(name) {
        this.name = name;
    }
    
    getArea() {
        // Area calculation logic
    }
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                Now, let's say we want to create a subclass called Circle that inherits from Shape. We can do this using the extends keyword:
            </p>

            <CodeBlock
            code={`
class Circle extends Shape {
    constructor(name, radius) {
        super(name); // Call the parent class constructor
        this.radius = radius;
    }
    
    getArea() {
        // Override the getArea method for Circle
        return Math.PI * Math.pow(this.radius, 2);
    }
}

const circle = new Circle("circle", 10)
console.log(circle.getArea()) // output: 314.1592653589793
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the example above, the Circle class extends the Shape class using extends Shape. By doing so, the Circle class inherits the properties and methods of Shape. We use the super keyword to call the parent class's constructor, passing the necessary arguments. The super keyword must be used before accessing the this keyword in the subclass's constructor.
            </p>

            <p>
                Additionally, we override the getArea method in the Circle class to calculate the area specific to circles. However, note that overriding methods is optional and depends on the requirements of your subclass.
            </p>

            <h2> Accessing Parent Class Methods with super </h2>
            <p>
                To access the methods of the parent class within the subclass, we can use the super keyword. super allows us to call methods from the parent class, even if they are overridden in the subclass.
            </p>

            <p> Let's modify our Circle class to demonstrate the usage of super:  </p>
            <CodeBlock
            code={`
class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    
    getArea() {
        let area = super.getArea(); // Call the parent class's getArea method
        console.log(\`The area of \${this.name} is \${area}.\`);
    
        return Math.PI * Math.pow(this.radius, 2);
    }
}

const circle = new Circle("circle", 10)
console.log(circle.getArea()) 
// output:
// The area of circle is 314.1592653589793.
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the updated Circle class, we utilize super.getArea() to call the getArea method of the parent class. By doing so, we can reuse the logic from the parent class while extending it with additional functionalities specific to the subclass.
            </p>

            <h1> Conclusion </h1>
            <p>
            Extending classes in JavaScript with the extends and super keywords provides a powerful mechanism for code reuse and organization. By creating subclasses, you can inherit properties and methods from a parent class and easily add or modify functionality as needed. Understanding and utilizing these keywords will enable you to write clean, efficient, and maintainable code.
            </p>
        </div>
    )
}
