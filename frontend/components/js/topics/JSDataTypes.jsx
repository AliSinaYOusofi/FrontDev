import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSDataTypes() {
    return (
        <div>
            <h1> Introduction to JavaScript Data Types </h1>
            <p>
                JavaScript data types are categorized into two groups: primitive types and reference types. Primitive types are immutable and include the following data types:
            </p>

            <ul className="list-decimal ml-10">
                <li> Boolean </li>
                <li> Null </li>
                <li> Undefined </li>
                <li> Number </li>
                <li> BigInt </li>
                <li> String </li>
                <li> Symbol </li>
            </ul>

            <p> Reference types are mutable and include the following data types: </p>
            <ul className="list-decimal ml-10">
                <li> Object </li>
                <li> Array </li>
                <li> Function </li>
            </ul>

            <h1> Primitive Types </h1>

            <h2> Boolean </h2>
            <p> The Boolean data type represents a logical value - true or false. For example: </p>
            <CodeBlock
            code={`
const isSunny = true; 
const isRaining = false; 
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Null </h2>
            <p>
                The Null data type represents the intentional absence of any object value. For example:
            </p>
            <CodeBlock
            code={`
const noValue = null; 
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Undefined </h2>
            <p>
                Undefined represents an uninitialized value or the absence of a value. For example:
            </p>
            <CodeBlock
            code={`
let someValue; 
console.log(someValue); // Output: undefined
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Number </h2>
            <p>
                The Number data type represents numeric values, including integers and decimals. For example:
            </p>
            <CodeBlock
            code={`
const someNumber = 42; 
const someDecimal = 3.14; 
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> BigInt </h2>
            <p>
                The BigInt data type represents a numeric value with arbitrary precision. BigInt values are created by appending "n" to the end of an integer value. For example: 
            </p>

            <CodeBlock
            code={`
const someBigInt = 1234567890123456789012345678901234567890n; 
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> String </h2>
            <p>
                The String data type represents a sequence of characters. String values are created by enclosing the characters in single or double quotes. For example:
            </p>
            <CodeBlock
            code={`
const someString = "Hello, World!"; 
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Symbol </h2>
            <p>
                The Symbol data type represents a unique identifier value and is often used as an object property key. For example:
            </p>
            <CodeBlock
            code={`
const someSymbol = Symbol("description"); 
            `}
            language="javascript"
            onlyCode={true}
            />

            <h1> Reference Types </h1>
            <h2> Object </h2>
            <p>
                The Object data type represents a collection of related data or functionality. Objects are created using curly braces {} and may include properties, methods, and other objects. For example:
            </p>
            <CodeBlock
            code={`
const myObject = {
    name: "John Doe",
    age: 30,
    isStudent: true
};            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Array </h2>
            <p>
                The Array data type represents an ordered list of values. Arrays are created using square brackets [] and may include any combination of primitive or reference types. For example:
            </p>
            <CodeBlock
            code={`
const myArray = [1, 2, "three", {four: 4}];        `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Function </h2>
            <p>
                The Function data type represents a reusable block of code that can be called multiple times. Functions are created using the function keyword, and may include one or more parameters and a function body. For example:
            </p>
            <CodeBlock
            code={`
function addNumbers(a, b) {
    return a + b;
`}            language="javascript"
            onlyCode={true}
            />

            <h1> Conclusion </h1>
            <p>
                Understanding data types in JavaScript is essential for writing effective and efficient code. We hope that this overview of primitive and reference types, along with examples for each type, has been helpful in improving your understanding of JavaScript data types. As you continue to work with JavaScript, remember to carefully consider the appropriate data type for your variables and functions, and don't be afraid to experiment with different data types to determine which is best for your needs.
            </p>
        </div>
    )
}
