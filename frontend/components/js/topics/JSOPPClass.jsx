import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSOPPClass() {
    return (
        <div>
            <h1> classes in javascript </h1>
            <p>
                In the world of modern JavaScript, ES6 introduced a class syntax that provides a more intuitive and structured way of working with objects and object-oriented programming. In this part, we will delve into ES6 class syntax, understanding its benefits and exploring how to declare a class in JavaScript.
            </p>

            <h2> Introduction to ES6 Class Syntax </h2>
            <p>
                ES6 (ECMAScript 2015) introduced several new features to JavaScript, one of which is the class syntax. Although JavaScript has always supported object-oriented programming through prototype-based inheritance, the class syntax simplifies the process of defining and creating objects with clear inheritance relationships.
            </p>

            <p>
                Underneath the surface, classes in JavaScript are still based on the prototype model. However, the class syntax provides a more familiar and readable syntax that resembles classes in other popular programming languages like Java or C#.
            </p>

            <h2> Declaring a Class </h2>
            <p>
                To declare a class in JavaScript using the ES6 syntax, we use the class keyword followed by the name of the class. Here's a simple example:
            </p>
            <CodeBlock
            code={`
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    eat() {
        console.log(\`\${this.name} is eating.\`);
    }
    
    sleep() {
        console.log(\`\${this.name} is sleeping.\`);
    }
}
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                In this example, we declare a class named Animal using the class keyword. Inside the class definition, we have a constructor method and a couple of other methods (eat() and sleep()). Let's break down each part:
            </p>

            <h2> 1. Constructor Method </h2>
            <p>
                The constructor is a special method that is automatically called when an instance of the class is created using the new keyword. It is used to initialize the object's properties. In the example above, the constructor takes in two parameters (name and age) and assigns them to the respective properties of the object.
            </p>

            <h2> 2. Other Methods </h2>
            <p>
                The methods defined within the class are typically used to encapsulate behaviors specific to the class. In the example, the eat() and sleep() methods are defined to represent actions that an animal can perform. These methods can be called on instances of the class later on.
            </p>

            <h2> Creating Instances of a Class </h2>
            <p>
                Once we have defined a class, we can create instances (objects) of that class using the new keyword:
            </p>
            <CodeBlock
            code={`
const lion = new Animal("Simba", 5);
const elephant = new Animal("Dumbo", 10);
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Invoking methods </h2>
            <p>
                After an object is created then you can invoke the methods of the class
                by specifying the object name, then add a dot and finally the method name.
            </p>

            <p>
                Here is an examples: 
            </p>
            <CodeBlock
            code={`
lion.eat() // output: Simba is eating
lion.sleep() // output: Simba is sleeping

elephant.eat() // output: Dumbo is eating
elephant.sleep() // output: Dumbo is sleeping
            `}
            language="javascript"
            onlyCode={true}
            />

            <h1> Conclusion </h1>
            <p>
            ES6 class syntax brings a more familiar and structured approach to working with objects in JavaScript. By using the class keyword, we can declare classes, define constructor methods, and add additional methods to encapsulate behaviors. Additionally, with the extends keyword, we can achieve inheritance by creating subclasses. This class syntax has made JavaScript more accessible to developers experienced in other object-oriented languages.
            </p>
        </div>
    )
}
