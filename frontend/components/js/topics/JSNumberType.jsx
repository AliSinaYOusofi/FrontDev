import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSNumberType() {

    return (
        <div>
            <h1> Number data type</h1>
            <p>
                JavaScript uses the Number data type to represent both integer and floating-point numbers. In this blog post, we'll explore the Number data type and its operations, including basic math, comparison, and bitwise operations.
            </p>

            <h1> Basic Math Operations </h1>
            <p>
                JavaScript provides several operators for performing basic math operations on numbers. The most common math operators include the following:
            </p>

            <h2> Addition (+) </h2>
            <p>
                The addition operator can be used to add two or more numbers together. For example:
            </p>
            <CodeBlock
            code={`
const a = 3;
const b = 4;
const sum = a + b; // sum is 7
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Subtraction (-) </h2>
            <p>
                The subtraction operator can be used to subtract one number from another. For example:
            </p>
            <CodeBlock
            code={`
const a = 9;
const b = 4;
const difference = a - b; // difference is 5
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Multiplication (*) </h2>
            <p>
                The multiplication operator can be used to multiply two or more numbers together. For example:
            </p>
            <CodeBlock
            code={`
const a = 3;
const b = 4;
const product = a * b; // product is 12
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Division (/) </h2>
            <p>
                The division operator can be used to divide one number by another. For example:
            </p>
            <CodeBlock
            code={`
const a = 10;
const b = 2;
const quotient = a / b; // quotient is 5
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Remainder (%) </h2>
            <p>
                The remainder operator can be used to find the remainder of a division operation. For example:
            </p>
            <CodeBlock
            code={`
const a = 10;
const b = 3;
const remainder = a % b; // remainder is 1
            `}
            language="javascript"
            onlyCode={true}
            />


            <h1> Comparison Operations </h1>
            <p>
                JavaScript also provides several operators for comparing numbers. The most common comparison operators include the following:
            </p>

            <h2> Equality (==) </h2>
            <p>
                The equality operator compares two values for equality. For example:
            </p>
            <CodeBlock
            code={`
const a = 5;
const b = 5;
console.log(a == b); // true
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Inequality (!=) </h2>
            <p>
                The inequality operator compares two values for inequality. For example:
            </p>
            <CodeBlock
            code={`
const a = 5;
const b = 6;
console.log(a != b); // true
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Greater Than (&gt;) </h2>
            <p>
                The greater than operator compares two values to see if the first value is greater than the second value. For example:
            </p>

            <CodeBlock
            code={`
const a = 10;
const b = 5;
console.log(a > b); // true
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Less than (&lt;) </h2>
            <p>
                The less than operator compares two values to see if the first value is less than the second value. For example:
            </p>
            <CodeBlock
            code={`
const a = 3;
const b = 6;
console.log(a < b); // true
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Greater than or equal to (&gt;&eq;) </h2>
            <p>
                The greater than or equal to operator compares two values to see if the first value is greater than or equal to the second value. For example:
            </p>
            <CodeBlock
            code={`
const a = 5;
const b = 5;
console.log(a >= b); // true
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Less than or equal to (&lt;&eq;) </h2>
            <p>
                The less than or equal to operator compares two values to see if the first value is less than or equal to the second value. For example:
            </p>
            <CodeBlock
            code={`
const a = 4;
const b = 6;
console.log(a <= b); // true
            `}
            language="javascript"
            onlyCode={true}
            />

            <h1> Bitwise Operations </h1>
            <p>
                JavaScript also provides several bitwise operators for performing bitwise operations on numbers. The most common bitwise operators include the following:
            </p>

            <h2> Bitwise AND (&) </h2>
            <p>
                The bitwise AND operator performs a bitwise AND operation on two values. For example:
            </p>
            <CodeBlock
            code={`
const a = 5;
const b = 3;
const result = a & b; // result is 1
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Bitwise OR (|) </h2>
            <p>
                The bitwise OR operator performs a bitwise OR operation on two values. For example:
            </p>
            <CodeBlock
            code={`
const a = 5;
const b = 3;
const result = a | b; // result is 7
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Bitwise XOR (^) </h2>
            <p>
                The bitwise XOR operator performs a bitwise XOR operation on two values. For example:
            </p>
            <CodeBlock
            code={`
const a = 5;
const b = 3;
const result = a ^ b; // result is 6
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Bitwise NOT (~) </h2>
            <p>
                The bitwise NOT operator performs a bitwise NOT operation on a value. For example:
            </p>
            <CodeBlock
            code={`
const a = 5;
const result = ~a; // result is -6
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Left shift (&lt;&lt;) </h2>
            <p>
                The left shift operator shifts the binary representation of a value to the left by a specified number of bits. For example:
            </p>
            <CodeBlock
            code={`
const a = 5;
const result = a << 1; // result is 10
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Right shift (&gt;&gt;) </h2>
            <p>
                The right shift operator shifts the binary representation of a value to the right by a specified number of bits. For example:
            </p>
            <CodeBlock
            code={`
const a = 5;
const result = a >> 1; // result is 2
            `}
            language="javascript"
            onlyCode={true}
            />

            <h2> Conclusion </h2>
            <p>
                In conclusion, the Number data type in JavaScript provides a lot of functionality for working with numbers. From basic math operations to comparison and bitwise operations, JavaScript provides all the tools necessary for processing numerical data. Understanding these operations is essential for writing effective JavaScript code that can handle numerical tasks with ease and efficiency.
            </p>
        </div>
    )
}
