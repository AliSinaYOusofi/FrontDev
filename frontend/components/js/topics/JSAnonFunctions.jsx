import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSAnonFunctions() {
    return (
        <div>
            <h1>JavaScript Anonymous Functions </h1>
            <p>
                Anonymous functions, also known as lambda functions or function expressions, are a powerful feature in JavaScript that allow you to define and use functions without assigning them a name. While named functions are useful for reusable code blocks, anonymous functions provide flexibility and are commonly used in various scenarios. Let's explore the benefits and use cases of JavaScript anonymous functions in this part.
            </p>

            <h2>1. Immediate Function Invocations (IIFE) </h2>
            <p>
                One common use case for anonymous functions is creating immediately invoked function expressions (IIFE). These functions are executed as soon as they are defined. It's a popular design pattern used to create a local scope, preventing variables from polluting the global namespace. Here's an example:
            </p>

            <CodeBlock
            code={`
(function() {
    var name = "John";
    console.log("Hello, " + name + "!");
})();
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, we define an anonymous function and immediately invoke it. Inside the function, we create a variable called name and assign it the value "John". Then, we log the message "Hello, John!" to the console.
            </p>

            <p>
                The function is wrapped in parentheses to ensure it is treated as an expression. Finally, the trailing parentheses () immediately invoke the function, executing its code.
            </p>

            <h2> 2. Higher-Order Functions </h2>
            <p>
                JavaScript's support for higher-order functions opens up powerful possibilities with anonymous functions. Higher-order functions accept functions as parameters or return them as results. Here's an example of a higher-order function that uses an anonymous function as an argument:
            </p>

            <CodeBlock
            code={`
function applyOperation(x, y, operation) {
    return operation(x, y);
}

const result = applyOperation(5, 10, function(a, b) {
return a + b;
});
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, the applyOperation function accepts three parameters: two numbers and an anonymous function. The anonymous function is then invoked within applyOperation, allowing you to define the specific operation to be performed dynamically.
            </p>

            <p>
                Higher-order functions combined with anonymous functions provide a flexible way of structuring and manipulating code.
            </p>

            <h1> Conclusion </h1>
            <p>
                JavaScript anonymous functions offer flexibility, encapsulation, and the ability to create dynamic code blocks. Whether it's for immediate function invocations, callbacks, higher-order functions, or closures, anonymous functions empower developers to write clean, modular, and organized code.
            </p>
            <p>
            By understanding and leveraging the power of anonymous functions, you can take your JavaScript skills to the next level and build more robust and maintainable applications. So go ahead and embrace the power of anonymous functions in your JavaScript projects!
            </p>
        </div>
    )
}
