import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSFunctions() {
    return (
        <div>
            <h1>Functions in JavaScript</h1>
            <p>
                Functions play a vital role in JavaScript, making it a versatile and powerful programming language. They allow you to group blocks of code and execute them whenever needed, enabling efficient and reusable code. In this part, we will dive into the world of JavaScript functions, exploring their syntax, types, and best practices.
            </p>

            <h2> What is a Function </h2>
            <p>
                In programming, a function is similar to a recipe or a set of instructions aimed at performing a specific task. Functions help organize code into logical blocks and provide a way to reuse code without redundancy. JavaScript functions can take input parameters, perform computations, and return a value, or just execute a series of actions.
            </p>

            <h2> Defining a Function </h2>
            <p>
                A function in JavaScript is defined using the function keyword, followed by the function name, parentheses, and curly braces. Here's an example:
            </p>

            <CodeBlock
            code={`
function greet() {
    console.log("Hello, world!");
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the code above, we defined a function called greet that, when called, logs the string "Hello, world!" to the console.
            </p>

            <h2> Invoking Functions </h2>

            <p>
                After defining a function, we can invoke or call it to execute the code within the function block. To invoke a function, simply write its name followed by parentheses:
            </p>

            <CodeBlock
            code={`
greet(); // Output: Hello, world!
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Parameters and Arguments </h2>
            <p>
                Functions in JavaScript often require input values to work with. These input values are known as parameters. Parameters are defined within the parentheses during function declaration. Let's modify our greet function to accept a name parameter:
            </p>

            <CodeBlock
            code={`
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob");   // Output: Hello, Bob!
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the example above, the greet function takes a name parameter, allowing us to personalize the greeting.
            </p>

            <p>
                When invoking a function, the values passed inside the parentheses are called arguments. In the example above, "Alice" and "Bob" are the arguments passed to the greet function.
            </p>

            <h2> Returning Values </h2>
            <p>
                Functions can also return values using the return statement. The returned value can be assigned to a variable or used directly. Let's modify our greet function to return the greeting instead of logging it:
            </p>
            <CodeBlock
            code={`
function greet(name) {
    return "Hello, " + name + "!";
}
    
const greeting = greet("Alice");
console.log(greeting); // Output: Hello, Alice!
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this modified example, the greet function returns the greeting string, which we store in the greeting variable and then output to the console.
            </p>

            <h2> Function Expressions </h2>
            <p>
                In JavaScript, functions can be defined using function expressions. This involves assigning a function to a variable. Function expressions are useful when you need to pass functions as arguments, return them from other functions, or work with anonymous functions. Here's an example:
            </p>

            <CodeBlock
            code={`
const add = function (a, b) {
    return a + b;
}
    
const result = add(3, 4);
console.log(result); // Output: 7
            `}
            language="javascript"
            onlyCode={true}
            />

            <p> In the code above, we assigned an anonymous function to the add variable using a function expression. This function takes two parameters and returns their sum. </p>
            
            <h2> Default Parameters </h2>
            <p>
                JavaScript provides the ability to set default values for function parameters. Default parameters allow a function to be called without passing a value for a specific parameter. If no argument is provided, the default parameter value is used instead. Let's enhance our greet function to have a default parameter:
            </p>
            <CodeBlock
            code={`
function greet(name = "world") {
    console.log("Hello, " + name + "!");
}
    
greet();          // Output: Hello, world!
greet("Alice");   // Output: Hello, Alice!
greet("Bob");     // Output: Hello, Bob!
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the example above, the name parameter has a default value of "world". If no argument is passed when calling greet, the function will use the default value.
            </p>

            <p>
                Default parameters are useful when you want to handle missing or undefined values gracefully, providing a fallback value when needed.
            </p>


            <h1> Conclusion </h1>
            <p>
            Functions are a fundamental part of JavaScript programming. They help structure code, make it reusable, and enhance overall efficiency. Understanding how to define functions, use parameters and arguments, return values, and work with function expressions lays the foundation for writing clean, modular, and maintainable JavaScript code. So, the next time you need to perform a specific task, don't forget the power of functions!
            </p>
        </div>
    )
}
