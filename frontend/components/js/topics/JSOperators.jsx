import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSOperators() {
    return (
        <div>
            <h1> Javascript operators </h1>
            <p>
                JavaScript is a popular programming language that's widely used in web development. It offers a variety of operators that allow you to perform different operations on values and variables. Understanding these operators is crucial in creating efficient and effective code. In this blog, we'll discuss the most commonly used operators in JavaScript.
            </p>

            <h2> Arithmetic Operators </h2>
            <p>
                Arithmetic operators are used for mathematical operations such as addition, subtraction, multiplication, and division. They are represented by the symbols "+", "-", "*", and "/".
            </p>
            <CodeBlock
            code={`
let a = 10;
let b = 5;

console.log(a + b); // Output: 15
console.log(a - b); // Output: 5
console.log(a * b); // Output: 50
console.log(a / b); // Output: 2
            `}
            language={"javascript"}
            onlyCode={true}
            />

            <h2> Remainder Operator </h2>
            <p>
                The remainder operator "%" returns the remainder left over when one value is divided by another value. It's often used to check if a number is even or odd.
            </p>
            <CodeBlock
            code={`
const num = 5;
console.log(num % 2); // Output: 1 (because 5 is an odd number and leaves a remainder of 1 when divided by 2)
            `}
            language={"javascript"}
            onlyCode={true}
            />

            <h2> Assignment Operators </h2>
            <p>
                Assignment operators are used to assign a value or an expression to a variable. They are represented by the symbol "=". For example:
            </p>
            <CodeBlock
            code={`
let a = 10;
let b = 5;

a += b; // shorthand for a = a + b
console.log(a); // Output: 15

a -= b; // shorthand for a = a - b
console.log(a); // Output: 10

a *= b; // shorthand for a = a * b
console.log(a); // Output: 50

a /= b; // shorthand for a = a / b
console.log(a); // Output: 10
            `}
            language={"javascript"}
            onlyCode={true}
            />

            <h2> Comparison Operators </h2>
            <p>
                Comparison operators are used to compare two values and return a boolean (true or false). They are represented by the symbols "&lt;", "&gt;", "&lt;&eq;", "&gt;&eq;", and "&lt;&gt;".";
            </p>

            <CodeBlock
            code={`
let a = 10;
let b = 5;

console.log(a > b); // Output: true
console.log(a < b); // Output: false
console.log(a >= b); // Output: true
console.log(a <= b); // Output: false
console.log(a == b); // Output: false
console.log(a != b); // Output: true
            `}
            language={"javascript"}
            onlyCode={true}
            />

            <h2> Logical Operators </h2>
            <p>
                Logical operators are used to combine two or more conditions and return a boolean (true or false). There are three logical operators: NOT (!), AND (&&), and OR (||).
            </p>
            <CodeBlock
            code={`
let a = 10;
let b = 5;
let c = 2;

console.log(a > b && b > c); // Output: true
console.log(a > b || b < c); // Output: true
console.log(!(a > b)); // Output: false
            `}
            language={"javascript"}
            onlyCode={true}
            />

            <h2> Logical Assignment Operators </h2>
            <p>
                Logical assignment operators are shorthand operators that combine logical operators and assignment operators. There are three types of logical assignment operators: ||=, &&=, and ??=.
            </p>
            <CodeBlock
            code={`
let user = null;

// If user is null or undefined, replace it with "Guest"
user ||= "Guest";
console.log(user); // Output: "Guest"

// If user is not null or undefined, replace it with "New User"
user &&= "New User";
console.log(user); // Output: "Guest" (because user is still "Guest" and the second condition is not met)

// If user is null or undefined, replace it with "Test User"
let newUser = null;
newUser ??= "Test User";
console.log(newUser); // Output: "Test User"
            `}
            language={"javascript"}
            onlyCode={true}
            />

            <h2> Exponentiation Operator </h2>
            <p>
                The exponentiation operator "**" calculates a base to the exponent power. It is similar to the Math.pow() method.
            </p>

            <CodeBlock
            code={`
// Using variables
let base = 2;
let exponent = 3;
console.log(base ** exponent); // Output: 8

// With negative exponent
console.log(2 ** -3); // Output: 0.125

// With decimal exponent
console.log(2 ** 0.5); // Output: 1.4142135623730951 (because the square root of 2 equals approximately 1.414)
            `}
            language={"javascript"}
            onlyCode={true}
            />

            

            <h1> Conclusion </h1>
            <p>
                In conclusion, JavaScript offers a variety of useful operators that allow you to perform different operations on values and variables. Understanding how to use these operators is essential in writing efficient and effective code.
            </p>

        </div>
    )
}
