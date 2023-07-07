import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSOOPNewClass() {
    return (
        <div>
            <h1> Alternative Way to Define a New Class in JavaScript </h1>
            <p>
                In JavaScript, the introduction of ES6 (ECMAScript 2015) brought a more intuitive way to work with classes through the class syntax. However, alongside the class syntax, JavaScript also provides an alternative approach to define a new class using class expressions. In this part, we will explore class expressions and their usage as an alternative way to define classes in JavaScript.
            </p>

            <h2> Introduction to Class Expressions </h2>
            <p>
                Similar to function expressions, class expressions allow us to define a new class and assign it to a variable. Class expressions can be named or anonymous, offering flexibility in terms of how we structure and organize our code.
            </p>

            <p> Here's an example of a named class expression: </p>
            <CodeBlock
            code={`
const Rectangle = class {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    get area() {
        return this.width * this.height;
    }
};

rect = Rectangle(5, 10);

console.log(rect.area); // output: 50
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, we define a named class expression by assigning an unnamed class to the variable Rectangle. The class has a constructor method and a getter method that calculates the area of the rectangle.
            </p>

            <h2> Anonymous Class Expressions </h2>
            <p>
                While named class expressions are helpful for debugging and stack traces, sometimes it may be more appropriate to use anonymous class expressions, especially when the class is used only within a limited scope. Here's an example:
            </p>
            <CodeBlock
            code={`
const Circle = class {
    constructor(radius) {
        this.radius = radius;
    }
    
    get circumference() {
        return 2 * Math.PI * this.radius;
    }
};

circle = new Circle(5);
console.log(circle.circumference); // output: 31.41592653589793
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this case, we define an anonymous class expression assigned to the Circle variable. The class has a constructor and a getter method to calculate the circumference of the circle.
            </p>

            <h2> Usage and Benefits of Class Expressions </h2>
            <p>
                The flexibility provided by class expressions allows us to create classes dynamically. For example, we can conditionally create different class instances based on certain conditions or use class expressions within higher-order functions to generate different classes with customizations.
            </p>

            <p>
                Furthermore, class expressions can be used for creating singleton classes (classes with only one instance) or creating classes on-demand as needed. This enables a more efficient utilization of resources, as the class is created exactly when it is required.
            </p>

            <p>
                Another benefit of class expressions is the ability to create classes that extend from other classes on-the-fly. This dynamic inheritance can be useful when we need different variations or adaptations of existing classes.
            </p>

            <h1> Conclusion</h1>
            <p>
                While the class syntax introduced in ES6 provides a more traditional and declarative way to define classes, class expressions offer an alternative approach with added flexibility. Whether you use named or anonymous class expressions, they allow you to create classes dynamically, adapt existing classes, and optimize resource utilization. Combining class expressions with the power of JavaScript's ability to dynamically generate and modify classes opens up a world of possibilities for organizing, extending, and creating new classes in your JavaScript codebase.
            </p>
        </div>
    )
}
