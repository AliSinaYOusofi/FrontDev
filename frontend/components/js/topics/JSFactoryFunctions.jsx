import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSFactoryFunctions() {
    return (
        <div>
            <h1> Factory Functions in JavaScript </h1>
            <p>
                In the world of JavaScript, object creation is a common task. Traditionally, constructors or class-based inheritance were used to instantiate objects. However, there is another powerful pattern at our disposal – factory functions. In this part, we will explore factory functions in JavaScript, their benefits, and how they allow us to create flexible and reusable objects.
            </p>

            <h2> Understanding Factory Functions </h2>
            <p>
                A factory function is a function that returns an object. It acts as a "factory" by encapsulating the logic for creating and configuring objects of a specific type. Unlike constructors, factory functions do not use the new keyword and are not tied to a specific prototype. This gives them incredible flexibility in object creation.
            </p>

            <h2> The Anatomy of a Factory Function </h2>
            <p>
                Let's dive into the structure of a factory function:
            </p>
            <CodeBlock
            code={`
function createObject(param1, param2) {
    const obj = {}; // Create an empty object
    
    // Configure the object with the provided parameters
    obj.param1 = param1;
    obj.param2 = param2;
    
    // Define methods on the object
    obj.method1 = function() {
        // Method logic here
    };
    
    obj.method2 = function() {
        // Method logic here
    };
    
    // Return the configured object
    return obj;
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, createObject is a factory function. It takes in parameters param1 and param2, and creates an empty object using the {} syntax. The function then proceeds to configure the object by assigning properties and defining methods on it. Finally, it returns the fully configured object.
            </p>

            <h2> Using Factory Functions </h2>
            <p>
                Using factory functions is straightforward. You simply invoke the function and store its returned object in a variable:
            </p>
            <CodeBlock
            code={`
const myObject = createObject('value1', 'value2');
console.log(myObject.param1); // Outputs: value1
myObject.method1(); // Call object's method
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the example above, createObject is invoked, passing 'value1' and 'value2' as parameters. The resulting object is then stored in myObject, which can later be used to access properties and call methods.
            </p>

            <h2> Benefits of Factory Functions </h2>
            <ul className="list-disc ml-10">
                <li> Encapsulation and Information Hiding: Factory functions encapsulate the object creation process, hiding the implementation details from the client code. This allows for cleaner and more maintainable code. </li>
                <li> Flexibility: Unlike constructors, factory functions are not tied to a specific prototype or class. They can create and return different types of objects with varying configurations based on input parameters or other factors. This flexibility allows you to adapt object creation to specific use cases.</li>
                <li> Reusability: Factory functions promote code reusability. By encapsulating object creation, you can easily create multiple instances of objects with different configurations. This eliminates the need to duplicate code or rely on inheritance.</li>
                <li> Control over Object Creation: Factory functions provide you with effective control over object creation. You can perform additional validation, pre-processing, or complex calculations before returning the object. This allows for cleaner and more reliable object initialization.</li>
            </ul>

            <h1> Conclusion </h1>
            <p>
                Factory functions are an elegant and powerful approach to object creation in JavaScript. They offer encapsulation, flexibility, reusability, and control over object creation. By leveraging factory functions, developers can write cleaner, more maintainable, and highly adaptable code.
            </p>
        </div>
    )
}
