import CodeBlock from '@/components/Code Block/CodeBlock'
import React from 'react'

export default function JSNestedConditionals() {

    return (
        <div>
            <h1> Nested conditionals in javascript</h1>
            <p>
                Nested conditional statements in JavaScript are used when we need to check for multiple conditions within a single if statement. A nested if statement is an if statement inside another if statement. In this part, we will discuss nested conditionals in detail along with some examples.
            </p>

            <h2>Nested if statement</h2>
            <p>
                The syntax of nested if statement is as follows:
            </p>
            <CodeBlock
            code={`
if (condition1) {
    // code to execute if condition1 is true
    if (condition2) {
        // code to execute if both condition1 and condition2 are true
    }
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                Here, we first check the outer condition (condition1), and if it is true, then we move to the inner if statement and check its condition (condition2). If both conditions are true, we execute the code inside the inner if statement.
            </p>

            <h1> Examples </h1>
            
            <h2> Example 1: Nested if Statement </h2>
            
            <CodeBlock
            code={`
let num1 = 7;
let num2 = 4;

if (num1 > 0) {
    // outer if statement
    console.log("num1 is positive");

    if (num2 > 0) {
    // inner if statement
    console.log("num2 is positive");
    }
}
            `}
            language="javascript"
            onlyCode={true}
            />
            <p>
                In the above example, the outer if statement checks if num1 is positive. If it is true, the message "num1 is positive" is printed to the console. Then, the inner if statement is executed to check if num2 is positive. If it is true, the message "num2 is positive" is printed to the console.
            </p>

            <h2> Example 2: Using Nested if...else Statements </h2>

            <CodeBlock
            code={`
let num1 = 5;
let num2 = -1;

if (num1 > 0) {
    // outer if statement
    console.log("num1 is positive");

    if (num2 > 0) {
    // inner if statement
    console.log("num2 is positive");
    } else {
    // inner else statement
    console.log("num2 is negative or zero");
    }
} else {
    // outer else statement
    console.log("num1 is negative or zero");
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the above example, the outer if statement checks if num1 is positive. If it is true, the message "num1 is positive" is printed to the console. Then, the inner if statement checks if num2 is positive. If it is true, the message "num2 is positive" is printed to the console. If it is false, the message "num2 is negative or zero" is printed to the console. If the outer if statement is false, then the message "num1 is negative or zero" is printed to the console.
            </p>

            <h2> Example 3: Multiple Nested Statements </h2>

            <CodeBlock
            code={`
let num1 = 5;
let num2 = 7;
let num3 = -4;

if (num3 < 0) {
    // outer if statement
    console.log("num3 is negative");

    if (num1 > 0) {
        // inner if statement
        console.log("num1 is positive");

        if (num2 > 5) {
            // nested inner if statement
            console.log("num2 is greater than 5");
        } else {
            // nested inner else statement
            console.log("num2 is less than or equal to 5");
        }
    }
}
            `}
            language="javascript"
            onlyCode={true}
            />

            <p>
                In the above example, the outer if statement checks if num3 is negative. If it is true, then the message "num3 is negative" is printed to the console. Then, the inner if statement checks if num1 is positive. If it is true, then the message "num1 is positive" is printed to the console. Then, the nested inner if statement checks if num2 is greater than 5. If it is true, then the message "num2 is greater than 5" is printed to the console. If it is false, then the message "num2 is less than or equal to 5" is printed to the console.
            </p>

            <h1> Conclusion </h1>
            <p>
            In summary, nested conditional statements in JavaScript are useful when we need to check for multiple conditions within a single if statement. We can use nested if statements to write more complex conditionals that handle different cases. Above examples and syntax of nested if statements will help you to write better-structured code.

            </p>
        </div>
    )
}
