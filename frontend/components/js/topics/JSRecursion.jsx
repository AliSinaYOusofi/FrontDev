import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSRecursion() {
    return (
        <div>
            <h1> Recursion in JavaScript </h1>
            <p>
                Recursion is a powerful concept in programming where a function calls itself repeatedly until a certain condition is met. This technique allows us to solve complex problems by breaking them down into smaller and more manageable subproblems. In JavaScript, we can harness the power of recursion to write elegant and efficient code. In this blog post, we will explore recursion in JavaScript using functions and uncover its potential in solving a wide array of problems.
            </p>

            <h2> Understanding the Basics of Recursion </h2>
            <p>
                Recursion involves defining a function that calls itself within its own definition. This allows the function to repeat its execution, with each new iteration delving deeper into the problem until the desired outcome is achieved. At its core, recursion relies on two important factors:
            </p>

            <ul className="ml-10 list-decimal">
                <li> Base Case: This is the condition under which the function stops calling itself and returns a value or performs a specific action. </li>
                <li> Recursive Case: This is the scenario in which the function calls itself again to solve a smaller subproblem, bringing it closer to the base case.</li>
            </ul>

            <h2> Applying Recursion in JavaScript </h2>
            <p>
                JavaScript lends itself well to recursion due to its ability to handle functions as first-class citizens. Let's take a closer look at how we can implement recursion using functions in JavaScript.
            </p>
            <CodeBlock
            code={`
function countdown(num) {
    // Base case: if num reaches 0, stop recursion and return
    if (num === 0) {
        console.log("Blastoff!");
        return;
    }
    
    console.log(num);
    // Recursive case: call countdown with num - 1
    countdown(num - 1);
}
    
countdown(5);  // Prints: 5, 4, 3, 2, 1, Blastoff!
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, we define a countdown function that takes an integer as an argument. Using recursion, the function prints each number, starting from the given number and decreasing by one until it reaches the base case of num === 0, at which point it prints "Blastoff!" and stops.
            </p>

            <h2> Solving Problems with Recursion </h2>
            <p>
            Recursion can be particularly useful when solving problems that can be naturally broken down into smaller subproblems. Let's look at an example of using recursion to calculate the factorial of a number:
            </p>
            <CodeBlock
            code={`
function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // Recursive case: return n multiplied by factorial of n-1
    return n * factorial(n - 1);
}

console.log(factorial(5));  // Prints: 120
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                Here, the factorial function calculates the factorial of a given number n. It uses recursion by calling itself with n - 1 until it reaches the base case of n === 0 or n === 1.
            </p>

            <h2> The Beauty and Considerations of Recursion </h2>
            <p>
                Recursion offers an elegant and concise solution to complex problems, but it's important to use it judiciously. Here are a few considerations when working with recursion:
            </p>

            <ul className="ml-10 list-decimal">
                <li> Base Case: Ensure that the base case is correctly defined, as it determines when the recursion stops. Missing or incorrect base cases can lead to infinite recursion.</li>
                <li> Efficiency: Recursive solutions can be computationally expensive due to the repeated function calls. It's essential to strike a balance and consider iterative or optimized approaches for larger problems.</li>
                <li> Stack Size Limit: Recursion relies on function calls being added to the call stack. If the problem size is too large and exceeds the stack size limit, it can result in a "stack overflow" error. Iterative solutions may be more suitable for such cases.</li>
            </ul>

            <h1>Conclusion </h1>
            <p>
            Recursion is a powerful tool in your JavaScript programming arsenal. By using functions that call themselves, you can solve complex problems with elegance and efficiency. Understanding the base case, recursive case, and how to apply recursion effectively will empower you to write sophisticated and scalable code. Embrace the journey of recursion and explore the vast landscapes of problem-solving in JavaScript.
            </p>
        </div>
    )
}
