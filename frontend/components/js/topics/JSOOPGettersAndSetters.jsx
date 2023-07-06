import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSOOPGettersAndSetters() {

    return (
        <div>
            <h1> Getters and setter methods </h1>
            <p>
                In JavaScript, the get and set keywords are used to define getters and setters for class properties. Getters and setters allow you to control the access and modification of object properties, providing a more controlled and consistent way to work with your class instances. Let's explore how getters and setters are implemented in JavaScript classes.
            </p>

            <h2> Getters </h2>
            <p>
                A getter is a special method that allows you to retrieve the value of a property. By using the get keyword before a method name, you can define a getter within a class. Here's an example:
            </p>

            <CodeBlock
            code={`
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    
    get circumference() {
        return 2 * Math.PI * this.radius;
    }
}

const myCircle = new Circle(5);
console.log(myCircle.circumference);  // Output: 31.41592653589793
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, the Circle class has a getter method called circumference. When we access myCircle.circumference, the getter is automatically invoked, and the calculated circumference value is returned. The circumference property itself doesn't exist in the class; it's just a computed value that is retrieved through the getter method.
            </p>

            <p>
                Getters provide a way to encapsulate the logic of deriving a value from existing properties or performing calculations without directly accessing those properties.
            </p>

            <h2> Setters </h2>
            <p>
            A setter, on the other hand, is a special method that allows you to assign a value to a property. By using the set keyword before a method name, you can define a setter within a class. Here's an example:
            </p>
            <CodeBlock
            code={`
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    
    get diameter() {
        return 2 * this.radius;
    }
    
    set diameter(newDiameter) {
        this.radius = newDiameter / 2;
    }
}

const myCircle = new Circle(5);
console.log(myCircle.diameter);  // Output: 10

myCircle.diameter = 20;
console.log(myCircle.radius);  // Output: 10
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, the Circle class has a setter method called diameter. When we assign a value to myCircle.diameter, the setter is automatically invoked, and it updates the value of the radius property based on the provided diameter. This allows us to control the logic of modifying the property when it's being set.
            </p>

            <p>
                Setters can be useful for validating or transforming new values before they are assigned to a property. They provide a way to enforce rules or constraints on writable properties to maintain the internal consistency of class instances.
            </p>

            <h1> Conclusion </h1>
            <p>
                Getters and setters in JavaScript classes allow you to control the access and modification of object properties. Getters retrieve computed values based on existing properties, while setters provide a mechanism to validate or transform new values before assigning them to properties. By using the get and set keywords, you can define these special methods within your classes, enhancing the flexibility and control over the behavior of your class instances.
            </p>
        </div>
    )
}
