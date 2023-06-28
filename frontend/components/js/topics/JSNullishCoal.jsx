import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSNullishCoal() {
    return (
        <div>
            <h2>The nullish coalescing operator</h2>
            <p>
                The nullish coalescing operator is denoted by ?? in JavaScript and was introduced in ES2020 to handle the issue of falsy values such as null or undefined being evaluated to true in logical OR operations. The operator evaluates if its left-hand side operand is either null or undefined. If it's either undefined or null, then it returns the value of its right-hand side operand. Otherwise, it returns the value of its left-hand side operand.
            </p>

            <p>
                In other words, the nullish coalescing operator returns the first operand if it is not nullish or returns the fallback or default value (i.e., the second operand) if the first operand is nullish.
            </p>

            <p>
                Here's an example to better understand the operator:
            </p>
            <CodeBlock
            code={`
const name = null ?? 'anonymous';
console.log(name); // Output: "anonymous"
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In this example, the name variable is initialized with a null value. When we apply the nullish coalescing operator, it checks if the left-hand side operand (nam‌e) is either null or undefined. As name is null, it returns the value of the right-hand side operand ('anonymous') as its fallback value.
            </p>

            <p>
                Let's look at another example:
            </p>

            <CodeBlock
            code={`
const price = 0;
const result = price ?? 100;
console.log(result); // Output: 0
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                In this example, the price variable has a value of 0. When we apply the nullish coalescing operator, it checks if the left-hand side operand (price) is either null or undefined. However, as 0 is not a nullish value, it returns the value 0.
            </p>

            <p>
                Furthermore, we can chain the nullish coalescing operators to handle cases where multiple variables can have nullish values:
            </p>
            <CodeBlock
            code={`
const id = null;
const username = null;
const displayName = 'John Doe';

const result = id ?? username ?? displayName;
console.log(result); // Output: "John Doe"
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                In this example, we have three variables: id, username, and displayName. The id and username variables are nullish, while the displayName variable has a string value. When we apply the nullish coalescing operator, it checks the three variables from left to right and returns the value of the first variable that is not nullish.
            </p>
        </div>
    )
}
