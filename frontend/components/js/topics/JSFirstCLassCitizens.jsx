import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSFirstCLassCitizens() {

    return (
        <div>
            <h1> Functions as First-Class Citizens in JavaScript </h1>
            <p>
                In the world of JavaScript, functions are considered first-class citizens, which means they can be treated just like any other entity in the language. This powerful feature allows us to assign functions to variables, pass them as arguments to other functions, return them as values from functions, and more. Let's explore how functions as first-class citizens can enhance our code and enable a more flexible programming paradigm.
            </p>

            <h2> Assigning Functions to Variables </h2>
            <p>
                Assigning functions to variables in JavaScript is straightforward. We can declare a function using the function keyword and then assign it to a variable. This allows us to use the variable to invoke the function or pass it around as needed.
            </p>

            <CodeBlock
            code={`
function greet() {
    console.log("Hello, world!");
}
    
const hello = greet;
hello();  // Prints: Hello, world!
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                Here, we define the greet function and assign it to the variable hello. Now, we can invoke hello() to trigger the same behavior as calling greet(). This approach is useful when we want to pass functions as arguments or return functions from other functions.
            </p>

            <h2> Passing Functions as Arguments </h2>
            <p>
                One of the most powerful aspects of treating functions as first-class citizens is the ability to pass them as arguments to other functions. This feature allows us to create higher-order functions, which take other functions as arguments and perform actions based on them.
            </p>
            <CodeBlock
            code={`
function doSomething(callback) {
    // Perform some logic
    console.log("Doing something...");
    // Call the callback function provided
    callback();
}

function greet() {
console.log("Hello, world!");
}

doSomething(greet);  // Prints: Doing something... Hello, world!
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, the doSomething function accepts a callback function as input. It performs some logic and then invokes the callback. In this case, the greet function is passed as the callback, resulting in both "Doing something..." and "Hello, world!" being printed.
            </p>

            <h2> Returning Functions as Values </h2>
            <p>
                Another benefit of functions as first-class citizens is the ability to return functions as values from other functions. These functions, known as "higher-order functions," can dynamically generate and customize other functions based on conditions or inputs.
            </p>
            <CodeBlock
            code={`
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
console.log(double(5));  // Prints: 10

const triple = createMultiplier(3);
console.log(triple(4));  // Prints: 12
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, the createMultiplier function returns a new function that takes a number as input and multiplies it by the multiplier passed to createMultiplier. By calling createMultiplier(2), we get a function that doubles a number, and calling createMultiplier(3) returns a function that triples a number.
            </p>

            <h1> Conclusion </h1>
            <p>
            By treating functions as first-class citizens, JavaScript empowers developers to write more expressive and flexible code. This coding paradigm allows for the creation of higher-order functions, improves code reuse, and enables functional programming techniques. Embracing functions as first-class citizens in JavaScript unleashes the full potential of the language and enhances our ability to build robust and scalable applications.
            </p>
        </div>
    )
}
